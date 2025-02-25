import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata tanımı:
export const metadata = {
  title: { default: "Amazon", template: "%s | Amazon" },
  description: "En iyiler burada....",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen flex flex-col text-2xl font-semibold`}
      >
        <Header />

        <div className="flex-1 grid place-items-center">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
