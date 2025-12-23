import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Portfolio - Software Engineer",
  description: "Software Engineering student at SHSU specializing in full-stack development",
  keywords: ["Software Engineer", "Next.js", "React", "TypeScript", "SHSU"],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Portfolio - Software Engineer",
    description: "Full-stack developer and SHSU Computer Science student",
    url: "https://yourdomain.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} antialiased font-sans`}
        suppressHydrationWarning
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
