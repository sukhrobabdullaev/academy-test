import { Separator } from "@/components/ui/separator";
import { CalendarClock, FileVideoIcon, MonitorPlay } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ICourse } from "@/interfaces/courses.interface";

const CourseVideoLists = ({ data }: { data: ICourse }) => {
  return (
    <div className="bg-gradient-to-r from-[#3bc43f] mt-8 rounded-md p-4 lg:px-8 lg:py-4">
      <h1 className="text-xl font-medium">Kurs kontenti</h1>
      <div className="flex flex-row flex-wrap items-center justify-around mt-2">
        <div className="flex flex-col">
          <MonitorPlay className="w-10 h-10" />
          <p className="">Darslar soni</p>
          <p className="text-2xl font-medium">24 ta</p>
        </div>
        <div className="flex flex-col">
          <CalendarClock className="h-10 w-10" />
          <p className="">Kurs davomiyligi</p>
          <p className="text-2xl font-medium">5 soat 17 daqiqa</p>
        </div>
      </div>
      <Separator orientation="horizontal" className="my-3" />
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="mb-4   border-b-0">
          <AccordionTrigger className="hover:no-underline bg-background rounded-md p-4">
            1-Modul. ReactJS asoslari
          </AccordionTrigger>
          <AccordionContent className="p-4">
            {data.videos.map((video, i) => (
              <div
                key={video.slug}
                className="flex items-center justify-between py-2 hover:opacity-75"
                role="button"
              >
                <div className="flex items-center gap-2">
                  <FileVideoIcon className="w-6 h-6" />
                  <p>
                    #{i + 1} {video.title}
                  </p>
                </div>
                <p>10:12</p>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="mb-4 border-b-0">
          <AccordionTrigger className="hover:no-underline bg-background rounded-md p-4">
            2-Modul. ReactJSda loyiha
          </AccordionTrigger>
          <AccordionContent className="p-4">
            <div
              className="flex items-center justify-between py-2 hover:opacity-75"
              role="button"
            >
              <div className="flex items-center gap-2">
                <FileVideoIcon className="w-6 h-6" />
                <p>#1. ReactJS nima va nima uchun kerak</p>
              </div>
              <p>10:12</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default CourseVideoLists;
