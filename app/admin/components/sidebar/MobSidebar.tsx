import clsx from "clsx";
import { useTheme } from "next-themes";
import React, { FC, useEffect, useRef, useState } from "react";
import { Sidebar } from "react-pro-sidebar";
import styles from "./adminSidebar.module.scss";
import { usePathname } from "next/navigation";
import SidebarMenu from "./SidebarMenu";

type Props = {
  isCollapsed: boolean;
  setIsCollapsed: (isCollapsed: boolean) => void;
  // isMobile: boolean;
};

const MobSidebar: FC<Props> = ({ isCollapsed, setIsCollapsed }) => {
  const [logout, setlogout] = useState(false);
  const [selected, setSelected] = useState("admin");
  const { theme, setTheme } = useTheme();

  const pathname = usePathname();

  const ref = useRef(null);

  // const onClickOutside = () => {
  //   setIsCollapsed(true);
  // };

  useEffect(() => {
    if (pathname) {
      let a = pathname?.split("/")?.[pathname?.split("/")?.length - 1];
      setSelected(a);
    }
  }, [pathname]);

  // useEffect(() => {
  //   const handleClickOutside = (event: any) => {
  //     // if (isMobile) {
  //     if (ref.current && !(ref.current as HTMLElement).contains(event.target)) {
  //       onClickOutside && onClickOutside();
  //     }
  //     // }
  //   };
  //   document.addEventListener("click", handleClickOutside, true);
  //   return () => {
  //     document.removeEventListener("click", handleClickOutside, true);
  //   };
  // }, [onClickOutside]);

  const logoutHandler = () => {
    setlogout(true);
  };

  return (
    <Sidebar
      backgroundColor={`${theme === "dark" ? "#111C43" : "#fff"}`}
      toggled={isCollapsed}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        zIndex: 99999999999999,
        border: "none",
      }}
      ref={ref}
      id="mobSidebar"
      className={clsx(
        `${isCollapsed ? "hidden" : "flex"} 800px:hidden `,
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

export default MobSidebar;
