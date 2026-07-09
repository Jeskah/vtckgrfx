"use client"

import { usePathname } from "next/navigation";
import SocialsNav from "@/components/SocialsNav";
import "./globals.css";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const lightVariantRoutes = ["/", "/skills"];
  const variant = lightVariantRoutes.includes(pathname) ? "light" : "dark";

  return (
    <html lang="en">
      <body>
        <SocialsNav variant={variant}/>
        {children}
      </body>
    </html>
  );
}
