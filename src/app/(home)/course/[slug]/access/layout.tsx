"use client";

import CourseSidebar from "@/components/shared/course-sidebar";
import { IVideo } from "@/interfaces/courses.interface";
import { CoursesService } from "@/services/course.service";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Academy",
//   description: "Sukhrob Academy",
// };

export default function AccessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [videos, setVideos] = useState<IVideo[]>([]);
  const params = useParams();

  const slug = typeof params.slug === "string" ? params.slug : params.slug[0];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await CoursesService.getDetailedCourseVidoes(slug);
        setVideos(data.videos);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };
    fetchData();
  }, [slug]);

  return (
    <>
      <div className="flex flex-col">
        <div className="md:flex md:flex-1">
          <CourseSidebar videos={videos} />
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </>
  );
}
