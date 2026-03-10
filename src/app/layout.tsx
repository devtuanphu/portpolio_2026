import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nguyen Phu Tuan — Fullstack Developer",
  description:
    "Portfolio of Nguyen Phu Tuan — Fullstack Developer specializing in React, Next.js, NestJS, Java Spring Boot, and more. Building scalable web & mobile applications.",
  keywords: [
    "Nguyen Phu Tuan",
    "Fullstack Developer",
    "React",
    "Next.js",
    "NestJS",
    "Java Spring Boot",
    "Portfolio",
  ],
  openGraph: {
    title: "Nguyen Phu Tuan — Fullstack Developer",
    description:
      "Portfolio of Nguyen Phu Tuan — Fullstack Developer specializing in React, Next.js, NestJS, Java Spring Boot.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="bg-mesh" />
        {children}
      </body>
    </html>
  );
}
