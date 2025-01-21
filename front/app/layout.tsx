import React, { ReactNode } from "react";
import Footer from "./_components/footer";
import Header from "./_components/header";
import "./globals.css";

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main className="container mx-auto px-4 py-8">{children}</main>
        {modal}
        <Footer />
      </body>
    </html>
  );
}
