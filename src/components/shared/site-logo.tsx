import { cn } from "@/lib/utils";
import { League_Spartan } from "next/font/google";
import Link from "next/link";

const league_Spartan = League_Spartan({ subsets: ["latin"] });

const SiteLogo = () => {
  return (
    <Link
      href="/"
      className={cn(
        "font-bold text-3xl flex items-center gap-2",
        league_Spartan.className
      )}
    >
      <span>academy.</span>
      <p className="text-lg px-2 block bg-green-400/60 rounded-md">beta</p>
    </Link>
  );
};

export default SiteLogo;
