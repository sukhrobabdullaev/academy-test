"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserButton, useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";

export function LoginButton() {
  const { userId } = useAuth();

  return (
    <>
      {userId ? (
        <UserButton afterSignOutUrl="/" />
      ) : (
        <Button asChild className="bg-[#3bc43f] py-0  px-2 hover:bg-[#3bc43f]">
          <Link href="/sign-in" className="text-sm">
            Kirish
          </Link>
        </Button>
      )}
    </>
  );
}
