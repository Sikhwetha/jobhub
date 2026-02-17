import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JobHub - Find Your Dream Job, Internship & Learnership Opportunities",
  description: "Discover thousands of job positions, internships, and learnership programs from top companies. Land your next opportunity with JobHub - the premier job portal for career growth.",
  keywords: "jobs, internships, learnership, employment, career, job portal, recruitment",
  authors: [{ name: "JobHub Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jobhub.com",
    title: "JobHub - Find Your Dream Job, Internship & Learnership Opportunities",
    description: "Discover thousands of job positions, internships, and learnership programs from top companies.",
    siteName: "JobHub",
  },
  twitter: {
    card: "summary_large_image",
    title: "JobHub - Find Your Dream Job, Internship & Learnership Opportunities",
    description: "Discover thousands of job positions, internships, and learnership programs from top companies.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
