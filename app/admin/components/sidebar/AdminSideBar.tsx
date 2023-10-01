import clsx from "clsx";
import { useTheme } from "next-themes";
import React, { FC, useEffect, useState } from "react";
import { Sidebar } from "react-pro-sidebar";
import { usePathname } from "next/navigation";
import SidebarMenu from "./SidebarMenu";
import styles from "./adminSidebar.module.scss";

type Props = {
  isCollapsed: boolean;
  setIsCollapsed: (isCollapsed: boolean) => void;
  // isMobile: boolean;
};

const AdminSideBar: FC<Props> = ({ isCollapsed, setIsCollapsed }) => {
  const [logout, setlogout] = useState(false);
  // const [isCollapsed, setIsCollapsed] = useState(false);
  const [toggled, setToggled] = React.useState(false);
  const [selected, setSelected] = useState("admin");
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      let a = pathname?.split("/")?.[pathname?.split("/")?.length - 1];
      setSelected(a);
    }
  }, [pathname]);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  const logoutHandler = () => {
    setlogout(true);
  };

  return (
    <Sidebar
      collapsed={isCollapsed}
      backgroundColor={`#111C43`}
      // backgroundColor={`${theme === "dark" ? "#111C43" : "#fff"}`}
      toggled={toggled}
      breakPoint="md"
      onBackdropClick={() => setToggled(false)}
      style={{
        // position: "fixed",
        // top: 0,
        // left: 0,
        height: "100vh",
        zIndex: 99999999999999,
        // minWidth: isCollapsed ? "0%" : "20%",
        border: "none",
      }}
      className={clsx(
        "hidden 800px:flex",
        styles.sideBar,
        !isCollapsed && styles.notCollapsed,
      )}
    >
      <SidebarMenu
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        selected={selected}
        setSelected={setSelected}
        logoutHandler={logoutHandler}
      />
    </Sidebar>
  );
};

export default AdminSideBar;
