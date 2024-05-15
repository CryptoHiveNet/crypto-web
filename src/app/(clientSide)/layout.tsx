import './globals.css';
import { Suspense } from 'react';

import { dir } from 'i18next';
import { getServerSession } from 'next-auth';

import ReactQueryProvider from '@/types/components/ReactQueryProvider/ReactQueryProvider';
import SessionProvider from '@/types/components/SessionProvider/SessionProvider';
import TopMenu from '@/types/components/TopMenu/TopMenu';
import { RootLayoutProps } from '@/types/shared/types/layout';
import { roboto, vazirmatn } from '@/types/styles/fonts';
import ThemeProvider from '@/types/theme/ThemeProvider';
import { I18nProvider } from '@/types/utils/i18n/i18n-context';
import detectLanguage, { getServerTranslations } from '@/types/utils/i18n/server';

// export async function generateMetadata() {
//     const { t } = await getServerTranslations();
//     return {
//         title: t('metadata_title'),
//         description: t('metadata_description'),
//     };
// }
// export const metadata: Metadata = {
//     title: 'Create Next App',
//     description: 'Generated by create next app',
// };
// export const getServerSideProps = async () => {
//     const session = await getServerSession();
//     const language = await detectLanguage();
//     return {
//         props: {
//             session,
//             language,
//         },
//     };
// };
export default async function RootLayout({ children }: RootLayoutProps) {
    const session = await getServerSession().catch((e) => {
        console.log('error: ', e);
        return null;
    });
    const { t, i18n } = await getServerTranslations();
    // const language = 'en';
    // const { i18n } = useTranslation();
    const language = i18n.resolvedLanguage;

    return (
        <html
            lang={language}
            dir={dir(language)}
            className={getFontClassName(language)}
        >
            <body>
                {/* <ReactQueryProvider> */}
                <SessionProvider session={session}>
                    {/* <ThemeProvider> */}
                    <I18nProvider language={language}>
                        {/* <TopMenu /> */}
                        {children}
                    </I18nProvider>
                    {/* </ThemeProvider> */}
                </SessionProvider>
                {/* </ReactQueryProvider> */}
            </body>
        </html>
    );
}

function getFontClassName(language?: string) {
    return dir(language) === 'rtl' ? vazirmatn.className : roboto.className;
}
