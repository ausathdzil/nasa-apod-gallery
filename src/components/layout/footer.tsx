export default function Footer() {
  return (
    <footer className="p-4 border-t border-black text-xl font-bold flex">
      <p>&copy; 2024 Ausath Ikram</p>
      <div className="grow text-right space-x-4">
        <a
          href="https://github.com/ausathdzil"
          rel="noopener noreferrer"
          target="_blank"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/ausathdzil"
          rel="noopener noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
