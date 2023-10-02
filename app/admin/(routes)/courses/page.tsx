import { Button, Typography } from "@mui/material";
import Link from "next/link";
import React, { FC } from "react";
import { BiSolidBookAdd } from "react-icons/bi";

type Props = {};

const CoursePage: FC<Props> = ({}) => {
  return (
    <div>
      <div className="w-[90%] mx-auto mt-8 flex items-center justify-between">
        <div>
          <Typography
            className="!text-[1.5rem] 500px:!text-[2rem] 800px:!text-[2.5rem] font-bold text-black dark:text-white"
            variant="h1"
          >
            Courses
          </Typography>
          <Typography
            className="!text-[0.75rem] 800px:!text-[1rem] font-bold text-black dark:text-[#8094ae] !mt-1"
            variant="subtitle1"
          >
            You have total 5 courses.
          </Typography>
        </div>

        <div>
          <Link
            href={`courses/create`}
            passHref
          >
            <Button
              variant="contained"
              className="flex items-center gap-2 !bg-[#6870fa] !px-[6px] 500px:!px-[16px] !min-w-fit"
            >
              <BiSolidBookAdd className="text-[1.25rem]" />
              <span className="500px:flex hidden">Add Course</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
