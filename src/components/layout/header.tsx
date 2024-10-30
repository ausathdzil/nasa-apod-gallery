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
        'sticky top-0 z-50 text-3xl border-b border-black p-4',
        isScrolled ? 'bg-white/70 backdrop-blur-lg' : 'bg-white'
      )}
    >
      <nav className="flex items-center gap-2">
        <Link className="font-bold text-blue-500" href="/">
          NASA APOD
        </Link>
        <Link href="/">Gallery</Link>
      </nav>
    </header>
  );
}
