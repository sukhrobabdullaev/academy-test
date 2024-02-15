import { Dot } from "lucide-react";

const Prerequists = () => {
  return (
    <>
      <div className="rounded-md border dark:bg-background bg-zinc-50 p-4 lg:p-6 mt-8">
        <h2 className="text-2xl font-medium">Kurs kim uchun.</h2>
        <div className="mt-2">
          <div className="mt-1 flex items-center">
            <Dot className="w-6 h-6 text-[#3bc43f]" />
            <p className="text-slate-500 flex-1">
              JavaScript bilimlarni mustahkamlashni xohlaydigonlar
            </p>
          </div>
          <div className="mt-1 flex items-center">
            <Dot className="w-6 h-6 text-[#3bc43f]" />
            <p className="text-slate-500 flex-1">
              Frameworklarni o'rganish istagi
            </p>
          </div>
          <div className="mt-1 flex items-center">
            <Dot className="w-6 h-6 text-[#3bc43f]" />
            <p className="text-slate-500 flex-1">
              ReactJS haqida ko'proq ma'lumot olish
            </p>
          </div>
          <div className="mt-1 flex items-center">
            <Dot className="w-6 h-6 text-[#3bc43f]" />
            <p className="text-slate-500 flex-1">
              State management o'rganish istagi
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prerequists;
