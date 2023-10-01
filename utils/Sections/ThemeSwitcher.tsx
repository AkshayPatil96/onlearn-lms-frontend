"use client";
import { IconButton, Tooltip } from "@mui/material";
import { useTheme } from "next-themes";
import React, { FC, useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

type Props = {};

const ThemeSwitcher: FC<Props> = (props) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center justify-center">
      {theme === "light" ? (
        <Tooltip
          title={<span>Theme</span>}
          placement="bottom"
          arrow
        >
          <IconButton className="dark:text-white">
            <BiMoon
              className="cursor-pointer"
              size={25}
              onClick={() => {
                setTheme("dark");
              }}
            />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip
          title={<span>Theme</span>}
          placement="bottom"
          arrow
        >
          <IconButton className="dark:text-white">
            <BiSun
              className="cursor-pointer"
              size={25}
              onClick={() => {
                setTheme("light");
              }}
            />
          </IconButton>
        </Tooltip>
      )}
    </div>
  );
};

export default ThemeSwitcher;
