import { render, waitFor } from '@testing-library/react';

import Progress from './Progress';

describe('Progress component unit tests', () => {
    const mockProps = {
        id: 'test-id',
        progress: 50,
        testId: 'test-progress',
    };
    const { getByTestId } = render(<Progress {...mockProps} />);
    it('should render Progress component with required props', () => {
        waitFor(() => {
            expect(getByTestId('test-progress')).toBeInTheDocument();
        });
    });
});
