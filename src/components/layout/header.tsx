'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 sm:text-3xl border-b border-black p-4',
        isScrolled ? 'bg-white/80 backdrop-blur-sm' : 'bg-white'
      )}
    >
      <nav className="flex items-center">
        <Link className="font-bold text-blue-500" href="/">
          NASA APOD <span className="text-black">Gallery</span>
        </Link>
        <div className="grow text-right space-x-2 sm:space-x-8">
          <Link href="/discover">Discover</Link>
          <Link href="/about">About</Link>
        </div>
      </nav>
    </header>
  );
}
