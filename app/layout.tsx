import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AnimeNetworkTamil",
  description: "Anime streaming site powered by FileToLink-Go",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
