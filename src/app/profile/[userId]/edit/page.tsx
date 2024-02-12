import { NextRequest, NextResponse } from 'next/server';
import { getAuth, clerkClient } from '@clerk/nextjs/server';
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["300", "500"] });

const Edit = () => {
  return <div className={`${ubuntu.className} ml-64`}>Edit</div>;
};

export default Edit;
