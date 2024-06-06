'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import { ModeToggle } from './ModeToggle';

export default function Header() {
  return (
    <header>
      <nav className="flex justify-between items-center my-8 mx-auto max-w-[280px] sm:max-w-[425px] lg:max-w-[768px]">
        <Link href="/">
          <Button
            variant="link"
            size="icon"
            className="group"
          >
            <Sparkles
              size={24}
              className="transition ease-in-out group-hover:scale-105 group-hover:fill-zinc-900 dark:group-hover:fill-zinc-50"
            />
          </Button>
        </Link>
        <div className="flex gap-4">
          <Link href="/gallery">
            <p className="transition ease-in-out hover:text-blue-400">
              Gallery
            </p>
          </Link>
        </div>
        <ModeToggle />
      </nav>
    </header>
  );
}
