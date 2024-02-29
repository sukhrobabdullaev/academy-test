import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ContactIcon } from "lucide-react";
import ContactForm from "./contact-form";

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
          <DialogDescription className="text-sm md:text-base">
            Kurslar haqida ma&apos;lumot olishingiz uchun yoki sizda qandaydir
            taklif mavjud bo&apos;lsa formani to&apos;diring va yuborish
            tugmasini bosing!
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid items-center gap-4">
            <ContactForm />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
