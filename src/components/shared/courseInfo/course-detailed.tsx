import Image from "next/image";

const CourseDetailed = () => {
  return (
    <>
      <div className="flex items-center justify-between border md:mx-6 mt-6 flex-row gap-10 rounded-md dark:bg-background bg-zinc-50 p-4 lg:p-6">
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
        <div className="md:flex md:flex-col gap-2 lg:h-64 p-6 rounded-md md:dark:border-4 border-2 border-[#3bc43f] items-center justify-center hidden lg:w-[40%]">
          <Image
            src="/courses/react.png"
            alt="react"
            width={150}
            height={150}
            priority={true}
            className="spin"
          />
          <h3 className="md:text-xl">ReactJS</h3>
        </div>
      </div>
    </>
  );
};

export default CourseDetailed;
