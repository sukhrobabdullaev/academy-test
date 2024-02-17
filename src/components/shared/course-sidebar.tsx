import { PlayCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { CoursesService } from "@/services/course.service";
import Link from "next/link";

async function getData(id: string) {
  try {
    const detailedCourse = await CoursesService.getDetailedCourse(id);
    return detailedCourse.videos;
  } catch (error) {
    console.error("Error fetching detailed course:", error);
    return null;
  }
}
const CourseSidebar = async () => {
  const data = await getData("react");
  console.log(data);

  if (!data) {
    // Render an appropriate message or handle the null case
    return <div>No data available for this course</div>;
  }
  const text = "#10 New One New One New One New One New One";
  return (
    <>
      <div
        className={`text-center md:top-14 z-50 bg-background transition ease-in duration-300 lg:block fixed p-2 md:border-t overflow-y-auto md:w-[300px] left-0 h-full md:border-r overflow-auto`}
      >
        <div
          className={`flex md:gap-3 gap-2 items-center justify-center flex-col`}
        >
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b-0 p-2">
              <AccordionTrigger className="hover:no-underline text-base font-semibold rounded-md p-1">
                1-Modul. ReactJS asoslari
              </AccordionTrigger>
              <AccordionContent className="py-2">
                {data.map((video, i) => (
                  <Link
                    href={`/${video.slug}`}
                    key={video.slug}
                    className="flex items-center justify-between text-sm py-2 hover:opacity-75"
                    role="button"
                  >
                    <div className="flex items-center gap-2">
                      <PlayCircle className="w-4 h-4" />
                      <p>
                        #{i + 1} {`${video.title.substring(0, 20)}`}
                      </p>
                    </div>
                    <p>10:12</p>
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default CourseSidebar;
