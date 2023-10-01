"use client";
import Heading from "@/utils/Sections/Heading";
import React, { FC, useState } from "react";

type Props = {};

const AdminPage: FC<Props> = ({}) => {
  return (
    <div className="">
      <Heading
        title="Elearning - Admin"
        description="ELearning is a platform for students to learn and get help from teachers"
        keywords="Programming,MERN,Redux,Machine Learning"
      />

      {/* <h1>Dashboard</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit dicta
        eos, incidunt nulla iste fugiat sed illo qui tempore eaque labore
        quaerat unde laborum doloribus harum consectetur! Vitae labore,
        asperiores sequi animi minus, doloremque enim totam dolorum provident
        vero repellat sed ducimus, voluptatem ad numquam architecto! Ipsum ex
        suscipit nisi!
      </p> */}

      {/* <DashboardHero isDashboard={true} /> */}
    </div>
  );
};

export default AdminPage;
