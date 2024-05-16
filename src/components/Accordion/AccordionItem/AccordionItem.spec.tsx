import { title } from 'process';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import AccordionItem from './AccordionItem';

const mockOnClick = jest.fn();
const mockOnMouseEnter = jest.fn();
const mockOnMouseLeave = jest.fn();

const mockProps = {
    className: 'accordion-item-class',
    titleClassName: 'accordion-title-class',
    contentClassName: 'accordion-content-class',
    title: 'Accordion Title',
    titleTestId: 'accordion-title-item-id',
    content: 'Accordion Content',
    onClick: mockOnClick,
    onMouseEnter: mockOnMouseEnter,
    onMouseLeave: mockOnMouseLeave,
};

describe('AccordionItem component unit tests', () => {
    beforeEach(() => {
        mockOnClick.mockClear();
        mockOnMouseEnter.mockClear();
        mockOnMouseLeave.mockClear();
    });

    it('renders correctly', () => {
        render(<AccordionItem {...mockProps} />);

        const accordionTitle = screen.getByText('Accordion Title');
        const accordionContent = screen.getByText('Accordion Content');

        expect(accordionTitle).toBeInTheDocument();
        expect(accordionContent).toBeInTheDocument();
        expect(screen.queryByTestId('accordion-item-id')).toBeNull();
    });

    it('calls onClick handler', () => {
        render(<AccordionItem {...mockProps} />);

        const accordionItem = screen.getByTestId('accordion-title-item-id');

        fireEvent.click(accordionItem);
        waitFor(() => expect(mockOnClick).toHaveBeenCalledTimes(1));
    });

    it('calls onMouseEnter handler', () => {
        render(<AccordionItem {...mockProps} />);

        const accordionItem = screen.getByTestId('accordion-title-item-id');

        fireEvent.mouseEnter(accordionItem);
        waitFor(() => expect(mockOnMouseEnter).toHaveBeenCalledTimes(1));
    });

    it('calls onMouseLeave handler', () => {
        render(<AccordionItem {...mockProps} />);

        const accordionItem = screen.getByTestId('accordion-title-item-id');

        fireEvent.mouseLeave(accordionItem);
        waitFor(() => expect(mockOnMouseLeave).toHaveBeenCalledTimes(1));
    });
});
