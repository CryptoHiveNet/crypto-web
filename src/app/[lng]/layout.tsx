import type { Metadata } from 'next';
import './globals.css';

import { dir, t } from 'i18next';
import { getServerSession } from 'next-auth';

import ReactQueryProvider from '@/types/components/ReactQueryProvider/ReactQueryProvider';
import SessionProvider from '@/types/components/SessionProvider/SessionProvider';
import TopMenu from '@/types/components/TopMenu/TopMenu';
import { RootLayoutProps } from '@/types/shared/types/layout';
import { roboto, vazirmatn } from '@/types/styles/fonts';
import ThemeProvider from '@/types/theme/ThemeProvider';
import { languages } from '@/types/utils/i18n/settings';

export async function generateStaticParams() {
    return languages.map((lng) => ({ lng }));
}
export const metadata: Metadata = {
    title: t('metadata_title'),
    description: t('metadata_description'),
};
export default async function RootLayout({
    children,
    params: { lng },
}: RootLayoutProps) {
    const session = await getServerSession();

    return (
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
    );
}
