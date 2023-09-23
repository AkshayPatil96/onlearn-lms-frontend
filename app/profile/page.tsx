import Protected from "@/app/hooks/useProtected";
import Heading from "@/utils/Sections/Heading";
import React, { FC } from "react";
import Header from "../components/Header";

interface Props {}

const Profile: FC<Props> = ({}) => {
  return (
    <div>
      {/* <Heading
          title="OnLearn | Online Learning Platform"
          description="OnLearn is a platform for students to learn and get help from mentors"
          keywords="Coding, Programming, Learning, Education, MERN Stack, Machine Learning, Artificial Intelligence, AI"
        />
      */}
      {/* <Protected> */}
        <Header />
      {/* </Protected> */}
    </div>
  );
};

export default Profile;
