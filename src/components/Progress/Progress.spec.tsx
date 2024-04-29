import { render, waitFor } from '@testing-library/react';

import Progress from './Progress';

describe('Progress component', () => {
  it('should render Progress component with required props', () => {
    const mockProps = {
      id: 'test-id',
      progress: 50,
      testId: 'test-progress',
    };
    const { getByTestId } = render(<Progress {...mockProps} />);
    waitFor(() => {
      expect(getByTestId('test-progress')).toBeInTheDocument();
    });
  });
});
