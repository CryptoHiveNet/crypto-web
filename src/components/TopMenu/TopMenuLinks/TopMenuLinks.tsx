import { usePathname } from 'next/navigation';

import { useTranslation } from '@/types/utils/i18n';

import NavbarLink from '../../Navbar/NavbarLink/NavbarLink';

export function TopMenuLinks({ links }: any) {
    const path = usePathname();

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
