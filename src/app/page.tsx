"use client";

import { Quicksand } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const quicksand = Quicksand({ subsets: ["latin"], weight: ["300", "500"] });
const Home = () => {
  const pathname = usePathname();

  return (
    <div
      className={`${quicksand.className} lg:ml-64 md:ml-20 sm:ml-24 md:p-10 sm:p-5 p-4 bg-zinc-50 dark:bg-zinc-900 sm:flex sm:items-center sm:justify-around rounded-md`}
    >
      <div className="basis-1/2">
        <h1 className="lg:text-3xl md:text-[24px] sm:text-[20px] text-[26px] mb-3">
          <span className="text-[#3bc43f] font-bold">Academy</span> - dasturlash
          darslari
        </h1>
        <p className="text-sm lg:text-lg sm:text-base text-[18px] leading-7">
          Amaliy dasturlash kurslari bilan to'la platformaga xush kelibsiz. Bu
          yerda siz barcha pullik kurslarni bepul o'rganishingiz mumkin.
        </p>
        <div className="flex items-center gap-3 mt-3">
          <Link
            href="/courses"
            className={`${
              pathname === "/courses" && "bg-[#3bc43f]"
            } p-3 text-center lg:w-1/4 lg:text-sm w-full rounded-md transition-all duration-300 ease-in-out border`}
          >
            Kurslar
          </Link>
          <Link
            href="/projects"
            className={`p-3 text-center lg:w-1/4 w-full lg:text-sm rounded-md transition-all duration-300 ease-in-out dark:hover:bg-zinc-800 bg-[#3bc43f] border`}
          >
            Loyihalar
          </Link>
        </div>
      </div>
      <div className="relative w-64 h-64" style={{ height: "250px" }}>
        <Image
          src={"/js-icon.png"}
          fill
          priority
          alt="js-icon"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 64px"
        />
      </div>
    </div>
  );
};

export default Home;
