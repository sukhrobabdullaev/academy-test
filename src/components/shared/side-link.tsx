"use client";

import { useClerk, useUser } from "@clerk/nextjs";
import {
  ArrowRightEndOnRectangleIcon,
  CodeBracketSquareIcon,
  ComputerDesktopIcon,
  DocumentTextIcon,
  FolderIcon,
  HomeIcon,
} from "@heroicons/react/16/solid";
import { DashboardIcon } from "@radix-ui/react-icons";
import { Ubuntu } from "next/font/google";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import SiteLogo from "./site-logo";
import { SheetClose } from "../ui/sheet";
import React from "react";
import { cn } from "@/lib/utils";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["300", "500"] });

const SideLinks = (props: any) => {
  const [SheetCloseWrapper, shetCloseWrapperProps] = props.withSheetClose
    ? [SheetClose, { asChild: true }]
    : [React.Fragment, {}];

  const pathname = usePathname();
  const { isSignedIn, user, isLoaded } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();

  const handleSignOut = () => {
    router.push("/");
  };
  return (
    <>
      <div
        className={`bg-zinc-50 text-center transition ease-in duration-300 lg:block dark:bg-zinc-900 md:p-4 p-5 fixed md:top-14 md:w-64 left-0 h-full md:border-r`}
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
                  } flex text-lg items-center gap-1 p-3 w-full mx-auto rounded-md transition-all duration-300 ease-in-out dark:hover:bg-zinc-800`}
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
                } flex text-lg items-center gap-1 p-3 w-full mx-auto rounded-md transition-all duration-300 ease-in-out dark:hover:bg-zinc-800`}
              >
                <DashboardIcon className="w-6 h-6" />
                <span className={`lg:block`}>Dashboard</span>
              </Link>
            </SheetCloseWrapper>
          )}
        </div>

        {isSignedIn && isLoaded ? (
          <SheetCloseWrapper {...shetCloseWrapperProps}>
            <div
              onClick={() => {
                signOut(handleSignOut);
              }}
              className={`${ubuntu.className} ${authClass} cursor-pointer bg-red-700 hover:bg-red-400 hover:dark:bg-red-400`}
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
    icon: HomeIcon,
    label: "Bosh sahifa",
  },
  {
    href: "/courses",
    icon: ComputerDesktopIcon,
    label: "Kurslar",
  },
  {
    href: "/articles",
    icon: DocumentTextIcon,
    label: "Maqolalar",
  },
  {
    href: "/source_code",
    icon: CodeBracketSquareIcon,
    label: "Kod manbalari",
  },
  {
    href: "/projects",
    icon: FolderIcon,
    label: "Loyihalar",
  },
];

const authClass =
  "absolute md:bottom-20 flex text-lg items-center gap-1 p-2 rounded-md transition-all border duration-500 ease-in-out dark:hover:bg-[#3bc43f] bottom-10";
