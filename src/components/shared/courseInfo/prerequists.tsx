import { ICourse } from "@/interfaces/courses.interface";
import { Dot } from "lucide-react";

const Prerequists = ({ data }: { data: ICourse }) => {
  return (
    <>
      <div className="rounded-md border dark:bg-background bg-zinc-50 p-4 lg:p-6 mt-8">
        <h2 className="text-2xl font-medium">Kurs kim uchun.</h2>
        <div className="mt-2">
          {data.prerequist.map((talab) => (
            <div className="mt-1 flex items-center" key={talab}>
              <Dot className="w-6 h-6 text-[#3bc43f]" />
              <p className="text-slate-500 flex-1">{talab}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Prerequists;
