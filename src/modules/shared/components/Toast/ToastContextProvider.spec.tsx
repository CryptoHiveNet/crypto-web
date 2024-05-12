import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, renderHook } from '@testing-library/react';
import { ReactNode } from 'react';

import { ToastContextProvider, useToastContext } from './ToastContextProvider';
import { ToastType } from '@/types/shared/types/components/toast';

jest.mock('react-i18next', () => ({
    // this mock makes sure any components using the translate hook can use it without a warning being shown
    useTranslation: () => {
        return {
            t: (str: string): string => str
        };
    }
}));

const wrapper = ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={new QueryClient()}>
        <ToastContextProvider>{children}</ToastContextProvider>
    </QueryClientProvider>
);

describe('ToastContextProvider', () => {
    it('renders an initially empty toastlist', () => {
        const { result } = renderHook(() => useToastContext(), { wrapper });

        expect(result.current.toastList).toStrictEqual([]);
    });
    it('creates toasts correctly', () => {
        const { result } = renderHook(() => useToastContext(), { wrapper });

        for (let i = 0; i < 10; i++) {
            act(() => {
                result.current.createToast({ message: 'test', type: ToastType.Danger });
            });
        }

        expect(result.current.toastList.length).toBe(10);
    });

    it('deletes toasts correctly', () => {
        const { result } = renderHook(() => useToastContext(), { wrapper });

        const toastIds: Array<number> = [];

        for (let i = 0; i < 10; i++) {
            act(() => {
                toastIds.push(result.current.createToast({ message: i + '', type: ToastType.Success }));
            });
        }
        // array before deletions => | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
        act(() => result.current.deleteToast(toastIds[0]));
        act(() => result.current.deleteToast(toastIds[2]));
        act(() => result.current.deleteToast(toastIds[5]));
        act(() => result.current.deleteToast(toastIds[8]));
        // expected array after deletions => | 2 | 4 | 5 | 7 | 8 | 10 |

        expect(result.current.toastList.length).toBe(6);
        expect(result.current.toastList[0].id).toBe('2');
        expect(result.current.toastList[5].id).toBe('10');
    });
});
