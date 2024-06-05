import Link from 'next/link';
import { Sparkles } from 'lucide-react';
import { Github } from 'lucide-react';

export default function Header() {
  return (
    <header>
      <nav className="flex justify-between items-center my-8 mx-auto max-w-[280px] sm:max-w-[425px] lg:max-w-[768px]">
        <Link className="transition ease-in-out hover:scale-105" href="/">
          <Sparkles size={24} className='transition ease-in-out hover:fill-white' />
        </Link>
        <div className="flex gap-4">
          <Link className="transition ease-in-out hover:text-blue-400" href="/gallery">Gallery</Link>
          <Link className="transition ease-in-out hover:text-blue-400" href="/about">About</Link>
        </div>
        <div className="flex gap-4">
          <Link className="transition ease-in-out hover:scale-105" href="/">
            <Github size={24} className='transition ease-in-out hover:fill-white' />
          </Link>
        </div>
      </nav>
    </header>
  );
}
