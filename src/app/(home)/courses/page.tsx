import Link from "next/link";
import { Card } from "@/components/ui/card";
import CustomImage from "@/components/shared/image";
import { CoursesService } from "@/services/course.service";

export const metadata = {
  title: "Academy | Kurslar",
};

function getData() {
  try {
    const res = CoursesService.getCourses();
    return res;
  } catch (error) {
    return [];
  }
}

const Courses = async () => {
  const data = await getData();

  return (
    <div className="md:ml-64">
      <h2 className="text-3xl mb-3">Kurslar</h2>
      <div className="flex items-center gap-6 flex-wrap">
        {data &&
          data.map((course) => (
            <Card key={course.label}>
              <Link
                href={`/course/${course.slug}`}
                className="flex flex-col gap-2 shadow-md lg:h-64 lg:w-64 p-6 rounded-md  items-center justify-center"
              >
                <CustomImage product={{ image: `${course.image.url}` }} fill />
                <h3 className="md:text-xl">{course.label}</h3>
              </Link>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default Courses;
