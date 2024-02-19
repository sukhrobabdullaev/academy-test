import CoursePage from "./coursePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kurs",
  description: "kurs",
};

const CoursePageServer = () => {
  return <CoursePage />;
};

export default CoursePageServer;
