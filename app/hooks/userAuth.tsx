/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useSelector } from "react-redux";

export default function userAuth() {
  const { user } = useSelector((state: any) => state.auth);

  if (user) {
    return true;
  } else {
    return false;
  }
}
