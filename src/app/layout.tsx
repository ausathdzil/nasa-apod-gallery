import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NASA APOD Gallery',
  description: 'A collection of NASA Astronomy Picture of the Day',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} antialiased`}>
        <div className="flex flex-col">
          <Header />
          <main className="min-h-[calc(100svh-131px)]">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
