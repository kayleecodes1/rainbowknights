import type { Metadata } from "next";
import { Sen } from "next/font/google";
import "./globals.css";

const sen = Sen({
  variable: "--font-sen",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rainbow Knights",
  description: "Connecting, nurturing, and supporting all LGBTQIA+ people in the Stoughton, Massachusetts area.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sen.variable}`}>
        {children}
      </body>
    </html>
  );
}
