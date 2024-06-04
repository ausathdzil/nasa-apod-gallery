import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav className="flex gap-8 justify-center items-center my-8">
        <Link className="transition ease-in-out hover:text-blue-400" href="#">Gallery</Link>
        <Link className="transition ease-in-out hover:text-blue-400" href="#">About</Link>
      </nav>
    </header>
  );
}
