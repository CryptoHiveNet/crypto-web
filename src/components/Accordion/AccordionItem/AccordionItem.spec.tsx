import { AccordionItemProps } from '@/types/shared/types/components/accordion';
import { fireEvent, render, waitFor } from '@testing-library/react';

import AccordionItem from './AccordionItem';

describe('AccordionItem component unit tests', () => {
    const props: AccordionItemProps = {
        id: 'accordion-item-id',
        className: 'accordion-item-class',
        titleClassName: 'accordion-title-class',
        contentClassName: 'accordion-content-class',
        title: 'Accordion Title',
        content: 'Accordion Content',
        testId: 'accordion-item-test-id',
        onClick: jest.fn(),
        onMouseEnter: jest.fn(),
        onMouseLeave: jest.fn(),
    };

    it('renders correctly', () => {
        const { getByText } = render(<AccordionItem {...props} />);
        waitFor(() => {
            expect(getByText('Accordion Title')).toBeInTheDocument();
            expect(getByText('Accordion Content')).toBeInTheDocument();
        });
    });

    it('receives props correctly', () => {
        const { getByTestId } = render(<AccordionItem {...props} />);
        waitFor(() => {
            expect(getByTestId('accordion-item-test-id')).toBeInTheDocument();
        });
    });

    it('calls onClick handler', () => {
        const { getByTestId } = render(<AccordionItem {...props} />);
        waitFor(() => {
            const accordionItem = getByTestId('accordion-item-test-id');
            fireEvent.click(accordionItem);
            expect(props.onClick).toHaveBeenCalledTimes(1);
        });
    });

    it('calls onMouseEnter handler', () => {
        const { getByTestId } = render(<AccordionItem {...props} />);
        waitFor(() => {
            const accordionItem = getByTestId('accordion-item-test-id');
            fireEvent.mouseEnter(accordionItem);
            expect(props.onMouseEnter).toHaveBeenCalledTimes(1);
        });
    });

    it('calls onMouseLeave handler', () => {
        const { getByTestId } = render(<AccordionItem {...props} />);
        waitFor(() => {
            const accordionItem = getByTestId('accordion-item-test-id');
            fireEvent.mouseLeave(accordionItem);
            expect(props.onMouseLeave).toHaveBeenCalledTimes(1);
        });
    });
});
