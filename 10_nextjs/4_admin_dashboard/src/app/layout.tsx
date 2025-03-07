import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./assets/globals.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex min-h-screen">
          <Navbar />

          <div className="flex flex-col w-full">
            <Header />

            <main className="flex-1 bg-[#edeff5] p-5">{children}</main>
          </div>
        </div>

        <ToastContainer autoClose={2000} />
      </body>
    </html>
  );
}
