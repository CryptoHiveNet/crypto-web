'use client';
import { forwardRef } from 'react';

import Image from 'next/image';

import Navbar from '../../../components/Navbar/Navbar';
import NavbarBrand from '../../../components/Navbar/NavbarBrand/NavbarBrand';
import NavbarCollapse from '../../../components/Navbar/NavbarCollapse/NavbarCollapse';
import NavbarToggle from '../../../components/Navbar/NavbarToggle/NavbarToggle';
import profilePic from '../../../public/next.svg';
import TopMenuLinks from './TopMenuLinks/TopMenuLinks';
import TopUserMenu from './TopUserMenu/TopUserMenu';

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
                    <TopUserMenu lng={lng} />
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
