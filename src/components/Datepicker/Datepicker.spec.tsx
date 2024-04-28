import { render, waitFor } from '@testing-library/react';

import Datepicker from './Datepicker';

describe('Datepicker', () => {
  it('renders a datepicker with the provided label for today button', () => {
    // Arrange
    const labelTodayButton = 'Today';

    // Act
    const { getByText } = render(
      <Datepicker labelTodayButton={labelTodayButton} />,
    );

    // Assert
    waitFor(() => {
      expect(getByText(labelTodayButton)).toBeInTheDocument();
    });
  });

  it('renders a datepicker with the provided label for clear button', () => {
    // Arrange
    const labelClearButton = 'Clear';

    // Act
    const { getByText } = render(
      <Datepicker labelClearButton={labelClearButton} />,
    );

    // Assert
    waitFor(() => {
      expect(getByText(labelClearButton)).toBeInTheDocument();
    });
  });
});
