import { redirect } from "next/navigation";
import React from "react";
// import userAuth from "./userAuth";
import { useSelector } from "react-redux";

interface Props {
  childern: React.ReactNode;
}

// export default function Protected({ childern }: Props) {
//   // const isAuthenticated = userAuth();
//   const isAuthenticated = true;

//   return isAuthenticated ? <>{childern}</> : redirect("/");
// }

const Protected: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // const isAuthenticated = true;
  // const isAuthenticated = userAuth();
  const { user } = useSelector((state: any) => state.auth);

  return <>{user ? <>{children}</> : redirect("/")}</>;
};

export default Protected;
