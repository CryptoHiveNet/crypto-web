import { dir } from 'i18next';
import { Roboto, Vazirmatn } from 'next/font/google';

import { RootLayoutProps } from '@/types/types/layout';

const FontProvider = ({ children, params: { lng } }: RootLayoutProps) => {
  const vazirmatnFont = Vazirmatn({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['arabic'],
  });
  const robotoFont = Roboto({
    weight: ['100', '300', '400', '500', '700', '900'],
    subsets: ['latin'],
    style: ['normal', 'italic'],
    display: 'swap',
  });
  const bodyClassName =
    dir(lng) === 'rtl' ? vazirmatnFont.className : robotoFont.className;

  return (
    <html
      lang={lng}
      dir={dir(lng)}
      className={bodyClassName}
    >
      <body>{children}</body>
    </html>
  );
};
export default FontProvider;
