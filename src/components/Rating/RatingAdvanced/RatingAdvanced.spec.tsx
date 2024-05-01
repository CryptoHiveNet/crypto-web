import { render, waitFor } from '@testing-library/react';

import RatingAdvanced from './RatingAdvanced';

describe('RatingAdvanced component', () => {
  const mockProps = {
    id: 'test-id',
    percentFilled: 50,
    testId: 'test-rating-advanced',
  };
  const { getByTestId } = render(<RatingAdvanced {...mockProps} />);
  it('should render RatingAdvanced component with required props', () => {
    waitFor(() => {
      expect(getByTestId('test-rating-advanced')).toBeInTheDocument();
    });
  });
});
