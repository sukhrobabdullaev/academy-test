"use client";

import {
  CourseData,
  CoursesType,
  ICourse,
  IVideo,
} from "@/interfaces/courses.interface";
import { CoursesService } from "@/services/course.service";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const CoursePage = () => {
  const [videos, setVideos] = useState<IVideo[]>([]);

  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : params.slug[0];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await CoursesService.getDetailedCourseVidoes(slug);
        // console.log(data.videos);
        setVideos(data.videos);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };
    fetchData();
  }, [slug]);

  return (
    <>
      <section className="md:ml-[300px]">
        <div className="flex">
          <div>
            VIDEOS {slug}
            {videos.map((video) => (
              <div key={video.slug}>
                {video.title}
                <br />
                <a href={video.video[0].url}>{video.video[0].url}</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CoursePage;
