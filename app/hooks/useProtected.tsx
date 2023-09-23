import { redirect } from "next/navigation";
import { useSelector } from "react-redux";
import userAuth from "./userAuth";

interface Props {
  childern: React.ReactNode;
}

export default function Protected({ childern }: Props) {
  const isAuthenticated = userAuth();

  return isAuthenticated ? childern : redirect("/");
}
