"use client";

import { SignIn } from "@clerk/nextjs";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  return (
    <div className="min-h-screen fixed top-0 right-0 w-full h-full flex items-center justify-center z-50">
      <div className="absolute bg-black/40 inset-0" 
      onClick={() => router.back()}
      ></div>
        <ChevronLeftIcon
          className="flex items-center justify-center text-[#3bc43f] cursor-pointer w-6 h-6 font-bold transition-transform transform hover:translate-x-[-4px]"
          onClick={() => router.back()}
        />
      <SignIn />
    </div>
  );
}
