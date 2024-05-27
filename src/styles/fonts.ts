import { Roboto_Flex, Vazirmatn } from 'next/font/google';

export const vazirmatn = Vazirmatn({
    subsets: ['arabic'],
});
export const roboto = Roboto_Flex({
    subsets: ['latin'],
    style: ['normal'],
    display: 'swap',
});
