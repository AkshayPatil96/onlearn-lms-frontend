import Image from "next/image";
import React, { FC } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { SiCoursera } from "react-icons/si";
import avatarDefault from "../../../public/assets/images/avatar.png";

type Props = {
  user: any;
  active: number;
  avatar: string;
  setActive: (active: number) => void;
  logoutHandler: any;
};

const ProfileSidebar: FC<Props> = ({
  user,
  active,
  avatar,
  setActive,
  logoutHandler,
}) => {
  return (
    <div className="w-full">
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer hover:bg-[#e0e0e0] dark:hover:bg-slate-800 ${
          active === 1 ? "dark:bg-slate-800 bg-[#e0e0e0]" : "bg-transparent"
        }`}
        onClick={() => setActive(1)}
      >
        <Image
          src={
            user?.avatar || avatar ? user?.avatar?.url || avatar : avatarDefault
          }
          alt="avatar"
          width={20}
          height={20}
          className="rounded-full w-[30px] h-[30px] cursor-pointer"
        />
        <h5
          className={`pl-3 800px:block hidden text-lg font-Poppins dark:text-white text-black`}
        >
          My Account
        </h5>
      </div>

      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer hover:bg-[#e0e0e0] dark:hover:bg-slate-800 ${
          active === 2 ? "dark:bg-slate-800 bg-[#e0e0e0]" : "bg-transparent"
        }`}
        onClick={() => setActive(2)}
      >
        <RiLockPasswordLine
          size={30}
          fill={"#aaaaaa"}
        />
        <h5
          className={`pl-3 800px:block hidden text-lg font-Poppins dark:text-white text-black`}
        >
          Change Password
        </h5>
      </div>

      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer hover:bg-[#e0e0e0] dark:hover:bg-slate-800 ${
          active === 3 ? "dark:bg-slate-800 bg-[#e0e0e0]" : "bg-transparent"
        }`}
        onClick={() => setActive(3)}
      >
        <SiCoursera
          size={30}
          fill={"#aaaaaa"}
        />
        <h5
          className={`pl-3 800px:block hidden text-lg font-Poppins dark:text-white text-black`}
        >
          Enrolled Courses
        </h5>
      </div>

      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer hover:bg-[#e0e0e0] dark:hover:bg-slate-800 ${
          active === 4 ? "dark:bg-slate-800 bg-[#e0e0e0]" : "bg-transparent"
        }`}
        onClick={() => {
          logoutHandler();
          setActive(4);
        }}
      >
        <AiOutlineLogout
          size={30}
          fill={"#aaaaaa"}
        />
        <h5
          className={`pl-3 800px:block hidden text-lg font-Poppins dark:text-white text-black`}
        >
          Logout
        </h5>
      </div>
    </div>
  );
};

export default ProfileSidebar;
