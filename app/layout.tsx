import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
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
  title: {
    default: "Fatihul Ihsan Ramadhan (mvfflin) | Full Stack Developer",
    template: "%s | Fatihul Ihsan Ramadhan",
  },
  description:
    "Portfolio website of Fatihul Ihsan Ramadhan (mvfflin) - Full Stack Developer, Content Creator, and Tech Enthusiast specializing in React, Next.js, TypeScript, and modern web technologies.",
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
    title: "Fatihul Ihsan Ramadhan (mvfflin) | Full Stack Developer",
    description:
      "Explore the portfolio of Fatihul Ihsan Ramadhan, a passionate Full Stack Developer and Tech Enthusiast building modern web experiences.",
    url: "https://mvffin.my.id", // Replace with your actual domain when deployed
    siteName: "Fatihul Ihsan Ramadhan Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fatihul Ihsan Ramadhan (mvfflin) | Full Stack Developer",
    description:
      "Explore the portfolio of Fatihul Ihsan Ramadhan, a passionate Full Stack Developer and Tech Enthusiast building modern web experiences.",
    creator: "@mvfflin", // Replace with your actual Twitter handle if you have one
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
        <script
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
      </head>
      <body className="min-h-full flex flex-col transition-all duration-500 md:ml-24">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
