import { fireEvent, render, waitFor } from '@testing-library/react';

import CheckBox from './CheckBox';

describe('CheckBox component unit tests', () => {
    const onClickMock = jest.fn();
    const mockProps = {
        id: 'test-id',
        testId: 'test-checkbox',
        defaultChecked: true,
        onClick: onClickMock,
    };
    const { getByTestId } = render(<CheckBox {...mockProps} />);
    it('should render CheckBox component with required props', () => {
        waitFor(() => {
            expect(getByTestId('test-checkbox')).toBeInTheDocument();
        });
    });
    it('should handle onClick event', () => {
        waitFor(() => {
            fireEvent.click(getByTestId('test-checkbox'));
            expect(onClickMock).toHaveBeenCalled();
        });
    });
    it('should render with defaultChecked', () => {
        waitFor(() => {
            expect(getByTestId('test-checkbox')).toBeChecked();
        });
    });
});
