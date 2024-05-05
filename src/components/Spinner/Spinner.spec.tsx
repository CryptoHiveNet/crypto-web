import { render, waitFor } from '@testing-library/react';

import Spinner from './Spinner';

const mockProps = {
    id: 'test-spinner',
    ariaLabel: 'Loading spinner',
    color: 'blue',
    size: 'medium',
    className: 'custom-spinner',
    testId: 'test-spinner',
};
describe('Spinner component unit tests', () => {
    it('should render Spinner component with required props', () => {
        const { getByTestId } = render(<Spinner {...mockProps} />);
        waitFor(() => {
            const spinnerComponent = getByTestId('test-spinner');
            expect(spinnerComponent).toBeInTheDocument();
            expect(spinnerComponent).toHaveAttribute(
                'aria-label',
                'Loading spinner',
            );
            expect(spinnerComponent).toHaveClass('custom-spinner');
        });
    });
});
