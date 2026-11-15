import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../styles/reset.scss";
import "../styles/index.scss";

export const metadata: Metadata = {
  title: "Nazar Hnatyuk | Full Stack Developer",
  description:
    "Full Stack Developer based in Lviv, Ukraine, with 3 years of commercial experience in React, Next.js and TypeScript. Available for remote work.",
  icons: { icon: "/business-card/favicon.ico" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
