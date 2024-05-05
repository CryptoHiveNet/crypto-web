import { beforeEach, describe, expect, it } from '@jest/globals';

jest.mock('next/font/google', () => ({
    Roboto_Flex: jest.fn(),
    Vazirmatn: jest.fn(),
}));

let fonts;

describe('Fonts configuration', () => {
    beforeEach(() => {
        jest.resetModules();
        jest.clearAllMocks();

        jest.doMock('next/font/google', () => ({
            Roboto_Flex: jest.fn().mockReturnValue({
                weight: ['100', '300', '400', '500', '700', '900'],
                subsets: ['latin'],
                style: ['normal', 'italic'],
                display: 'swap',
            }),
            Vazirmatn: jest.fn().mockReturnValue({
                weight: [
                    '100',
                    '200',
                    '300',
                    '400',
                    '500',
                    '600',
                    '700',
                    '800',
                    '900',
                ],
                subsets: ['arabic'],
            }),
        }));

        fonts = require('./fonts');
    });

    it('Vazirmatn font should be configured with correct properties', () => {
        const { Vazirmatn } = require('next/font/google');
        expect(Vazirmatn).toHaveBeenCalled();
        expect(Vazirmatn).toHaveBeenCalledWith({
            subsets: ['arabic'],
        });
    });

    it('Roboto_Flex font should be configured with correct properties', () => {
        const { Roboto_Flex } = require('next/font/google');
        expect(Roboto_Flex).toHaveBeenCalled();
        expect(Roboto_Flex).toHaveBeenCalledWith({
            subsets: ['latin'],
            display: 'swap',
        });
    });
});
