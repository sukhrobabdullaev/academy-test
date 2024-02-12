"use client";

import { useUser } from "@clerk/nextjs";
import { Calendar, Edit } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const UserProfile = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  // console.log(user);
  
  return (
    <div className="lg:ml-64 md:ml-20 sm:ml-24 lg:py-10 lg:pl-10 flex items-center justify-between">
      <div className="user_data flex items-center gap-2">
        {isLoaded && (
          <Image
            src={`${user?.imageUrl}`}
            alt="user profile image"
            width={130}
            height={130}
            className="rounded-full border-2 border-[#3bc43f]"
          />
        )}
        <div className="flex flex-col gap-2">
          <h2 className="lg:text-[24px]">{user?.fullName}</h2>
          <div className="flex items-center gap-1">
            <Calendar className="w-5 h-5" />
            <span className="lg:text-[18px]">
              {new Date(`${user?.createdAt}`).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
      <div className="user_update">
        <Link
          href={`${user?.id}/edit`}
          className={`bg-[#3bc43f] flex text-lg items-center gap-1 p-3 w-full mx-auto rounded-md transition-all duration-300 ease-in-out dark:hover:bg-zinc-800`}
        >
          <Edit className="w-6 h-6" />
          <span className="hidden lg:block">Profilni tahrirlash</span>
        </Link>
      </div>
    </div>
  );
};

export default UserProfile;
