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
      <SheetContent side="left" className="p-0">
        <SideLinks withSheetClose />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
