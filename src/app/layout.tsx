import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Mission Viejo High School Football | Home of the Diablos | Tradition Never Graduates | CIF Champions | CA State Champions",
  description:
    "Official website of the Mission Viejo High School Diablos Football program. Over 50 years of excellence, 2x State Champions, 8x CIF Champions, 26x South Coast League Champions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
