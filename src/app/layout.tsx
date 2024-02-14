import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import Sidebar from "@/components/shared/sidebar";
import NextTransitionBar from "next-transition-bar";
import { ClerkProvider } from "@clerk/nextjs";
import { dark, neobrutalism } from "@clerk/themes";
import { ThemeProvider } from "@/components/providers/theme-provider";
import MobileSidebar from "@/components/shared/mobile-sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Academy",
  description: "Sukhrob Academy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NextTransitionBar
              color="#3bc43f"
              height={2}
              speed={200}
              showSpinner={false}
            />
            <div className="flex flex-col">
              <Navbar />
              <div className="flex flex-1 mt-14">
                <div className="md:block hidden">
                  <Sidebar />
                </div>
                <main className="flex-1 p-6">{children}</main>
              </div>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
