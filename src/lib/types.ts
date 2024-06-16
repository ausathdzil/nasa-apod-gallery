export type Apod = {
  date: string;
  url: string;
  title: string;
  media_type: string;
  thumbnail_url: string;
  explanation: string;
  copyright?: string;
};


export type datePageProps = {
  params: {
    date: string;
  };
};
