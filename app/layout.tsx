import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Nav from "@/components/Nav";
import Provider from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Promptopia",
  description: "Generate & Share AI prompts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="main">
          <div className="gradient"/>
        </div>
        <div className="app">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
