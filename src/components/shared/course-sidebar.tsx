"use client";

import { PlayCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { IVideo } from "@/interfaces/courses.interface";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useEffect } from "react";

const CourseSidebar = ({ videos }: { videos: IVideo[] }) => {
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();

  const query = searchParams.get("video_id");

  useEffect(() => {
    const defaultSlug = query || (videos.length > 0 ? videos[0].slug : "");
    handleClick(defaultSlug);
  }, [videos, query]);

  function handleClick(slug: string) {
    const video_id = `/?video_id=${slug}`;
    router.push(`${pathname}${video_id}`);
  }
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
                1-Modul. {`${params.slug.toLocaleString().toUpperCase()} `}
                asoslari
              </AccordionTrigger>
              <AccordionContent className="py-2">
                {videos.map((video, i) => (
                  <div
                    onClick={() => handleClick(video.slug)}
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
                  </div>
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
