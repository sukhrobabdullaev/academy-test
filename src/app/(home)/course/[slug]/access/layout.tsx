import CourseSidebar from "@/components/shared/course-sidebar";
import Navbar from "@/components/shared/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="flex flex-col">
        <Navbar />
        <div className="flex flex-1 mt-14">
          <div className="z-20">
            <CourseSidebar />
          </div>
          <main className="flex-1 p-6">{children}</main>
        </div>
      </section>
    </>
  );
}
