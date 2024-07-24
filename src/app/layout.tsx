import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emmanuel Taiwo | Software Engineer",
  description: "Emmanuel Taiwo | Software Engineer | Web3 Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-screen-2xl mx-auto`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
