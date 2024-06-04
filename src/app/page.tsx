import Header from './components/Header';
import Apods from './components/Apods';

export default function Home() {
  return (
    <>
      <main className="flex flex-col justify-center items-center text-center gap-8 my-8">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-3xl">APODs</h1>
          <h1>Astronomy Picture of the Day</h1>
        </div>
        <Apods />
      </main>
    </>
  );
}
