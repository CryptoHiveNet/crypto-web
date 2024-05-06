'use client';
import { Suspense } from 'react';

import { DarkThemeToggle } from 'flowbite-react';
import { signIn, signOut, useSession } from 'next-auth/react';

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
import { TopMenuLinks } from './TopMenuLinks/TopMenuLinks';

const TopMenu = ({ lng }: any) => {
    const homeURL = '/'; // ToDo: there should be a way to get the homepage language and add it here
    const { data: session } = useSession();
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
            <NavbarBrand href={homeURL}>
                {/* <DarkThemeToggle /> */}
                <img
                    src="/favicon.svg"
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite React Logo"
                />
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
                <Suspense fallback={<p>loading ...</p>}>
                    <TopMenuLinks lng={lng} />
                </Suspense>
            </NavbarCollapse>
        </Navbar>
    );
};

export default TopMenu;
