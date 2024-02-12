"use client";

import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { UserButton, auth, useAuth, useUser } from "@clerk/nextjs";

export function LoginButton() {
  const { userId } = useAuth();
  // isLoaded: true,
  // isSignedIn: true,
  // userId: 'dcdhfbhb'
  const { user } = useUser();
  // isLoaded: true
  // isSignedIn: false
  // user: null (data)

  return (
    <>
      {userId ? (
        <UserButton afterSignOutUrl="/" />
      ) : (
        <Button asChild className="bg-[#3bc43f] hover:bg-[#3bc43f]">
          <Link href="/sign-in">Kirish</Link>
        </Button>
      )}
    </>
  );
}
