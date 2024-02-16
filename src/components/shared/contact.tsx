import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import { ContactIcon } from "lucide-react";

export function Contact() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <ContactIcon className="h-5 w-5 text-black dark:text-white cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="md:w-full w-[350px]">
        <DialogHeader>
          <DialogTitle className="text-base md:text-2xl">
            Biz bilan bog&apos;laning.
          </DialogTitle>
          <DialogDescription className="text-sm md:text-md">
            Kurslar haqida ma&apos;lumot olishingiz uchun formani to&apos;diring
            va yuborish tugmasini bosing!
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Telegram username
            </Label>
            <Input
              id="username"
              className="col-span-3"
              placeholder="@username"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="message" className="text-right">
              Xabaringiz
            </Label>
            <Textarea
              id="message"
              className="col-span-3"
              placeholder="message"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Yuborish</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
