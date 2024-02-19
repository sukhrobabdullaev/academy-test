"use client";

import { useClerk, useUser } from "@clerk/nextjs";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/16/solid";
import { Ubuntu } from "next/font/google";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import SiteLogo from "./site-logo";
import { SheetClose } from "../ui/sheet";
import React, { useEffect, useState } from "react";
import {
  BookOpenIcon,
  Brackets,
  FolderKanbanIcon,
  Home,
  LayoutDashboard,
  SquareCode,
} from "lucide-react";
import { Skeleton } from "../ui/skeleton";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["300", "500"] });

const SideLinks = (props: any) => {
  const { isSignedIn, user, isLoaded } = useUser();

  const [SheetCloseWrapper, shetCloseWrapperProps] = props.withSheetClose
    ? [SheetClose, { asChild: true }]
    : [React.Fragment, {}];

  const pathname = usePathname();
  const { signOut } = useClerk();
  const router = useRouter();

  const handleSignOut = () => {
    router.push("/");
  };

  return (
    <>
      <div
        className={`text-center transition z-50 ease-in duration-300 lg:block  md:p-4 p-5 fixed md:top-14 md:w-64 left-0 h-full md:border-r overflow-auto`}
      >
        <div className="md:hidden block">
          <SiteLogo />
        </div>
        <div
          className={`flex md:gap-3 gap-2 items-center justify-center flex-col pt-20 ${ubuntu.className}`}
        >
          {links.map((el) => {
            return (
              <SheetCloseWrapper {...shetCloseWrapperProps} key={el.href}>
                <Link
                  className={`${
                    pathname === `${el.href}` && "bg-[#3bc43f]"
                  } flex text-lg items-center gap-4 p-3 w-full mx-auto rounded-md transition-all duration-300 ease-in-out`}
                  key={el.label}
                  href={el.href}
                >
                  <el.icon className="w-6 h-6" />
                  <span className="lg:block">{el.label}</span>
                </Link>
              </SheetCloseWrapper>
            );
          })}

          {isSignedIn && isLoaded && (
            <SheetCloseWrapper {...shetCloseWrapperProps}>
              <Link
                href={`/profile/${user.id}`}
                className={`${
                  pathname === `/profile/${user.id}` && "bg-[#3bc43f]"
                } flex text-lg items-center gap-4 p-3 w-full mx-auto rounded-md transition-all duration-300 ease-in-out`}
              >
                <LayoutDashboard className="w-6 h-6" />
                <span className={`lg:block`}>Dashboard</span>
              </Link>
            </SheetCloseWrapper>
          )}

          {!isLoaded && !isSignedIn && (
            <div className="flex items-center gap-2 p-3 w-full mx-auto rounded-md transition-all duration-300 ease-in-out`">
              <Skeleton className="w-12 h-12 " />
              <Skeleton className="w-full h-12" />
            </div>
          )}
        </div>

        {isSignedIn && isLoaded ? (
          <SheetCloseWrapper {...shetCloseWrapperProps}>
            <div
              onClick={() => {
                signOut(handleSignOut);
              }}
              className={`${ubuntu.className} ${authClass} cursor-pointer bg-red-700 hover:bg-red-400 hover:dark:bg-red-400 w-3/4`}
            >
              <span className="lg:block">Chiqish</span>
              <div>
                <ArrowRightEndOnRectangleIcon className="w-6 h-6" />
              </div>
            </div>
          </SheetCloseWrapper>
        ) : (
          <SheetCloseWrapper {...shetCloseWrapperProps}>
            <Link
              href="/sign-in"
              className={`${ubuntu.className} ${authClass} `}
            >
              <span className="lg:block">Dasturga kirish</span>
              <div>
                <ArrowRightEndOnRectangleIcon className="w-6 h-6" />
              </div>
            </Link>
          </SheetCloseWrapper>
        )}
      </div>
    </>
  );
};

export default SideLinks;

const links = [
  {
    href: "/",
    icon: Home,
    label: "Bosh sahifa",
  },
  {
    href: "/courses",
    icon: Brackets,
    label: "Kurslar",
  },
  {
    href: "/articles",
    icon: BookOpenIcon,
    label: "Maqolalar",
  },
  {
    href: "/source_code",
    icon: SquareCode,
    label: "Kod manbalari",
  },
  {
    href: "/projects",
    icon: FolderKanbanIcon,
    label: "Loyihalar",
  },
];

const authClass =
  "absolute md:bottom-20 flex text-lg justify-center items-center gap-1 p-2 rounded-md transition-all border duration-500 ease-in-out  dark:hover:bg-[#3bc43f] bottom-10";
