import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import LoadingScreen from "@/app/loadingScreen";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joedel Lagong | Web Developer",
  description:
    "Joedel Lagong's portfolio showcasing web development, apps, and projects.",
  keywords: ["portfolio", "web developer", "frontend", "backend", "full-stack"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
