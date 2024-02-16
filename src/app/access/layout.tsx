import type { Metadata } from "next";
import Navbar from "@/components/shared/navbar";
import Sidebar from "@/components/shared/sidebar";

export const metadata: Metadata = {
  title: "Academy",
  description: "Sukhrob Academy",
};

export default function AccessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <div className="flex flex-1 mt-14">
          <div className="md:block hidden"></div>
          <main className="flex-1 p-6">{children}</main>
        </div>
      </div>
    </>
  );
}
