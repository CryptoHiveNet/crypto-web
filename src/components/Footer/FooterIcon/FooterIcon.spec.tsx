import { fireEvent, render, waitFor } from '@testing-library/react';

import FooterIcon from './FooterIcon';

describe('FooterIcon component unit tests', () => {
    const onClickMock = jest.fn();
    const mockProps = {
        id: 'test-id',
        href: '#home',
        icon: 'home',
        testId: 'test-footer-icon',
        onClick: onClickMock,
    };
    const { getByTestId } = render(<FooterIcon {...mockProps} />);
    it('should render FooterIcon component with required props', () => {
        waitFor(() => {
            expect(getByTestId('test-footer-icon')).toBeInTheDocument();
        });
    });
    it('should handle onClick event', () => {
        waitFor(() => {
            fireEvent.click(getByTestId('test-footer-icon'));
            expect(onClickMock).toHaveBeenCalled();
        });
    });
    it('should render icon', () => {
        waitFor(() => {
            expect(getByTestId('test-footer-icon')).toHaveAttribute(
                'icon',
                'home',
            );
        });
    });
});
