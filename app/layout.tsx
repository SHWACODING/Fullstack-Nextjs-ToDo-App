import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../providers/theme_provider";
import { ClerkProvider } from "@clerk/nextjs";
import NavigateSignInandSignOut from "@/components/NavigateSignInandSignOut";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          >
          <NavigateSignInandSignOut />
          {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
