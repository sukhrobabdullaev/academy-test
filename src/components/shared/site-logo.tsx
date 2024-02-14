import { cn } from "@/lib/utils";
import { League_Spartan } from "next/font/google";
import Link from "next/link";

const league_Spartan = League_Spartan({ subsets: ["latin"] });

const SiteLogo = () => {
  return (
    <Link
      href="/"
      className={cn("font-bold text-3xl", league_Spartan.className)}
    >
      academy.
    </Link>
  );
};

export default SiteLogo;
