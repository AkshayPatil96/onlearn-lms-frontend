"use client";
import React, { FC } from "react";
import styles from "./custom.module.scss";

type Props = {};

const Loader: FC<Props> = (props) => {
  return (
    <div className={`flex justify-center items-center h-screen`}>
      <div className={`${styles.loader}`}></div>
    </div>
  );
};

export default Loader;
