import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Star } from "lucide-react";

const CoursePrice = () => {
  return (
    <div className="hidden lg:block lg:w-[40%]">
      <div className="sticky top-20 rounded-md border p-6 shadow-[inset_0px_0px_5px_5px_#3bc43f]">
        <div className="text-xl">Kurs narxi</div>
        <div className="text-3xl font-medium">Bepul</div>
        <div className="flex items-center flex-row flex-wrap gap-2 mt-2">
          <p className="font-bold text-[#DD6B20]">4.9</p>
          <div className="flex">
            <Star className="w-5 h-5 text-orange-400" />
            <Star className="w-5 h-5 text-orange-400" />
            <Star className="w-5 h-5 text-orange-400" />
            <Star className="w-5 h-5 text-orange-400" />
            <Star className="w-5 h-5 text-orange-400" />
          </div>
        </div>
        <Separator orientation="horizontal" className="my-3" />
        <Button
          variant="default"
          className="inline-block w-full bg-[#3bc43f] font-semibold hover:bg-[#47c64b]"
        >
          Kirish
        </Button>
      </div>
    </div>
  );
};

export default CoursePrice;
