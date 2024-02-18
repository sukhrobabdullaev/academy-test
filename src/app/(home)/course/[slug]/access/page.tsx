"use client";

import { IVideo } from "@/interfaces/courses.interface";
import { CoursesService } from "@/services/course.service";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const CoursePage = () => {
  const [singleVideo, setSingleVideo] = useState<IVideo>();

  const searchParams = useSearchParams();
  const video_id = searchParams.get("video_id");
  // console.log(video_id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (video_id) {
          // Ensure video_id is present
          const data = await CoursesService.getSingleVideo(video_id);
          setSingleVideo(data);
        }
      } catch (error) {
        console.error("Error fetching video:", error);
      }
    };
    fetchData();
  }, [video_id]);

  console.log(singleVideo);

  return (
    <>
      <section className="md:ml-[300px]">
        <div className="flex">
          <div>
            {singleVideo && singleVideo.video.length > 0 && (
              <a href={singleVideo.video[0].url}>{singleVideo.title}</a> // Access singleVideo directly
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default CoursePage;
