import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css"
import "./globals.css";
import Head from "next/head";

const jbm = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "speckwitz",
  description: "speckwitz's website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:site_name" content="speckwitz" />
        <meta property="og:title" content="speckwitz" />
        <meta property="og:description" content="speckwitz's website" />
        <meta property="og:url" content="https://speckwitz.com" />
      </Head>
      <body className={jbm.className}>
        <div className="app_stage">
          {children}
        </div>
      </body>
    </html>
  );
}

