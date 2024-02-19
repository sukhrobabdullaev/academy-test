"use client";

import {
  ChevronLeftCircle,
  PlayCircle,
  SidebarClose,
  SidebarOpen,
} from "lucide-react";
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
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";

const CourseSidebar = ({ videos }: { videos: IVideo[] }) => {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();

  const query = searchParams.get("video_id");

  useEffect(() => {
    const defaultSlug = query || (videos.length > 0 ? videos[0].slug : "");
    handleClick(defaultSlug);
  }, [videos, query]);

  useEffect(() => {
    setLoading(true); // Set loading to true when the component mounts
    // Simulate data loading delay
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after a certain delay
    }, 1000); // Adjust the delay time as needed or remove it for actual data fetching

    // Cleanup function to clear the timer
    return () => clearTimeout(timer);
  }, []);

  function handleClick(slug: string) {
    const video_id = `/?video_id=${slug}`;
    router.push(`${pathname}${video_id}`);
    setSelectedSlug(slug);
    setSidebarOpen(false);
  }
  return (
    <div className="relative">
      <button
        className="md:hidden absolute z-[51] -bottom-4 shadow-md p-2 rounded-full"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? (
          <SidebarClose className="w-6 h-6" />
        ) : (
          <SidebarOpen className="w-6 h-6" />
        )}
      </button>
      <div
        className={`text-center md:top-14 z-50 bg-background transition ease-in duration-300 lg:block fixed p-2 md:border-t md:overflow-y-auto md:w-[300px] left-0 h-full md:border-r overflow-hidden  ${
          sidebarOpen ? "w-full" : "w-0 "
        }`}
      >
        {loading ? (
          <div className="flex flex-col gap-2">
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
          </div>
        ) : (
          <div
            className={`flex md:gap-3 gap-2 items-center justify-center flex-col`}
          >
            <Accordion
              type="single"
              defaultValue="item-1"
              collapsible
              className="w-full"
            >
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
                      className={`flex items-center justify-between text-sm py-2 hover:opacity-75 rounded-sm ${
                        selectedSlug === video.slug ? "bg-[#3bc43f]" : ""
                      }`}
                      role="button"
                    >
                      <div className="flex items-center gap-2">
                        <PlayCircle className="w-4 h-4" />
                        <p>
                          #{i + 1} {`${video.title.substring(0, 20)}`}
                        </p>
                      </div>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
              <Button
                className="flex gap-2 z-20 fixed bottom-4 justify-center items-center"
                onClick={() => router.push("/courses")}
              >
                <ChevronLeftCircle className="w-5 h-5" />
                Kurslar
              </Button>
            </Accordion>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseSidebar;
