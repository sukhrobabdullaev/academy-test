"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SideLinks from "./side-link";
import { MenuSquare } from "lucide-react";
import { useState } from "react";

const MobileSidebar = () => {
  const [sheetOpen, setSheetOpen] = useState(false);
  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger>
        <MenuSquare className="w-6 h-6 inline-block" />
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <SideLinks />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
