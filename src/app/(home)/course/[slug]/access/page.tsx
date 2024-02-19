"use client";

import { IVideo } from "@/interfaces/courses.interface";
import { CoursesService } from "@/services/course.service";
import { CheckCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";

const CoursePage = () => {
  const [singleVideo, setSingleVideo] = useState<IVideo>();
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);

  const searchParams = useSearchParams();
  const video_id = searchParams.get("video_id");

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

  const handleDuration = (duration: number) => {
    setDuration(duration);
  };

  const handleProgress = (progress: {
    played: number;
    playedSeconds: number;
  }) => {
    setCurrentTime(progress.playedSeconds);
  };

  return (
    <>
      <section className="md:ml-[300px]">
        <div className="flex md:mt-0 mt-10">
          <div>
            {singleVideo && singleVideo.video.length > 0 && (
              <div className="flex flex-col items-center justify-center">
                <ReactPlayer
                  className="react-player"
                  url={singleVideo.video[0].url}
                  controls
                  width="90%"
                  height="100%"
                  playing
                  onDuration={handleDuration}
                  onProgress={handleProgress}
                  config={{
                    file: {
                      forceVideo: true,
                      attributes: {
                        controlsList: "nodownload", // This prevents the download option
                      },
                    },
                  }}
                />
                <div className="p-4 lg:p-8 bg-background border mt-4 rounded-md flex gap-2 md:flex-row flex-col md:items-center md:justify-between w-full">
                  <h1 className="md:text-lg md:w-[60%] font-semibold">
                    {singleVideo.description}
                  </h1>
                  {duration && (
                    <p className="flex items-center gap-1">
                      <span>Davomiyligi:</span>
                      <span className="font-bold">
                        {formatDuration(duration)}
                      </span>
                    </p>
                  )}
                  {currentTime && (
                    <p className="flex items-center gap-1">
                      <span>Ko'rilyapti:</span>
                      <span className="font-bold">
                        {formatDuration(currentTime)}
                      </span>
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

function formatDuration(duration: number): string {
  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = Math.floor(duration % 60);
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

export default CoursePage;
