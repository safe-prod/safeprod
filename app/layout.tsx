import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SAFE",
  description: "Superintelligence Alignment through Financial Engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/bitmaks/cm-web-fonts@latest/fonts.css">
        <style>
          body {
            font-family: "Computer Modern Serif", serif;
          }
        </style>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
