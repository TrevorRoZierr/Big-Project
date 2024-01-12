import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Burak Solutions Pvt Ltd.",
  description: "Created by Sayyed Saad",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header id="head">
          <Navbar />
        </header>
        <section>{children}</section>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
