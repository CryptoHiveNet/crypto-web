import { render, waitFor } from '@testing-library/react';

import Datepicker from './Datepicker';

describe('Datepicker component unit tests', () => {
    const labelTodayButton = 'Today';
    const labelClearButton = 'Clear';
    const { getByText } = render(
        <Datepicker
            labelTodayButton={labelTodayButton}
            labelClearButton={labelClearButton}
        />,
    );

    it('renders a datepicker with the provided label for today button', () => {
        waitFor(() => {
            expect(getByText(labelTodayButton)).toBeInTheDocument();
        });
    });

    it('renders a datepicker with the provided label for clear button', () => {
        waitFor(() => {
            expect(getByText(labelClearButton)).toBeInTheDocument();
        });
    });
});
