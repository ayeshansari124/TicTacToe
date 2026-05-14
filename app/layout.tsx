import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tic-Tac-Toe",
  description: "Minimal Tic Tac Toe Game",
  icons: {
    icon: "/favicon.ico",
  },
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
