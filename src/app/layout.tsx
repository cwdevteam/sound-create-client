import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Providers from "@/context/Providers";
import env from "@/env";
import MediaPlayer from "@/components/GlobalAudioPlayer/MediaPlayer";

import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: env.NEXT_PUBLIC_SITE_TITLE,
  description: env.NEXT_PUBLIC_SITE_DESCRIPTION,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full" suppressHydrationWarning>
      <body className={clsx("h-full", inter.className)}>
        <Providers>
          <div className="grid grid-rows-[auto_minmax(0,1fr)] min-h-full h-fit max-h-full">
            <Header />
            {children}
            <MediaPlayer />
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
