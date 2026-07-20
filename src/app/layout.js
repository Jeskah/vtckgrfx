"use client"

import { usePathname } from "next/navigation";
import SocialsNav from "@/components/SocialsNav";
import "./globals.css";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const lightVariantRoutes = ["/", "/skills", "/designpage/typographypage"];
  const variant = lightVariantRoutes.includes(pathname) ? "light" : "dark";
  const hideSocialsNav = pathname.includes("/typographypage")
  console.log("pathname:", pathname)

  return (
    <html lang="en">
      <body>
        {!hideSocialsNav && <SocialsNav variant={variant}/>}
        {children}
      </body>
    </html>
  );
}
