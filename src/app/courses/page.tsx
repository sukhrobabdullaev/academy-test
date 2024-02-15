import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";

const Courses = () => {
  return (
    <div className="md:ml-64">
      <h2 className="text-3xl mb-3">Kurslar</h2>
      <div className="flex items-center gap-6 flex-wrap">
        <Card>
          <Link
            href="/courses/react"
            className="flex flex-col gap-2 shadow-md lg:h-64 lg:w-64 p-6 rounded-md  items-center justify-center"
          >
            <Image
              src="/courses/react.png"
              alt="react"
              width={150}
              height={150}
              priority={true}
            />
            <h3 className="md:text-xl">ReactJS</h3>
          </Link>
        </Card>
        <Card className="flex flex-col  items-center">
          <Link
            href="/"
            className="flex flex-col gap-2 shadow-md lg:h-64 lg:w-64 p-6 rounded-md border items-center justify-center"
          >
            <Image
              src="/courses/html.png"
              alt="react"
              width={150}
              height={150}
              priority={true}
            />
            <h3 className="md:text-xl">HTML</h3>
          </Link>
        </Card>
        <Card className="flex flex-col  items-center">
          <Link
            href="/"
            className="flex flex-col gap-2 shadow-md lg:h-64 lg:w-64 p-6 rounded-md border items-center justify-center"
          >
            <Image
              src="/courses/css.png"
              alt="react"
              width={150}
              height={150}
              priority={true}
            />
            <h3 className="md:text-xl">CSS</h3>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default Courses;
