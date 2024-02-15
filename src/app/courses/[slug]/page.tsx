import CourseDetailed from "@/components/shared/courseInfo/course-detailed";
import CoursePrice from "@/components/shared/courseInfo/course-price";
import Results from "@/components/shared/courseInfo/results";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const SingleCourse = () => {
  return (
    <div className={cn("md:ml-64", montserrat.className)}>
      <CourseDetailed />
      <div className="mt-8 flex flex-row gap-8">
        <Results />
        <CoursePrice />
      </div>
    </div>
  );
};

export default SingleCourse;
