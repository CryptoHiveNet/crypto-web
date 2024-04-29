import { render, waitFor } from '@testing-library/react';

import Datepicker from './Datepicker';

describe('Datepicker', () => {
  it('renders a datepicker with the provided label for today button', () => {
    const labelTodayButton = 'Today';
    const { getByText } = render(
      <Datepicker labelTodayButton={labelTodayButton} />,
    );
    waitFor(() => {
      expect(getByText(labelTodayButton)).toBeInTheDocument();
    });
  });

  it('renders a datepicker with the provided label for clear button', () => {
    const labelClearButton = 'Clear';
    const { getByText } = render(
      <Datepicker labelClearButton={labelClearButton} />,
    );
    waitFor(() => {
      expect(getByText(labelClearButton)).toBeInTheDocument();
    });
  });
});
