import { Roboto, Vazirmatn } from 'next/font/google';

export const vazirmatn = Vazirmatn({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['arabic'],
});
export const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
});
