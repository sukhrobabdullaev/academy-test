"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserButton, useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";

export function LoginButton() {
  const [loading, setLoading] = useState(true);
  const { userId } = useAuth();

  useEffect(() => {
    // Set loading to false once userId is loaded
    if (userId !== null) {
      setLoading(false);
    }
  }, [userId]);
  // Run this effect whenever userId changes
  return (
    <>
      {loading ? (
        <Skeleton className="w-8 h-8 rounded-full" />
      ) : (
        <>
          {userId ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <Button asChild className="bg-[#3bc43f] hover:bg-[#3bc43f]">
              <Link href="/sign-in">Kirish</Link>
            </Button>
          )}
        </>
      )}
    </>
  );
}
