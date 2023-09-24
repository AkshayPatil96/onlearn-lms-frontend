import { useLogoutQuery } from "@/redux/features/auth/authApi";
import { log } from "console";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { FC, useEffect, useState } from "react";
import ProfileCourse from "./ProfileCourse";
import ProfileInfo from "./ProfileInfo";
import ProfilePassword from "./ProfilePassword";
import ProfileSidebar from "./ProfileSidebar";

type Props = {
  user: any;
};

const Profile: FC<Props> = ({ user }) => {
  const [scroll, setScroll] = useState(false);
  const [avatar, setAvatar] = useState("");
  const [active, setActive] = useState(1);
  const [logout, setLogout] = useState(false);

  const { isLoading, isSuccess, error } = useLogoutQuery(undefined, {
    skip: !logout ? true : false,
  });

  useEffect(() => {
    if (user?.avatar) {
      setAvatar(user?.avatar?.url);
    }
  }, [user]);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 85) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }

  const logoutHandler = async () => {
    setLogout(true);
    await signOut();
    redirect("/");
  };

  return (
    <div className="w-[85%] flex mx-auto">
      <div
        className={`w-[60px] 800px:w-[310px] h-[450px] dark:bg-slate-900 bg-white bg-opacity-90 border dark:border-[#ffffff1d] border-[#f0f0f0] rounded-[5px] overflow-hidden dark:shadow-sm shadow-xl mt-[80px] mb-[80px] sticky ${
          scroll ? "top-[120px]" : "top-[30px]"
        }`}
      >
        <ProfileSidebar
          user={user}
          active={active}
          avatar={avatar}
          setActive={setActive}
          logoutHandler={logoutHandler}
        />
      </div>
      {active === 1 ? (
        <div className="w-full h-full bg-transparent mt-[80px]">
          <ProfileInfo
            avatar={avatar}
            user={user}
          />
        </div>
      ) : active === 2 ? (
        <div className="w-full h-full bg-transparent mt-[80px]">
          <ProfilePassword
            user={user}
            logoutHandler={logoutHandler}
          />
        </div>
      ) : active === 3 ? (
        <div className="w-full pl-7 px-2 800px:px-10 800px:pl-8 mt-[80px]">
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] 1500px:grid-cols-4 1500px:gap-[35px] mb-12 border-0">
            <ProfileCourse
              item={""}
              isProfile={true}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Profile;
