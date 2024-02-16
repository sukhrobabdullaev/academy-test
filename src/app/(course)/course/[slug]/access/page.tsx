import CourseSidebar from "@/components/shared/course-sidebar";
import Navbar from "@/components/shared/navbar";

const page = () => {
  return (
    <div className="md:ml-[300px] text-3xl ">
      <div className="flex flex-col">
        <Navbar />
        <div className="flex flex-1 mt-14">
          <div className="z-20">
            <CourseSidebar />
          </div>
          <main className="flex-1 p-6">dddd</main>
        </div>
      </div>
    </div>
  );
};

export default page;
