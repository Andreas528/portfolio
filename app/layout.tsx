import type { Metadata } from "next";
import Header from "./components/header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Andreas",
  description: "Personal site",
};

export default function RootLayout({
  children, 
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
