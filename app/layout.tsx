import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pagepro",
  description: "Pagepro",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black-100 min-h-screen font-poppins">{children}</body>
    </html>
  );
}
