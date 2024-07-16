import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Toaster } from "react-hot-toast";
import Providers from "@/providers/Providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "eWallet | Home",
  description: "eWallet is MFS service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-gray-50">
          <Providers>{children}</Providers>
        </div>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
