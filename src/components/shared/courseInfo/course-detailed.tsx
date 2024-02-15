import Image from "next/image";

const CourseDetailed = () => {
  return (
    <>
      <div className="flex items-center flex-col-reverse justify-between border md:mx-6 md:flex-row gap-10 rounded-md dark:bg-background bg-zinc-50 p-4">
        <div className="w-full lg:w-[60%]">
          <h3 className="mt-4 lg:mt-0 font-medium text-3xl">ReactJS</h3>
          <p className="w-full opacity-50 text-base mt-3">
            Eng mashhur dasturlash tilini o'zlashtirib oling va uni amalda
            qo'llashni o'rganing. JavaScript darslari o'zbek tilida
          </p>
          <div className="mt-10 text-base flex text-[#3bc43f] flex-row gap-2 md:text-lg">
            <span>Darslar soni: </span>
            <span className="font-bold">24 ta</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 lg:h-64 rounded-md items-center justify-center lg:w-[40%]">
          <Image
            src="/courses/react.png"
            alt="react"
            width={170}
            height={170}
            priority={true}
            className="animate-pulse animate-infinite"
          />
          <h3 className="text-xl">ReactJS</h3>
        </div>
      </div>
    </>
  );
};

export default CourseDetailed;
