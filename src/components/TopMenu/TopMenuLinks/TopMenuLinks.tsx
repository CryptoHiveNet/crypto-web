import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import NavbarLink from '../../Navbar/NavbarLink/NavbarLink';

export function TopMenuLinks() {
    const path = usePathname();
    const { t, i18n } = useTranslation();
    const links = [
        { name: t('home'), href: '/' },
        { name: t('about-us'), href: '#' },
        { name: t('rules'), href: '#' },
        { name: t('news'), href: '#' },
        { name: t('blog'), href: '#' },
    ];
    return links?.map((link: { name: string; href: string }) => (
        <NavbarLink
            key={link.name}
            href={link.href}
            active={path === link.href ? true : false}
        >
            {link.name}
        </NavbarLink>
    ));
}
