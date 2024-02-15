import { BadgeCheck } from "lucide-react";
import React from "react";
import Prerequists from "./prerequists";

const Results = () => {
  return (
    <div className="w-full mt-8 lg:w-[60%] md:mx-6">
      <div className="rounded-md border dark:bg-background bg-zinc-50 p-6">
        <h1 className="text-xl font-medium">Kursda nimalarni o'rganasiz.</h1>
        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex gap-2">
            <BadgeCheck className="w-6 h-6 text-[#3bc43f]" />
            <p className="flex-1">Class component</p>
          </div>
          <div className="flex gap-2">
            <BadgeCheck className="w-6 h-6 text-[#3bc43f]" />
            <p className="flex-1">Class component</p>
          </div>
          <div className="flex gap-2">
            <BadgeCheck className="w-6 h-6 text-[#3bc43f]" />
            <p className="flex-1">Class component</p>
          </div>
          <div className="flex gap-2">
            <BadgeCheck className="w-6 h-6 text-[#3bc43f]" />
            <p className="flex-1">Class component</p>
          </div>
          <div className="flex gap-2">
            <BadgeCheck className="w-6 h-6 text-[#3bc43f]" />
            <p className="flex-1">Class component</p>
          </div>
          <div className="flex gap-2">
            <BadgeCheck className="w-6 h-6 text-[#3bc43f]" />
            <p className="flex-1">Class component</p>
          </div>
          <div className="flex gap-2">
            <BadgeCheck className="w-6 h-6 text-[#3bc43f]" />
            <p className="flex-1">Class component</p>
          </div>
        </div>
      </div>
      <Prerequists />
      <Prerequists />
    </div>
  );
};

export default Results;
