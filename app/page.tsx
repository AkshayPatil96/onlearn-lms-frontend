"use client";
import Heading from "@/utils/Sections/Heading";
import React, { FC, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Home/Hero";

interface Props {}

const Page: FC<Props> = () => {
  return (
    <>
      <Heading
        title="OnLearn | Online Learning Platform"
        description="OnLearn is a platform for students to learn and get help from mentors"
        keywords="Coding, Programming, Learning, Education, MERN Stack, Machine Learning, Artificial Intelligence, AI"
      />
      <Header
      // open={open}
      // setOpen={setOpen}
      // activeItem={activeItem}
      // route={route}
      // setRoute={setRoute}
      />
      {/* <div className="hero_animation w-[500px] rounded-full h-[500px] border"></div> */}
      <Hero />
    </>
  );
};

export default Page;
