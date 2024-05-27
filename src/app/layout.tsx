import './globals.css';

import { dir } from 'i18next';
import { getServerSession } from 'next-auth';

import ReactQueryProvider from '@/types/components/ReactQueryProvider/ReactQueryProvider';
import SessionProvider from '@/types/components/SessionProvider/SessionProvider';
import TopMenu from '@/types/shared/components/TopMenu/TopMenu';
import { RootLayoutProps } from '@/types/shared/types/layout';
import { roboto, vazirmatn } from '@/types/styles/fonts';
import ThemeModeScript from '@/types/theme/ThemeModeScript';
import ThemeProvider from '@/types/theme/ThemeProvider';
import { I18nProvider } from '@/types/utils/i18n/i18n-context';
import { getServerTranslations } from '@/types/utils/i18n/server';

import { ToastContextProvider } from '../modules/shared/components/ToastContextProvider/ToastContextProvider';

export async function generateMetadata() {
    const { t } = await getServerTranslations();
    return {
        title: t('metadata_title'),
        description: t('metadata_description'),
    };
}
export default async function RootLayout({ children }: RootLayoutProps) {
    const session = await getServerSession();
    const { i18n } = await getServerTranslations();
    const language = i18n.resolvedLanguage;

    return (
        <html
            lang={language}
            dir={dir(language)}
            className={getFontClassName(language)}
        >
            <head>
                <ThemeModeScript />
            </head>
            <body>
                <ReactQueryProvider>
                    <SessionProvider session={session}>
                        <I18nProvider language={language}>
                            <ThemeProvider>
                                <ToastContextProvider>
                                    <TopMenu />
                                    {children}
                                </ToastContextProvider>
                            </ThemeProvider>
                        </I18nProvider>
                    </SessionProvider>
                </ReactQueryProvider>
            </body>
        </html>
    );
}

function getFontClassName(language?: string) {
    return dir(language) === 'rtl' ? vazirmatn.className : roboto.className;
}
