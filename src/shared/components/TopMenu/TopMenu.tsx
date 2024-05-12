'use client';
import { forwardRef } from 'react';

import Image from 'next/image';

import profilePic from '../../../public/next.svg';
import Navbar from '../Navbar/Navbar';
import NavbarBrand from '../Navbar/NavbarBrand/NavbarBrand';
import NavbarCollapse from '../Navbar/NavbarCollapse/NavbarCollapse';
import NavbarToggle from '../Navbar/NavbarToggle/NavbarToggle';
import TopMenuLinks from './TopMenuLinks/TopMenuLinks';
import TopMenuUserMenu from './TopMenuUserMenu/TopMenuUserMenu';

// eslint-disable-next-line react/display-name
const TopMenu = forwardRef<any, { lng: string; testId?: string }>(
    (
        { lng, testId }: { lng: string; testId?: string },
        ref: React.Ref<any> | null,
    ) => {
        return (
            <Navbar
                rounded
                testId={testId}
                ref={ref}
            >
                <NavbarBrand href="/">
                    <Image
                        src={profilePic}
                        className="h-6 sm:h-9 w-fit"
                        alt="Flowbite React Logo"
                    />
                </NavbarBrand>
                <div className="flex md:order-2">
                    <TopMenuUserMenu lng={lng} />
                    <NavbarToggle />
                </div>
                <NavbarCollapse>
                    <TopMenuLinks lng={lng} />
                </NavbarCollapse>
            </Navbar>
        );
    },
);

export default TopMenu;
