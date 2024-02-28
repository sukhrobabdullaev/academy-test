"use client";

import { useUser } from "@clerk/nextjs";
import { Calendar, Edit } from "lucide-react";
import Image from "next/image";

const UserProfile = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  return (
    <div className="md:ml-64 lg:py-10 lg:pl-10 flex items-center justify-between">
      <div className="user_data flex items-center gap-2">
        {isLoaded && user && (
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
    </div>
  );
};

export default UserProfile;
