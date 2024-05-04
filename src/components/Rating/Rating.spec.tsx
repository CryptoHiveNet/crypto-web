import { render, waitFor } from '@testing-library/react';

import Rating from './Rating';

describe('Rating component unit tests', () => {
    const mockProps = {
        id: 'test-id',
        size: 'medium',
        testId: 'test-rating',
    };
    const { getByTestId } = render(<Rating {...mockProps} />);
    it('should render Rating component with required props', () => {
        waitFor(() => {
            expect(getByTestId('test-rating')).toBeInTheDocument();
        });
    });
});
