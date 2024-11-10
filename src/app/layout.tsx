import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import type { Metadata } from 'next';
import { Hanken_Grotesk } from 'next/font/google';
import './globals.css';

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | NASA APOD',
    default: 'NASA APOD Gallery',
  },
  description: 'A collection of NASA Astronomy Picture of the Day',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hankenGrotesk.className} antialiased`}>
        <Header />
        <main className="min-h-[calc(100svh-131px)] flex flex-col items-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
