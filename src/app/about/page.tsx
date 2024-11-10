import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn more about NASA Astronomy Picture of the Day (APOD) Gallery.',
};

export default function Page() {
  return (
    <article className="p-8 prose sm:prose-lg prose-zinc">
      <h1>About NASA APOD Gallery</h1>
      <p>
        Welcome to NASA Astronomy Picture of the Day (APOD) Gallery—a curated
        journey through the cosmos, showcasing some of the most breathtaking and
        thought-provoking images from NASA&apos;s vast collection. Each image
        here captures a unique glimpse into our universe, from mesmerizing
        nebulae and distant galaxies to rare phenomena on Earth and beyond.
      </p>
      <p>
        This gallery is designed for explorers at heart, whether you&apos;re an
        aspiring astronomer or simply captivated by the beauty of the stars.
        Dive into each image to learn more about the science and wonder that
        make our universe so endlessly fascinating.
      </p>
      <p>
        All images are sourced from{' '}
        <a
          href="https://github.com/nasa/apod-api"
          target="_blank"
          rel="noopener noreferrer"
        >
          NASA&apos;s APOD API
        </a>
        , which provides a wealth of information about each image, including the
        date it was captured, the photographer or source, and a detailed
        explanation of the science behind the image. You can explore the full
        APOD archive on the official NASA website to discover even more stunning
        images and fascinating stories about our universe.
      </p>
      <p>
        This gallery is a personal project created by me,{' '}
        <a
          href="https://ausathikram.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ausath Ikram
        </a>
        , a web developer. I created this gallery as a way to share my love of
        astronomy, but also to improve my skills as a developer. I hope you
        enjoy exploring the images as much as I enjoyed creating this project.
      </p>
    </article>
  );
}
