import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { Eclipse } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShadCN Dashboard",
  description: "",
  icons: {
    icon: "/square-chevron-right.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/tab-icon.svg" type="image/x-icon" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </head>
      <body className={`${inter.className} `}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
