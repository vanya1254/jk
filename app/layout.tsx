import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import Providers from "./providers/Providers";
import StoreProvider from "./providers/StoreProvider";
import { Footer, Header } from "./components";

import "./globals.scss";

const IBMPlexMono = IBM_Plex_Mono({
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
      <body className={IBMPlexMono.className}>
        <StoreProvider>
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </StoreProvider>
      </body>
    </html>
  );
}
