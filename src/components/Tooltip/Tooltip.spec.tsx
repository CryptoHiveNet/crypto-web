import { fireEvent, render, waitFor } from '@testing-library/react';

import Tooltip from './Tooltip';

describe('Tooltip component unit tests', () => {
    const mockProps = {
        id: 'test-tooltip',
        content: 'Tooltip content',
        placement: 'top',
        trigger: 'hover',
        animation: true,
        arrow: true,
        className: 'custom-tooltip',
        testId: 'test-tooltip',
    };

    const { getByTestId, getByText, queryByText } = render(
        <Tooltip {...mockProps}>Hover me</Tooltip>,
    );
    it('should render Tooltip component with required props', () => {
        waitFor(() => {
            const tooltipComponent = getByTestId('test-tooltip');
            expect(tooltipComponent).toBeInTheDocument();
            expect(tooltipComponent).toHaveClass('custom-tooltip');
        });
    });
    it('should show tooltip content on mouse enter', () => {
        waitFor(() => {
            const triggerElement = getByText('Hover me');
            fireEvent.mouseEnter(triggerElement);
            const tooltipContent = getByText('Tooltip content');
            expect(tooltipContent).toBeInTheDocument();
        });
    });
    it('should hide tooltip content on mouse leave', () => {
        waitFor(() => {
            const triggerElement = getByText('Hover me');
            fireEvent.mouseEnter(triggerElement);
            fireEvent.mouseLeave(triggerElement);
            const tooltipContent = queryByText('Tooltip content');
            expect(tooltipContent).not.toBeInTheDocument();
        });
    });
});
