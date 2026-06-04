import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Annis | Developer Portfolio",
  description: "안녕하세요! 저는 사용자 경험을 중심에 둔 프론트엔드 개발자 Annis입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${geist.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
