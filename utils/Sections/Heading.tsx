
import React, { FC } from "react";

interface HeadProps {
  title: string;
  description: string;
  keywords: string;
}

const Heading: FC<HeadProps> = ({
  title = "OnLearn | Online Learning Platform",
  description = "OnLearn is a platform for students to learn and get help from mentors",
  keywords = "Coding, Programming, Learning, Education, MERN Stack, Machine Learning, Artificial Intelligence, AI",
}) => {
  return (
    <>
      <title>{title}</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
      />
      <meta
        name="description"
        content={description}
      />
      <meta
        name="keywords"
        content={keywords}
      />
    </>
  );
};

export default Heading;
