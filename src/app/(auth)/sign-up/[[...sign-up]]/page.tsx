"use client";

import { SignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function SignUpDemo() {
  const router = useRouter();
  return (
    <div className="min-h-screen fixed top-0 right-0 w-full h-full flex items-center justify-center z-50">
      <div
        className="absolute bg-black/70 inset-0"
        onClick={() => router.back()}
      />
      <SignUp />
    </div>
  );
}
