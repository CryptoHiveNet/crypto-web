import './globals.css';

import { dir } from 'i18next';
import { getServerSession } from 'next-auth';

import ReactQueryProvider from '@/types/components/ReactQueryProvider/ReactQueryProvider';
import SessionProvider from '@/types/components/SessionProvider/SessionProvider';
import TopMenu from '@/types/components/TopMenu/TopMenu';
import { RootLayoutProps } from '@/types/shared/types/layout';
import { roboto, vazirmatn } from '@/types/styles/fonts';
import ThemeProvider from '@/types/theme/ThemeProvider';
import { I18nProvider } from '@/types/utils/i18n/i18n-context';
import {
    detectLanguage,
    getServerTranslations,
} from '@/types/utils/i18n/server';

// export async function generateStaticParams() {
//     return languages.map((lng) => ({ lng }));
// }
// export const metadata: Metadata = {
//     title: t('metadata_title'),
//     description: t('metadata_description'),
// };
export async function generateMetadata() {
    const { t } = await getServerTranslations();
    return {
        title: t('metadata_title'),
        description: t('metadata_description'),
    };
}
export default async function RootLayout({ children }: RootLayoutProps) {
    const session = await getServerSession();
    const lng = await detectLanguage();
    return (
        <I18nProvider language={lng}>
            <html
                lang={lng}
                dir={dir(lng)}
                className={
                    dir(lng) === 'rtl' ? vazirmatn.className : roboto.className
                }
            >
                <body>
                    <ReactQueryProvider>
                        <SessionProvider session={session}>
                            <ThemeProvider>
                                <TopMenu />
                                {children}
                            </ThemeProvider>
                        </SessionProvider>
                    </ReactQueryProvider>
                </body>
            </html>
        </I18nProvider>
    );
}
