"use client";
// import Protected from "@/app/hooks/useProtected";
import Heading from "@/utils/Sections/Heading";
import React, { FC } from "react";
import Header from "../components/Header";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";
import Profile from "../components/profile/Profile";

interface Props {}

const ProfilePage: FC<Props> = ({}) => {
  const { user } = useSelector((state: any) => state.auth);

  return user ? (
    <>
      <Heading
        title={`${user?.name} Profile | OnLearn`}
        description="OnLearn is a platform for students to learn and get help from mentors"
        keywords="Coding, Programming, Learning, Education, MERN Stack, Machine Learning, Artificial Intelligence, AI"
      />
      <Header />

      <Profile user={user} />
    </>
  ) : (
    redirect("/")
  );
};

export default ProfilePage;
