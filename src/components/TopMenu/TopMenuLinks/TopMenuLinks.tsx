import { usePathname } from 'next/navigation';

import { useTranslation } from '@/types/utils/i18n';

import NavbarLink from '../../Navbar/NavbarLink/NavbarLink';

export async function TopMenuLinks({ lng }: any) {
    const path = usePathname();
    const { t } = await useTranslation(lng);
    const links = [
        { name: t('home'), href: '/' },
        { name: t('about-us'), href: '#' },
        { name: t('rules'), href: '#' },
        { name: t('news'), href: '#' },
        { name: t('blog'), href: '#' },
    ];

    return links?.map((link) => (
        <NavbarLink
            key={link.name}
            href={link.href}
            active={path === link.href ? true : false}
        >
            {link.name}
        </NavbarLink>
    ));
}
