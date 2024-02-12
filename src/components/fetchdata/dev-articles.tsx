"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface User {
  profile_image: string;
  name: string;
}

interface Post {
  id: string;
  user: User;
  profile_image: string;
  created_at: string;
  cover_image: string;
  description: string;
  title: string;
  canonical_url: string;
  reading_time_minutes: number;
  tag_list: string[];
}

const MediumPosts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Function to fetch Medium posts for a specific username
    const fetchMediumPosts = async (username: string) => {
      try {
        const response = await axios.get(
          `https://dev.to/api/articles?username=${username}`
        );
        // console.log(response.data);
        const postsWithUuid = response.data.map((post: Post) => ({
          ...post,
          id: uuidv4(),
          created_at: new Date(post.created_at).toLocaleDateString(),
        }));

        setPosts((prevPosts) => [...prevPosts, ...postsWithUuid]);
      } catch (error) {
        console.error(`Error fetching DEV.TO posts for ${username}:`, error);
      }
    };

    // List of usernames you want to fetch posts for
    const usernames = [
      "sukhrobabdullaev",
      "misszamzam",
      "chideracode",
      "pragyanatvade",
    ];

    // Fetch posts for each username
    usernames.forEach((username) => fetchMediumPosts(username));
  }, []); // Run only once on component mount

  // console.log(posts);

  return (
    <div>
      <h2 className="mb-2 text-lg text-center font-bold">
        Top Articles for Web Development
      </h2>
      <ul className="flex flex-wrap gap-2">
        {posts.map((post) => (
          <Link href={post.canonical_url} key={post.id}>
            <Card className="lg:w-[400px] flex flex-col gap-4">
              <CardHeader>
                <div className="flex justify-between">
                  <div className="flex items-center gap-1">
                    <Image
                      src={post?.user?.profile_image}
                      alt={post?.user?.name}
                      width={60}
                      height={60}
                      className="rounded-full border-4 border-[#3bc43f]"
                    />
                    <h4 className="text-sm w-10">{post?.user?.name}</h4>
                  </div>
                  <CardDescription>
                    {post.reading_time_minutes} min
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div>
                  {post.cover_image ? (
                    <Image
                      src={post.cover_image}
                      alt={post.title}
                      width={400}
                      height={100}
                      style={{ width: "auto", height: "auto" }}
                      priority={true}
                    />
                  ) : (
                    ""
                  )}
                </div>
                <h4 className="text-sm text-start my-4 line-clamp-1">
                  {post.title}
                </h4>
                <p className="text-sm text-start text-slate-400 line-clamp-2">
                  {post.description}
                </p>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <ul className="flex flex-wrap gap-1">
                  {post.tag_list.map((tag) => {
                    return (
                      <li
                        key={tag}
                        className="text-[10px] bg-[#3bc43f] border rounded-lg p-1"
                      >
                        #{tag}
                      </li>
                    );
                  })}
                </ul>
                <span className="text-sm">{post.created_at}</span>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MediumPosts;
