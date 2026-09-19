import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Mayur Khandare — Aspiring Software Engineer & Full Stack Developer",
  description:
    "Personal portfolio of Mayur Khandare. Computer Engineering student focused on full-stack web development, backend architectures, databases, and open-source software.",
  keywords: [
    "Mayur Khandare",
    "Aspiring Software Engineer",
    "Full Stack Web Developer",
    "Python Developer",
    "C++ Programmer",
    "Computer Engineering",
    "React.js",
    "Node.js",
    "Pune",
  ],
  authors: [{ name: "Mayur Khandare" }],
};

// Inline script to prevent theme flash on page load
const themeScript = `
  (function() {
    try {
      var theme = localStorage.getItem('theme');
      if (!theme) {
        theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      document.documentElement.setAttribute('data-theme', theme);
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
