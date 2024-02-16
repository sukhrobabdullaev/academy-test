import CourseDetailed from "@/components/shared/courseInfo/course-detailed";
import CoursePrice from "@/components/shared/courseInfo/course-price";
import Results from "@/components/shared/courseInfo/results";
import { cn } from "@/lib/utils";
import { CoursesService } from "@/services/course.service";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

async function getData(id: string) {
  try {
    const detailedCourse = await CoursesService.getDetailedCourse(id);
    return detailedCourse;
  } catch (error) {
    console.error("Error fetching detailed course:", error);
    return null;
  }
}

const SingleCourse = async ({ params }: { params: { slug: string } }) => {
  const data = await getData(params.slug);
  if (!data) {
    // Render an appropriate message or handle the null case
    return <div>No data available for this course</div>;
  }

  return (
    <div className={cn("md:ml-64", montserrat.className)}>
      <CourseDetailed data={data} />
      <div className="mt-8 flex flex-row gap-8">
        <Results data={data} />
        <CoursePrice params={params} />
      </div>
    </div>
  );
};

export default SingleCourse;
