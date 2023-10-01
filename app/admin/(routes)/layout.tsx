"use client";

import AdminProtected from "@/app/hooks/AdminProtected";
import { useState } from "react";
import { useSelector } from "react-redux";
import AdminSideBar from "../components/sidebar/AdminSideBar";
import MobSidebar from "../components/sidebar/MobSidebar";
import AdminHeader from "../components/header/AdminHeader";

export default function AdminLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const { user } = useSelector((state: any) => state.auth);

  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <section>
      <AdminProtected>
        <div className="flex dark:bg-[#0d141d] bg-[#f5f6fa]">
          <AdminSideBar
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
          />
          <MobSidebar
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
          />
          <div className="min-h-screen w-full">
            <AdminHeader
              isCollapsed={isCollapsed}
              setIsCollapsed={setIsCollapsed}
              user={user}
            />
            <div className="">{children}</div>
          </div>
        </div>
      </AdminProtected>
    </section>
  );
}
