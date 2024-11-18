// react/nextjs components
import type { Metadata } from "next";

// fonts
import { Inter } from "next/font/google";

// CSS styles.
import "./globals.css";

// Theme configuration component
import { ThemeProvider } from "@/app/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MarcVerse",
  description:
    "Explore the portfolio of Marc Brown, showcasing projects, skills, and accomplishments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body className={`bg-black-100/40 ${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
