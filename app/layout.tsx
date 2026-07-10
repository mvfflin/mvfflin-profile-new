import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import Script from "next/script";
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
  metadataBase: new URL('https://mvffin.my.id'),
  title: {
    default: "Fatihul Ihsan Ramadhan | Full Stack Developer",
    template: "%s | Fatihul Ihsan Ramadhan",
  },
  description:
    "Full Stack Developer, Content Creator, and Tech Enthusiast specializing in React, Next.js, TypeScript, and modern web technologies with ~6 years of experience in programming world.",
  keywords: [
    "Fatihul Ihsan Ramadhan",
    "mvfflin",
    "Fatih",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Portfolio",
    "Software Engineer",
    "Content Creator",
  ],
  authors: [{ name: "Fatihul Ihsan Ramadhan", url: "https://mvffin.my.id" }],
  creator: "Fatihul Ihsan Ramadhan",
  publisher: "Fatihul Ihsan Ramadhan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Fatihul Ihsan Ramadhan | Full Stack Developer",
    description:
      "Full Stack Developer, Content Creator, and Tech Enthusiast specializing in React, Next.js, TypeScript, and modern web technologies with ~6 years of experience in programming world.",
    url: "https://mvffin.my.id",
    siteName: "Fatihul Ihsan Ramadhan",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fatihul Ihsan Ramadhan | Full Stack Developer",
    description:
      "Full Stack Developer, Content Creator, and Tech Enthusiast specializing in React, Next.js, TypeScript, and modern web technologies with ~6 years of experience in programming world.",
    creator: "@mvfflin",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
      </head>
      <body className="min-h-full flex flex-col transition-all duration-500 md:ml-24">
        <Script
          id="theme-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem('theme');
                if (savedTheme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else if (savedTheme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                  document.documentElement.classList.add('dark');
                }
              } catch (_) {}
            `,
          }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
