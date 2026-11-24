import "./globals.css";
import "@shared/ui/styles/global.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "The Grand Alton Resort | Kisumu, Kenya",
  description:
    "A warm welcome in Kisumu. Discover thoughtful stays, dining, and celebrations at The Grand Alton Resort.",
};

export const viewport: Viewport = {
  themeColor: "#f7f5ef",
};

export default async function RootLayout({
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
