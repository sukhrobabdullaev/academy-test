"use client";

import CourseSidebar from "@/components/shared/course-sidebar";
// import type { Metadata } from "next";
import Navbar from "@/components/shared/navbar";
import Sidebar from "@/components/shared/sidebar";
import { usePathname } from "next/navigation";

// export const metadata: Metadata = {
//   title: "Academy",
//   description: "Sukhrob Academy",
// };

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <div className="flex flex-1 mt-14">
          <div className="md:block hidden">
            {pathname.includes("access") ? <CourseSidebar /> : <Sidebar />}
          </div>
          <main className="flex-1 p-6">{children}</main>
        </div>
      </div>
    </>
  );
}
