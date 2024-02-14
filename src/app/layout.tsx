import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import Sidebar from "@/components/shared/sidebar";
import NextTransitionBar from "next-transition-bar";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { ThemeProvider } from "@/components/providers/theme-provider";

const localization = {
  socialButtonsBlockButton: "{{provider|titleize}} orqali davom etish",
  userButton: {
    action__addAccount: "Hisob qo'shish",
    action__manageAccount: "Hisobni boshqarish",
    action__signOut: "Chiqish",
    action__signOutAll: "barch hisobdan chiqish",
    actionLink: "Ro'yxatdan o'tish",
  },
  signIn: {
    start: {
      title: "Kirish",
      subtitle: '"{{applicationName}}" da ishlashni davom ettirish uchun',
      actionText: "Hisobingiz yo'qmi?",
      actionLink: "Ro'yxatdan o'tish",
    },
  },
  signUp: {
    start: {
      title: "Hisob yarating",
      subtitle: '"{{applicationName}}" da ishlashni davom ettirish uchun',
      actionText: "Hisobingiz bormi?",
      actionLink: "Kirish",
    },
  },
};

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
      localization={localization}
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
