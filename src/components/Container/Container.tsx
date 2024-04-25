import { ReactNode } from 'react';
import { cn } from '@/types/modules/shared/utils/cn';

type ContainerProps = {
    flexContainer: boolean;
    fullHeight: boolean;
    tag?: string;
    className?: string;
    children?: ReactNode;
    dataTestId?: string;
};

export const Container = ({
    flexContainer,
    fullHeight,
    tag,
    className,
    children,
    dataTestId,
}: ContainerProps) => {
    const ContainerClass = cn({
        ['mx-auto px-3 my-0 py-0 max-w-[1280px] md:px-10 sm:pb-24 legacy:px-[10px]']:
            true,
        [className as string]: !!className,
        ['flex']: flexContainer,
        ['h-full']: fullHeight,
    });

    const CustomTag = tag as keyof JSX.IntrinsicElements;

    return (
        <CustomTag
            data-testid={dataTestId ?? ''}
            className={ContainerClass}
        >
            {children}
        </CustomTag>
    );
};

Container.defaultProps = {
    flexContainer: false,
    fullHeight: false,
    tag: 'div',
};
