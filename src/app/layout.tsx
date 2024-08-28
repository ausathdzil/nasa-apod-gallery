import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import { ViewTransitions } from 'next-view-transitions';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'APOD Gallery',
  description: 'Collection of NASA Astronomy Picture of the Day',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <head>
          <link
            rel="icon"
            type="image/svg+xml"
            href="/sparkle.svg"
            sizes="any"
          />
        </head>
        <body className={`${inter.className} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="flex flex-col justify-center items-center text-center gap-8 mx-2 sm:mx-16 lg:mx-auto max-w-5xl min-h-[calc(100vh-225px)]">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
