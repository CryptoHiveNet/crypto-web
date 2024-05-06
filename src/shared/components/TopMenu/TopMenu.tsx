'use client';
import { DarkThemeToggle } from 'flowbite-react';
import { t } from 'i18next';
import { signIn, signOut, useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';

import Avatar from '../Avatar/Avatar';
import Dropdown from '../Dropdown/Dropdown';
import DropdownDivider from '../Dropdown/DropdownDivider/DropdownDivider';
import DropdownHeader from '../Dropdown/DropdownHeader/DropdownHeader';
import DropdownItem from '../Dropdown/DropdownItem/DropdownItem';
import Navbar from '../Navbar/Navbar';
import NavbarBrand from '../Navbar/NavbarBrand/NavbarBrand';
import NavbarCollapse from '../Navbar/NavbarCollapse/NavbarCollapse';
import NavbarLink from '../Navbar/NavbarLink/NavbarLink';
import NavbarToggle from '../Navbar/NavbarToggle/NavbarToggle';

const TopMenu = () => {
    const { data: session } = useSession();
    const path = usePathname();
    const links = [
        { name: t('home'), href: '/' }, // ToDo: there should be a way to get the homepage language and add it here
        { name: t('about-us'), href: '#' },
        { name: t('rules'), href: '#' },
        { name: t('news'), href: '#' },
        { name: t('blog'), href: '#' },
    ];
    function userAuthStatus() {
        if (session)
            return (
                <>
                    {session.user.name},
                    <button
                        type="button"
                        onClick={() => signOut()}
                    >
                        Sign out
                    </button>
                </>
            );

        return (
            <button
                type="button"
                onClick={() => signIn()}
            >
                Login / Register
            </button>
        );
    }
    return (
        <Navbar
            fluid
            rounded
        >
            <NavbarBrand href="#">
                <DarkThemeToggle />
                img here
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Flowbite React
                </span>
            </NavbarBrand>
            <div className="flex md:order-2">
                <Dropdown
                    inline
                    label={
                        <Avatar
                            alt="User settings"
                            img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                            rounded
                        />
                    }
                >
                    <DropdownHeader>
                        <span className="block text-sm">Bonnie Green</span>
                        <span className="block truncate text-sm font-medium">
                            name@flowbite.com
                        </span>
                    </DropdownHeader>
                    <DropdownItem>Dashboard</DropdownItem>
                    <DropdownItem>Settings</DropdownItem>
                    <DropdownItem>Earnings</DropdownItem>
                    <DropdownDivider />
                    <DropdownItem>Sign out</DropdownItem>
                </Dropdown>
                <NavbarToggle />
            </div>
            <NavbarCollapse>
                <NavbarLink href="#">{userAuthStatus()}</NavbarLink>
                {links.map((link) => (
                    <NavbarLink
                        key={link.name}
                        href={link.href}
                        active={path === link.href ? true : false}
                    >
                        {link.name}
                    </NavbarLink>
                ))}
            </NavbarCollapse>
        </Navbar>
    );
};

export default TopMenu;
