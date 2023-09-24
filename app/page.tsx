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

      <Header />

      <Hero />
    </>
  );
};

export default Page;
