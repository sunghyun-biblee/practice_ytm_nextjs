import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/themeProvider";
import { sleep } from "@/lib/utils";
import Sidebar from "@/components/Sidebar";
import PlayerWrapper from "@/components/player/PlayerWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clont YT Music",
  description: "Clont Youtube Music",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Sidebar>{children}</Sidebar>
          <PlayerWrapper></PlayerWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
