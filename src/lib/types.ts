export type Apod = {
  code?: number
  msg?: string;
  copyright?: string;
  date: string;
  explanation: string;
  media_type: string;
  thumbnail_url?: string | '';
  title: string;
  url: string;
};
