import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luis Ospina",
  description: "The personal website of Luis Ospina.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
