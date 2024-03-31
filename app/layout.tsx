import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Providers from "./Providers";
import { Header } from "./components";

import "./globals.scss";

const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "jk",
  description: "jk sneakers shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
