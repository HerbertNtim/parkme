import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  weight: ["400", "600", "500", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ParkMe",
  description: "A parking app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
