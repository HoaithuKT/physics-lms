import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PwaRegister from "@/components/PwaRegister";
import IOSInstallPrompt from "@/components/IOSInstallPrompt";

import SecurityGuard from "@/components/SecurityGuard";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export const viewport: Viewport = {
  themeColor: "#f97316",
};

export const metadata: Metadata = {
  title: "LMS Lí Cô Thu",
  description: "Hệ thống quản lý học tập Môn Vật lý",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Vật lý Cô Hoài Thu",
  },
  icons: {
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={inter.className}>
      <body className="flex h-screen overflow-hidden bg-background">
        <PwaRegister />
        <IOSInstallPrompt />
        {/* <SecurityGuard /> Tạm thời tắt chống chụp màn hình */}
        {children}
      </body>
    </html>
  );
}
