import "~/styles/globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google"
import { cn } from "@hipec/ui/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  preload: true,
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "HIPEC Storefront",
  description: "Developed by Muhammad Isa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "scroll-smooth antialiased",
        poppins.className
      )}>
        {children}
      </body>
    </html>
  );
}
