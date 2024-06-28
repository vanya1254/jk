import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import Providers from "./providers/Providers";
import StoreProvider from "./providers/StoreProvider";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

import { Bounce, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

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
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </body>
    </html>
  );
}
