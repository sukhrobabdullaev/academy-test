import NextBreadcrumb from "@/components/shared/breadcrump";
import CourseDetailed from "@/components/shared/courseInfo/course-detailed";
import CoursePrice from "@/components/shared/courseInfo/course-price";
import Results from "@/components/shared/courseInfo/results";
import { cn } from "@/lib/utils";
import { CoursesService } from "@/services/course.service";
import { Dot } from "lucide-react";
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
    return <div>No data available for this course</div>;
  }

  return (
    <div className={cn("md:ml-64", montserrat.className)}>
      <NextBreadcrumb
        homeElement={"Bosh sahifa"}
        separator={<Dot className="w-5 h-5" />}
        activeClasses=""
        containerClasses="flex items-center p-2 md:ml-6 md:px-6"
        listClasses="hover:underline font-semibold text-muted-foreground"
        capitalizeLinks
      />
      <CourseDetailed data={data} />
      <div className="mt-8 flex lg:flex-row flex-col gap-8">
        <Results data={data} />
        <CoursePrice params={params} />
      </div>
    </div>
  );
};

export default SingleCourse;
