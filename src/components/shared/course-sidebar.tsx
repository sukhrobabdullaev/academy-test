import { FileVideoIcon, PlayCircle, PlaySquare } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { CoursesService } from "@/services/course.service";

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
        className={`text-center z-50 transition ease-in duration-300 lg:block fixed  overflow-y-auto md:top-0 md:w-[300px] left-0 h-full md:border-r overflow-auto`}
      >
        <div
          className={`flex md:gap-3 gap-2 items-center justify-center flex-col`}
        >
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b-0 p-2">
              <AccordionTrigger className="hover:no-underline text-base rounded-md p-1">
                1-Modul. ReactJS asoslari
              </AccordionTrigger>
              <AccordionContent className="py-2">
                {data.map((video, i) => (
                  <div
                    key={video.slug}
                    className="flex items-center justify-between text-sm py-2 hover:opacity-75"
                    role="button"
                  >
                    <div className="flex items-center gap-2">
                      <PlayCircle className="w-4 h-4" />
                      <p>
                        #{i + 1} {`${video.title.substring(0, 25)}`}
                      </p>
                    </div>
                    <p>10:12</p>
                  </div>
                ))}
                <div className="test">
                  <div
                    className="flex items-center justify-between text-sm py-2 hover:opacity-75"
                    role="button"
                  >
                    <div className="flex items-center gap-2">
                      <PlayCircle className="w-4 h-4" />
                      <p>{`${text.substring(0, 25)}..`}</p>
                    </div>
                    <p>10:12</p>
                  </div>
                  <div
                    className="flex items-center justify-between text-sm py-2 hover:opacity-75"
                    role="button"
                  >
                    <div className="flex items-center gap-2">
                      <PlayCircle className="w-4 h-4" />
                      <p>#10 New One</p>
                    </div>
                    <p>10:12</p>
                  </div>
                  <div
                    className="flex items-center justify-between text-sm py-2 hover:opacity-75"
                    role="button"
                  >
                    <div className="flex items-center gap-2">
                      <PlayCircle className="w-4 h-4" />
                      <p>#10 New One</p>
                    </div>
                    <p>10:12</p>
                  </div>
                  <div
                    className="flex items-center justify-between text-sm py-2 hover:opacity-75"
                    role="button"
                  >
                    <div className="flex items-center gap-2">
                      <PlayCircle className="w-4 h-4" />
                      <p>#10 New One</p>
                    </div>
                    <p>10:12</p>
                  </div>
                  <div
                    className="flex items-center justify-between text-sm py-2 hover:opacity-75"
                    role="button"
                  >
                    <div className="flex items-center gap-2">
                      <PlayCircle className="w-4 h-4" />
                      <p>#10 New One</p>
                    </div>
                    <p>10:12</p>
                  </div>
                  <div
                    className="flex items-center justify-between text-sm py-2 hover:opacity-75"
                    role="button"
                  >
                    <div className="flex items-center gap-2">
                      <PlayCircle className="w-4 h-4" />
                      <p>#10 New One</p>
                    </div>
                    <p>10:12</p>
                  </div>
                  <div
                    className="flex items-center justify-between text-sm py-2 hover:opacity-75"
                    role="button"
                  >
                    <div className="flex items-center gap-2">
                      <PlayCircle className="w-4 h-4" />
                      <p>#10 New One</p>
                    </div>
                    <p>10:12</p>
                  </div>
                  <div
                    className="flex items-center justify-between text-sm py-2 hover:opacity-75"
                    role="button"
                  >
                    <div className="flex items-center gap-2">
                      <PlayCircle className="w-4 h-4" />
                      <p>#10 New One</p>
                    </div>
                    <p>10:12</p>
                  </div>
                  <div
                    className="flex items-center justify-between text-sm py-2 hover:opacity-75"
                    role="button"
                  >
                    <div className="flex items-center gap-2">
                      <PlayCircle className="w-4 h-4" />
                      <p>#10 New One</p>
                    </div>
                    <p>10:12</p>
                  </div>
                  <div
                    className="flex items-center justify-between text-sm py-2 hover:opacity-75"
                    role="button"
                  >
                    <div className="flex items-center gap-2">
                      <PlayCircle className="w-4 h-4" />
                      <p>#10 New One</p>
                    </div>
                    <p>10:12</p>
                  </div>
                  <div
                    className="flex items-center justify-between text-sm py-2 hover:opacity-75"
                    role="button"
                  >
                    <div className="flex items-center gap-2">
                      <PlayCircle className="w-4 h-4" />
                      <p>#10 New One</p>
                    </div>
                    <p>10:12</p>
                  </div>
                  <div
                    className="flex items-center justify-between text-sm py-2 hover:opacity-75"
                    role="button"
                  >
                    <div className="flex items-center gap-2">
                      <PlayCircle className="w-4 h-4" />
                      <p>#10 New One</p>
                    </div>
                    <p>10:12</p>
                  </div>
                  <div
                    className="flex items-center justify-between text-sm py-2 hover:opacity-75"
                    role="button"
                  >
                    <div className="flex items-center gap-2">
                      <PlayCircle className="w-4 h-4" />
                      <p>#10 New One</p>
                    </div>
                    <p>10:12</p>
                  </div>
                  <div
                    className="flex items-center justify-between text-sm py-2 hover:opacity-75"
                    role="button"
                  >
                    <div className="flex items-center gap-2">
                      <PlayCircle className="w-4 h-4" />
                      <p>#10 New One</p>
                    </div>
                    <p>10:12</p>
                  </div>
                  <div
                    className="flex items-center justify-between text-sm py-2 hover:opacity-75"
                    role="button"
                  >
                    <div className="flex items-center gap-2">
                      <PlayCircle className="w-4 h-4" />
                      <p>#10 New One</p>
                    </div>
                    <p>10:12</p>
                  </div>
                  <div
                    className="flex items-center justify-between text-sm py-2 hover:opacity-75"
                    role="button"
                  >
                    <div className="flex items-center gap-2">
                      <PlayCircle className="w-4 h-4" />
                      <p>#10 New One</p>
                    </div>
                    <p>10:12</p>
                  </div>
                  <div
                    className="flex items-center justify-between text-sm py-2 hover:opacity-75"
                    role="button"
                  >
                    <div className="flex items-center gap-2">
                      <PlayCircle className="w-4 h-4" />
                      <p>#10 New One</p>
                    </div>
                    <p>10:12</p>
                  </div>
                  <div
                    className="flex items-center justify-between text-sm py-2 hover:opacity-75"
                    role="button"
                  >
                    <div className="flex items-center gap-2">
                      <PlayCircle className="w-4 h-4" />
                      <p>#10 New One</p>
                    </div>
                    <p>10:12</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default CourseSidebar;
