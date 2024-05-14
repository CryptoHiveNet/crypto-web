'use client';
import type { CustomFlowbiteTheme } from 'flowbite-react';
import { ReactNode } from 'react';

import { DarkThemeToggle, Flowbite } from 'flowbite-react';

const customTheme: CustomFlowbiteTheme = {
    button: {
        color: {
            primary: 'bg-red-500 hover:bg-red-600',
        },
    },
};

export default function ThemeProvider({ children }: { children: ReactNode }) {
    return (
        <Flowbite theme={{ theme: customTheme }}>
            {children}
            <DarkThemeToggle />
        </Flowbite>
    );
}
