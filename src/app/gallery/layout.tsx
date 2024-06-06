export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col justify-center items-center text-center gap-8">
      {children}
    </main>
  );
}
