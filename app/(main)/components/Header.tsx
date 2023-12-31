"use client";
import {
  useLogoutQuery,
  useSocialAuthMutation,
} from "@/redux/features/auth/authApi";
import CustomModal from "@/utils/Sections/CustomModal";
import NavItems from "@/utils/Sections/NavItems";
import ThemeSwitcher from "@/utils/Sections/ThemeSwitcher";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineUserCircle } from "react-icons/hi";
import { useSelector } from "react-redux";
// import Avatar from "@/public/assets/images/avatar.png";
import Avatar from "@/public/assets/images/avatar.png";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import Verify from "./auth/Verify";
import toast from "react-hot-toast";
import { usePathname } from "next/navigation";
import Logo from "@/public/assets/logo/logo.svg";

type Props = {
  // open: boolean;
  // setOpen: (open: boolean) => void;
  // activeItem: number;
  // route: string;
  // setRoute: (route: string) => void;
};

const Header: FC<Props> = ({}) => {
  const pathname = usePathname();
  const { user } = useSelector((state: any) => ({
    user: state.auth.user,
  }));
  const { data } = useSession();
  const [socialAuth, { isSuccess, error }] = useSocialAuthMutation();

  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");

  const [active, setActive] = useState(false);

  const [openSideBar, setOpenSideBar] = useState(false);

  const [logout, setLogout] = useState(false);

  const {} = useLogoutQuery(undefined, {
    skip: !logout ? true : false,
  });

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 85) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }

  const handleClose = (e: any) => {
    if (e.target.id === "screen") {
      setOpenSideBar(false);
    }
  };

  useEffect(() => {
    if (!user) {
      if (data) {
        socialAuth({
          email: data?.user?.email,
          name: data?.user?.name,
          avatar: data?.user?.image,
        });
      }
    }
    if (isSuccess && data === null) {
      toast.success("Logged in successfully");
    }
    if (data === null) {
      setLogout(true);
    }
  }, [data, user]);

  useEffect(() => {
    if (pathname?.includes("/profile")) {
      setActiveItem(5);
    }
  }, [pathname]);

  return (
    <div className="w-full relative">
      <div
        className={`${
          active
            ? "dark:bg-opacity-50 dark:bg-gradient-to-b dark:from-gray-900  dark:to-black fixed top-0 left-0 w-full h-[80px] z-[80] border-b dark:border-[#ffffff1c] shadow-xl transition duration-500"
            : "w-full border-b dark:border-[#ffffff1c] h-[80px] z-[80] dark:shadow"
        }`}
      >
        <div className="w-[95%] 800px:w-[92%] m-auto py-2 h-full">
          <div className="w-full h-[100%] flex items-center justify-between p-3">
            <Link
              href={"/"}
              className={`text-[25px] font-Poppins font-[500] text-black dark:text-white`}
            >
              <Image
                src={Logo}
                alt="logo"
                width={125}
                height={125}
              />
            </Link>

            <div className="flex items-center">
              <NavItems
                activeItem={activeItem}
                isMobile={false}
              />
              <div className="mx-4">
                <ThemeSwitcher />
              </div>

              {/* Only for mobile */}
              <div className="800px:hidden">
                <HiOutlineMenuAlt3
                  size={25}
                  className="cursor-pointer dark:text-white text-black mr-3"
                  onClick={() => setOpenSideBar(true)}
                />
              </div>

              {user ? (
                <Link href={`/profile`}>
                  <Image
                    src={user?.avatar ? user?.avatar.url : Avatar}
                    alt="profile_avatar"
                    className={`w-[30px] h-[30px] rounded-full cursor-pointer ${
                      activeItem === 5
                        ? "border-[2px] dark:border-[#ffc107] border-[#37a39a]"
                        : "none"
                    }`}
                    width={30}
                    height={30}
                  />
                </Link>
              ) : (
                <HiOutlineUserCircle
                  size={30}
                  className="hidden 800px:block cursor-pointer dark:text-white text-black"
                  onClick={() => setOpen(true)}
                />
              )}
            </div>
          </div>
        </div>

        {/* mobile sidebar */}
        {openSideBar && (
          <div
            className="fixed top-0 left-0 w-full h-screen bg-[#00000024] dark:bg-[unset] z-[9999]"
            onClick={handleClose}
            id="screen"
          >
            <div className="w-[70%] fixed z-[999999] h-screen bg-white dark:bg-slate-900 dark:bg-opacity-90 top-0 right-0">
              <NavItems
                activeItem={activeItem}
                isMobile={true}
              />

              {user ? (
                <Link
                  href={`/profile`}
                  className={`flex items-center`}
                >
                  <Image
                    src={user?.avatar ? user?.avatar.url : Avatar}
                    alt="profile_avatar"
                    className={`w-[30px] h-[30px] rounded-full cursor-pointer ml-6`}
                    width={30}
                    height={30}
                  />
                  <span className="block text-[20px] ml-2 font-Poppins font-[400] dark:text-white text-black">
                    {user?.name}
                  </span>
                </Link>
              ) : (
                <div className="flex items-center">
                  <HiOutlineUserCircle
                    size={30}
                    className="cursor-pointer ml-6 my-2 dark:text-white text-black"
                    onClick={() => setOpen(true)}
                  />
                  <span className="block text-[20px] ml-2 font-Poppins font-[400] dark:text-white text-black">
                    Profile
                  </span>
                </div>
              )}

              <br />
              <br />

              <p className="text-[16px] px-2 pl-5 text-black dark:text-white">
                Copyright © {new Date().getFullYear()} OnLearn
              </p>
            </div>
          </div>
        )}
      </div>

      {route === "Sign-Up" ? (
        <>
          {open && (
            <CustomModal
              activeItem={activeItem}
              open={open}
              setOpen={setOpen}
              route={route}
              setRoute={setRoute}
              Component={SignUp}
            />
          )}
        </>
      ) : route === "Login" ? (
        <>
          {open && (
            <CustomModal
              activeItem={activeItem}
              open={open}
              setOpen={setOpen}
              route={route}
              setRoute={setRoute}
              Component={Login}
            />
          )}
        </>
      ) : route === "Verify" ? (
        <>
          {open && (
            <CustomModal
              activeItem={activeItem}
              open={open}
              setOpen={setOpen}
              route={route}
              setRoute={setRoute}
              Component={Verify}
            />
          )}
        </>
      ) : null}
    </div>
  );
};

export default Header;
