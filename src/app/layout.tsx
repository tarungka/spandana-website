import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { url } from "inspector";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rotaract Spandana",
  description: "Home page of Rotaract Spandana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={
          {
            // backgroundImage: "url('/public/Spandana.jpeg')",
            // backgroundSize: "cover",
            // backgroundPosition: "center",
            // backgroundRepeat: "no-repeat",
            // backgroundAttachment: "fixed",
            // margin: 0,
            // padding: 0,
            // minHeight: "100vh",
          }
        }
      >
        {children}
      </body>
    </html>
  );
}
