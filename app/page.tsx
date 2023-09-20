"use client";
import Heading from "@/utils/Sections/Heading";
import React, { FC, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Home/Hero";

interface Props {}

const Page: FC<Props> = () => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div>
      <Heading
        title="OnLearn | Online Learning Platform"
        description="OnLearn is a platform for students to learn and get help from mentors"
        keywords="Coding, Programming, Learning, Education, MERN Stack, Machine Learning, Artificial Intelligence, AI"
      />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
      />
      <Hero />
    </div>
  );
};

export default Page;
