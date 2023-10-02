"use client";

import Logo from "@/public/assets/logo/logo.svg";
import ThemeSwitcher from "@/utils/Sections/ThemeSwitcher";
import { Button, IconButton, Tooltip } from "@mui/material";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useEffect, useRef, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdNotificationsNone } from "react-icons/md";
import { RiAccountCircleFill } from "react-icons/ri";
import { format } from "timeago.js";

let notifications = [
  {
    id: 1,
    title: "You have a new message",
    createdAt: Date.now(),
    read: false,
    message:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    title: "New user registered",
    createdAt: Date.now(),
    read: false,
    message:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title: "New user registered",
    createdAt: Date.now(),
    read: true,
    message:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    title: "New user registered",
    createdAt: Date.now(),
    read: false,
    message:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    title: "New user registered",
    createdAt: Date.now(),
    read: true,
    message:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 6,
    title: "New user registered",
    createdAt: Date.now(),
    read: true,
    message:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 7,
    title: "New user registered",
    createdAt: Date.now(),
    read: false,
    message:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 8,
    title: "New user registered",
    createdAt: Date.now(),
    read: true,
    message:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

type Props = {
  isCollapsed: boolean;
  setIsCollapsed: (isCollapsed: boolean) => void;
  user: any;
};

const AdminHeader: FC<Props> = ({ isCollapsed, setIsCollapsed, user }) => {
  const [open, setOpen] = useState(false);

  const inputRef = useRef(null);

  const onClickOutsideMenu = () => setOpen(false);

  useEffect(() => {
    const handleClickOutsideMenu = (event: any) => {
      if (
        inputRef.current &&
        !(inputRef.current as HTMLElement).contains(event.target)
      ) {
        onClickOutsideMenu && onClickOutsideMenu();
      }
    };
    document.addEventListener("click", handleClickOutsideMenu, true);
    return () => {
      document.removeEventListener("click", handleClickOutsideMenu, true);
    };
  }, [onClickOutsideMenu]);

  return (
    <div className="w-full h-[10vh] dark:bg-[#101924] bg-[#fff] border-b-2 dark:border-gray-500 border-gray-300 shadow flex items-center justify-between 800px:px-6 px-2">
      <div className="flex 800px:gap-4 gap-2 items-center">
        {isCollapsed ? (
          <HiOutlineMenuAlt3
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="800px:hidden flex text-black dark:text-[#ffffffc1]"
            style={{
              fontSize: "2rem",
            }}
          />
        ) : null}

        <Link
          href={`/`}
          className={`${
            !isCollapsed ? "hidden" : "flex"
          } transition-all duration-300`}
        >
          <Image
            src={Logo}
            alt="logo"
            width={125}
            height={125}
          />
        </Link>
      </div>
      <div className="flex gap-0 items-center 800px:gap-4 800px:mr-5">
        <div>
          <Link
            href={`/profile`}
            className=""
          >
            <Tooltip
              title={<span>Profile</span>}
              placement="bottom"
              arrow
            >
              <Button className="dark:text-white flex border items-center gap-1">
                {user?.avatar ? (
                  <Image
                    src={user?.avatar?.url}
                    alt="profile_pic"
                    width={32}
                    height={32}
                    className="w-[42px] h-[42px] cursor-pointer border-[2px] border-[#6870fa] rounded-full"
                  />
                ) : (
                  <RiAccountCircleFill className="text-[28px] 800px:text-[38px]" />
                )}
                <div className="800px:inline-block hidden">
                  <p className="text-[12px] text-left font-[500] text-[#6870fa]">
                    Administrator
                  </p>
                  {user ? (
                    <p className="text-[12px] text-left font-[700] text-[#6d6d6d] dark:text-white">
                      {user?.name}
                    </p>
                  ) : null}
                </div>
              </Button>
            </Tooltip>
          </Link>
        </div>

        <div
          className="relative"
          ref={inputRef}
        >
          <Tooltip
            title={<span>Notifications</span>}
            placement="bottom"
            arrow
          >
            <IconButton
              className="dark:text-white text-black hover:animate-shake"
              onClick={() => setOpen(!open)}
              id="screen"
            >
              <MdNotificationsNone className="text-[28px]" />
              <div className="border-2 dark:border-[#111827] border-white rounded-full w-[11px] h-[11px] bg-[#77c720] absolute top-[28%] right-[21%]" />
            </IconButton>
          </Tooltip>
          {open && (
            <NotificationMenu
              notifications={notifications}
              open={open}
              setOpen={setOpen}
            />
          )}
        </div>

        <div>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};

type INotificationMenuProps = {
  notifications: any[];
  open: boolean;
  setOpen: (open: boolean) => void;
};

const NotificationMenu: FC<INotificationMenuProps> = ({
  notifications,
  open,
  setOpen,
}) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="500px:w-[350px] w-[300px] 500px:h-[60vh] h-[80vh] overflow-y-scroll py-3 px-2 border border-[#f0f0f0] dark:bg-[#111C43] dark:border-t-8 dark:border-[#6870fa] dark:border-t-[#6870fa] bg-white shadow-xl absolute top-12  500px:right-0 -right-10 z-[1000000000] rounded-xl overflow-visible hide-scroll">
      <h5 className="text-center text-[20px] font-Poppins text-black dark:text-white pb-3 ">
        Notifications
      </h5>
      {notifications &&
        notifications.map((item: any, index: number) => (
          <div
            className={`dark:bg-[#2d3a4e] bg-[#00000013] font-Poppins border dark:border-[#ffffff47] border-[#0000000f] mb-2 ${
              item?.read
                ? ""
                : "animate-pulse-slow dark:bg-[#6870fa] bg-[#6870fa]"
            }`}
            key={index}
          >
            <div className="w-full flex items-center justify-between p-2">
              <p className="text-black dark:text-white">{item.title}</p>
              {!item?.read ? (
                <p className="text-black dark:text-white text-[12px] cursor-pointer">
                  Mark as read
                </p>
              ) : null}
            </div>
            <p className="px-2 text-black dark:text-white text-[14px]">
              {item.message}
            </p>
            <p className="p-2 text-black dark:text-white text-[12px]">
              {format(item.createdAt)}
            </p>
          </div>
        ))}
    </div>
  );
};

export default AdminHeader;
