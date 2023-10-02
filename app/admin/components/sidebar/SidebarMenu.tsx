import avatarDefault from "@/public/assets/images/avatar.png";
import Logo from "@/public/assets/logo/logo.svg";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import clsx from "clsx";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineUserCircle } from "react-icons/hi";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import {
  ArrowBackIosIcon,
  ArrowForwardIosIcon,
  BarChartOutlinedIcon,
  ExitToAppIcon,
  GroupsIcon,
  HomeOutlinedIcon,
  ManageHistoryIcon,
  MapOutlinedIcon,
  OndemandVideoIcon,
  PeopleOutlinedIcon,
  QuizIcon,
  ReceiptOutlinedIcon,
  SettingsIcon,
  VideoCallIcon,
  WebIcon,
  WysiwygIcon,
} from "./Icon";
import styles from "./adminSidebar.module.scss";

type Props = {
  isCollapsed: boolean;
  setIsCollapsed: (isCollapsed: boolean) => void;
  selected: string;
  setSelected: (selected: string) => void;
  logoutHandler: () => void;
};

const SidebarMenu: FC<Props> = ({
  isCollapsed,
  setIsCollapsed,
  selected,
  setSelected,
  logoutHandler,
}) => {
  return (
    <div>
      <Menu className={styles.menu}>
        {/* LOGO AND MENU ICON */}
        <MenuItem
          onClick={() => setIsCollapsed(!isCollapsed)}
          icon={
            isCollapsed ? (
              <HiOutlineMenuAlt3
                className="text-[#ffffffc1]"
                style={{
                  fontSize: "2.5rem",
                }}
              />
            ) : undefined
          }
          className={styles.headingItem}
        >
          {!isCollapsed && (
            <Box
              display="flex"
              alignItems="center"
              gap="6px"
              // className="border"
            >
              <IconButton
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="inline-block"
              >
                <HiOutlineMenuAlt3
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  className="text-[#ffffffc1]"
                  style={{
                    fontSize: "2rem",
                  }}
                />
              </IconButton>

              <Link
                href="/"
                className="block"
              >
                <Image
                  src={Logo}
                  alt="logo"
                  width={125}
                  height={125}
                />
              </Link>
            </Box>
          )}
        </MenuItem>

        <Box paddingLeft={isCollapsed ? undefined : "10%"}>
          <Item
            title="Dashboard"
            value="admin"
            to="/admin"
            icon={<HomeOutlinedIcon />}
            selected={selected}
          />

          <Typography
            variant="h5"
            sx={{ m: "15px 0 5px 25px" }}
            className="!text-[18px] text-[#ffffffc1] capitalize !font-[400]"
          >
            {!isCollapsed && "Data"}
          </Typography>
          <Item
            title="Users"
            value="users"
            to="/admin/users"
            icon={<GroupsIcon />}
            selected={selected}
          />

          <Item
            title="Invoices"
            value="invoices"
            to="/admin/invoices"
            icon={<ReceiptOutlinedIcon />}
            selected={selected}
          />

          <Typography
            variant="h5"
            className="!text-[18px] text-[#ffffffc1] capitalize !font-[400]"
            sx={{ m: "15px 0 5px 20px" }}
          >
            {!isCollapsed && "Content"}
          </Typography>
          <Item
            title="Create Course"
            value="create"
            to="/admin/courses/create"
            icon={<VideoCallIcon />}
            selected={selected}
          />
          <Item
            title="Live Courses"
            value="courses"
            to="/admin/courses"
            icon={<OndemandVideoIcon />}
            selected={selected}
          />

          <Typography
            variant="h5"
            className="!text-[18px] text-[#ffffffc1] capitalize !font-[400]"
            sx={{ m: "15px 0 5px 20px" }}
          >
            {!isCollapsed && "Customization"}
          </Typography>
          <Item
            title="Hero"
            value="hero"
            to="/admin/hero"
            icon={<WebIcon />}
            selected={selected}
          />
          <Item
            title="FAQ"
            value="faq"
            to="/admin/faq"
            icon={<QuizIcon />}
            selected={selected}
          />
          <Item
            title="Categories"
            value="categories"
            to="/admin/categories"
            icon={<WysiwygIcon />}
            selected={selected}
          />

          <Typography
            variant="h5"
            className="!text-[18px] text-[#ffffffc1] capitalize !font-[400]"
            sx={{ m: "15px 0 5px 20px" }}
          >
            {!isCollapsed && "Controllers"}
          </Typography>
          <Item
            title="Manage Team"
            value="team"
            to="/admin/team"
            icon={<PeopleOutlinedIcon />}
            selected={selected}
          />

          <Typography
            variant="h6"
            className="!text-[18px] text-[#ffffffc1] capitalize !font-[400]"
            sx={{ m: "15px 0 5px 20px" }}
          >
            {!isCollapsed && "Analytics"}
          </Typography>
          <Item
            title="Courses Analytics"
            value="courses-analytics"
            to="/admin/courses-analytics"
            icon={<BarChartOutlinedIcon />}
            selected={selected}
          />
          <Item
            title="Orders Analytics"
            value="orders-analytics"
            to="/admin/orders-analytics"
            icon={<MapOutlinedIcon />}
            selected={selected}
          />

          <Item
            title="Users Analytics"
            value="users-analytics"
            to="/admin/users-analytics"
            icon={<ManageHistoryIcon />}
            selected={selected}
          />

          <Typography
            variant="h6"
            className="!text-[18px] text-[#ffffffc1] capitalize !font-[400]"
            sx={{ m: "15px 0 5px 20px" }}
          >
            {!isCollapsed && "Extras"}
          </Typography>
          <div onClick={logoutHandler}>
            <Item
              title="Logout"
              value="logout"
              to="/"
              icon={<ExitToAppIcon />}
              selected={selected}
            />
          </div>
        </Box>
      </Menu>
    </div>
  );
};

interface itemProps {
  title: string;
  value: string;
  to: string;
  icon: JSX.Element;
  selected: string;
}

const Item: FC<itemProps> = ({ title, value, to, icon, selected }) => {
  const { theme, setTheme } = useTheme();

  // let theme = "light";

  return (
    <MenuItem
      active={selected === value}
      icon={icon}
      className={clsx(
        `${selected === value ? "text-[#6870fa]" : ""} hover:text-[#6870fa]`,
        styles.item,
      )}
      component={
        <Link
          href={to}
          passHref
        />
      }
    >
      <Typography className="text-[16px] font-Poppins">{title}</Typography>
    </MenuItem>
  );
};

export default SidebarMenu;
