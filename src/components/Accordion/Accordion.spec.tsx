import { fireEvent, render, screen } from '@testing-library/react';

import Accordion from './Accordion';
import AccordionItem from './AccordionItem/AccordionItem';

const mockOnClick = jest.fn();
const mockOnMouseEnter = jest.fn();
const mockOnMouseLeave = jest.fn();

const mockProps = {
    id: 'test-accordion',
    className: 'accordion',
    testId: 'test-accordion',
    collapseAll: true,
    onClick: mockOnClick,
    onMouseEnter: mockOnMouseEnter,
    onMouseLeave: mockOnMouseLeave,
};

describe('Accordion component unit tests', () => {
    beforeEach(() => {
        mockOnClick.mockClear();
        mockOnMouseEnter.mockClear();
        mockOnMouseLeave.mockClear();
    });

    it('should render Accordion component with required props', () => {
        render(
            <Accordion {...mockProps}>
                <AccordionItem
                    title="Section 1"
                    content="Section 1 content"
                />
                <AccordionItem
                    title="Section 2"
                    content="Section 2 content"
                />
            </Accordion>,
        );

        const accordionComponent = screen.getByTestId('test-accordion');

        expect(accordionComponent).toBeInTheDocument();
        expect(accordionComponent).toHaveAttribute('id', 'test-accordion');
        expect(accordionComponent).toHaveClass('accordion');
    });

    it('should fire onClick callback when Accordion component is clicked', () => {
        render(
            <Accordion {...mockProps}>
                <AccordionItem
                    title="Section 1"
                    content="Section 1 content"
                />
                <AccordionItem
                    title="Section 2"
                    content="Section 2 content"
                />
            </Accordion>,
        );

        fireEvent.click(screen.getByTestId('test-accordion'));

        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it('should fire onMouseEnter callback when mouse enters Accordion component', () => {
        render(
            <Accordion {...mockProps}>
                <AccordionItem
                    title="Section 1"
                    content="Section 1 content"
                />
                <AccordionItem
                    title="Section 2"
                    content="Section 2 content"
                />
            </Accordion>,
        );

        fireEvent.mouseEnter(screen.getByTestId('test-accordion'));

        expect(mockOnMouseEnter).toHaveBeenCalledTimes(1);
    });

    it('should fire onMouseLeave callback when mouse leaves Accordion component', () => {
        render(
            <Accordion {...mockProps}>
                <AccordionItem
                    title="Section 1"
                    content="Section 1 content"
                />
                <AccordionItem
                    title="Section 2"
                    content="Section 2 content"
                />
            </Accordion>,
        );

        fireEvent.mouseLeave(screen.getByTestId('test-accordion'));

        expect(mockOnMouseLeave).toHaveBeenCalledTimes(1);
    });
});
