import { forwardRef } from 'react';

import { usePathname } from 'next/navigation';

import { useTranslation } from '@/types/utils/i18n/client';
import { languages } from '@/types/utils/i18n/settings';

import NavbarLink from '../../Navbar/NavbarLink/NavbarLink';

// eslint-disable-next-line react/display-name
const TopMenuLinks = forwardRef<any, { lng: string }>(
    ({ lng }: { lng: string }, ref: React.Ref<any> | null) => {
        const path = usePathname();
        const { t } = useTranslation(lng);

        const links = [
            { name: t('home'), href: '' },
            { name: t('about-us'), href: '#' },
            { name: t('rules'), href: '#' },
            { name: t('news'), href: '#' },
            { name: t('blog'), href: '#' },
        ];
        return links?.map((link: { name: string; href: string }) => (
            <NavbarLink
                ref={ref}
                key={link.name}
                href={link.href}
                active={languages.some(
                    (lang) => path === '/' + lang + link.href,
                )}
            >
                {link.name}
            </NavbarLink>
        ));
    },
);

export default TopMenuLinks;
