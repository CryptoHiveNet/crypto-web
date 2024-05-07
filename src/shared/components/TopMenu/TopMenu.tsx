'use client';
import Image from 'next/image';

import profilePic from '../../../public/next.svg';
import Navbar from '../Navbar/Navbar';
import NavbarBrand from '../Navbar/NavbarBrand/NavbarBrand';
import NavbarCollapse from '../Navbar/NavbarCollapse/NavbarCollapse';
import NavbarToggle from '../Navbar/NavbarToggle/NavbarToggle';
import { TopMenuLinks } from './TopMenuLinks/TopMenuLinks';
import TopMenuUserMenu from './TopMenuUserMenu/TopMenuUserMenu';

const TopMenu = ({ links }: any) => {
    return (
        <Navbar rounded>
            <NavbarBrand href="/">
                {/* <DarkThemeToggle /> */}
                <Image
                    src={profilePic}
                    className="h-6 sm:h-9 w-fit"
                    alt="Flowbite React Logo"
                />
            </NavbarBrand>
            <div className="flex md:order-2">
                <TopMenuUserMenu />
                <NavbarToggle />
            </div>
            <NavbarCollapse>
                <TopMenuLinks links={links} />
            </NavbarCollapse>
        </Navbar>
    );
};

export default TopMenu;
