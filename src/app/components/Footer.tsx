'use client';

import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="flex flex-col my-8 mx-auto max-w-[280px] md:max-w-[512px] lg:max-w-[768px] xl:max-w-[1024px] gap-4">
      <Separator />
      <div className="flex justify-between items-center">
        <p className="text-zinc-500">Ausath Abdi Dzil Ikram</p>
        <nav className="flex gap-4">
          <Link
            href="https://github.com/ausathdzil"
            target="_blank"
          >
            <Button
              variant="link"
              size="icon"
              className="group"
            >
              <Github
                size={24}
                className="transition ease-in-out group-hover:scale-105 group-hover:fill-zinc-900 dark:group-hover:fill-zinc-50"
              />
            </Button>
          </Link>
          <Link
            href="https://linkedin.com/in/ausathdzil"
            target="_blank"
          >
            <Button
              variant="link"
              size="icon"
              className="group"
            >
              <Linkedin
                size={24}
                className="transition ease-in-out group-hover:scale-105 group-hover:fill-zinc-900 dark:group-hover:fill-zinc-50"
              />
            </Button>
          </Link>
        </nav>
      </div>
    </footer>
  );
}
