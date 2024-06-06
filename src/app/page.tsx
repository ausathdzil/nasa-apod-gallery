import TodaysApodDetails from './components/TodaysApodDetails';

export default function Home() {
  return (
    <>
      <h1 className="font-bold text-xl sm:text-3xl">
        Astronomy Picture of the Day
      </h1>
      <TodaysApodDetails />
    </>
  );
}
