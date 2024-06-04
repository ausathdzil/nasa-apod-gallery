import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav className="flex gap-8 justify-center items-center my-8">
        <Link href="#">Gallery</Link>
        <Link href="#">About</Link>
      </nav>
    </header>
  );
}
