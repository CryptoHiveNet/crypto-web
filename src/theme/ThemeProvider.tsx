'use client';
import type { CustomFlowbiteTheme } from 'flowbite-react';
import { ReactNode, useEffect } from 'react';

import { initFlowbite } from 'flowbite';
import { DarkThemeToggle, Flowbite } from 'flowbite-react';

const customTheme: CustomFlowbiteTheme = {
    button: {
        color: {
            primary: 'bg-red-500 hover:bg-red-600',
        },
    },
};

const ThemeProvider = ({ children }: { children: ReactNode }) => {
    // useEffect(() => {
    //     initFlowbite();
    // }, []);
    return (
        <Flowbite theme={{ theme: customTheme }}>
            {children}
            {/* <DarkThemeToggle /> */}
        </Flowbite>
    );
};
export default ThemeProvider;
