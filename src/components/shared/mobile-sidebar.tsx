import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SideLinks from "./side-link";
import { MenuSquare } from "lucide-react";

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuSquare className="w-6 h-6 inline-block" />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-3/4 dark:bg-zinc-900 bg-zinc-50 border-r-0"
      >
        <SideLinks withSheetClose />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
