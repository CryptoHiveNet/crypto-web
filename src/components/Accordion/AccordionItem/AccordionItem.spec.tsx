import { fireEvent, render, screen } from '@testing-library/react';

import Accordion from '../Accordion';
import AccordionItem from './AccordionItem';

const mockOnMouseEnter = jest.fn();
const mockOnMouseLeave = jest.fn();

const mockProps = {
    className: 'accordion-item-class',
    titleClassName: 'accordion-title-class',
    contentClassName: 'accordion-content-class',
    title: 'Accordion Title',
    titleTestId: 'accordion-title-item-id',
    content: <div>Accordion Content</div>,
    contentTestId: 'accordion-content-item-id',
    onMouseEnter: mockOnMouseEnter,
    onMouseLeave: mockOnMouseLeave,
};

describe('AccordionItem component unit tests', () => {
    beforeEach(() => {
        mockOnMouseEnter.mockClear();
        mockOnMouseLeave.mockClear();
    });

    it('renders correctly', () => {
        render(
            <Accordion>
                <AccordionItem {...mockProps} />
            </Accordion>,
        );

        const accordionTitle = screen.getByText('Accordion Title');
        const accordionContent = screen.queryByTestId(
            'accordion-content-item-id',
        );

        expect(accordionTitle).toBeInTheDocument();
        expect(accordionContent).toBeInTheDocument();
    });

    it('calls onClick handler', () => {
        render(<AccordionItem {...mockProps} />);

        const accordionTitle = screen.getByText('Accordion Title');
        const accordionContent = screen.queryByTestId(
            'accordion-content-item-id',
        );

        fireEvent.click(accordionTitle);
        expect(accordionContent).not.toHaveAttribute('hidden', true);
    });
});
