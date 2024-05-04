import { fireEvent, render, waitFor } from '@testing-library/react';

import Popover from './Popover';

describe('Popover component unit tests', () => {
    const mockProps = {
        id: 'test-popover',
        ariaLabelledby: 'popover-title',
        content: 'Popover content',
        trigger: 'click',
        open: false,
        onOpenChange: jest.fn(),
        placement: 'bottom',
        arrow: true,
        className: 'custom-popover',
        testId: 'test-popover',
    };
    const { getByTestId, getByText } = render(
        <Popover {...mockProps}>
            <button
                id="popover-trigger"
                aria-labelledby="popover-title"
            >
                Trigger
            </button>
        </Popover>,
    );
    it('should render Popover component with required props', () => {
        waitFor(() => {
            const popoverComponent = getByTestId('test-popover');
            expect(popoverComponent).toBeInTheDocument();
            expect(popoverComponent).toHaveClass('custom-popover');
        });
    });
    it('should toggle open state when trigger element is clicked', () => {
        waitFor(() => {
            fireEvent.click(getByText('Trigger'));
            expect(mockProps.onOpenChange).toHaveBeenCalledTimes(1);
        });
    });
});
