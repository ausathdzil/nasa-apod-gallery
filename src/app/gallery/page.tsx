import Apods from '../components/Apods';

export default function Gallery() {
  return (
    <main className="flex flex-col justify-center items-center text-center gap-8">
      <h1 className="font-bold text-3xl">APODs</h1>
      <Apods />
    </main>
  );
}
