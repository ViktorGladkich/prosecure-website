import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";
import { LenisProvider } from "@/components/layout/LenisProvider";
import { Preloader } from "@/components/layout/Preloader";
import { Navigation } from "@/components/layout/Navigation";
import { ProgressBar } from "@/components/layout/ProgressBar";
import { buildMetadata } from "@/lib/seo";
import { localBusinessSchema } from "@/lib/schema";

import { Inter_Tight } from "next/font/google";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = buildMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${interTight.variable}`}>
      <head>
        {/* We use local font files for Neue Montreal defined in globals.css */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema()),
          }}
        />
      </head>
      <body className="font-body bg-ink text-bone antialiased">
        <LenisProvider>
          <ProgressBar />
          <Preloader />
          <Navigation />
          {children}
          <Toaster
            theme="dark"
            position="top-right"
            toastOptions={{
              style: {
                background: "#1C1C24",
                border: "1px solid rgba(201,168,76,0.25)",
                color: "#F5F5F0",
                borderRadius: "2px",
              },
            }}
          />
        </LenisProvider>
      </body>
    </html>
  );
}
