import Apod from './components/Apod';

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center text-center gap-8">
      <h1 className="font-bold text-xl sm:text-3xl">Astronomy Picture of the Day</h1>
      <Apod />
    </main>
  );
}
