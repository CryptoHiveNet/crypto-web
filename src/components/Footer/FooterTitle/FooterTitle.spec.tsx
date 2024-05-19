import { fireEvent, render } from '@testing-library/react';

import FooterTitle from './FooterTitle';

const onClickMock = jest.fn();
const mockProps = {
    id: 'test-id',
    title: 'Footer Title',
    testId: 'test-footer-title',
    onClick: onClickMock,
    onMouseEnter: jest.fn(),
    onMouseLeave: jest.fn(),
    className: 'test-class',
};

describe('FooterTitle component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it('should render FooterTitle component with required props', () => {
        const { getByTestId } = render(<FooterTitle {...mockProps} />);
        expect(getByTestId('test-footer-title')).toBeInTheDocument();
    });

    it('should handle onClick event', () => {
        const { getByTestId } = render(<FooterTitle {...mockProps} />);
        fireEvent.click(getByTestId('test-footer-title'));
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should render title', () => {
        const { getByText } = render(<FooterTitle {...mockProps} />);
        expect(getByText('Footer Title')).toBeInTheDocument();
    });

    it('should apply className prop', () => {
        const { container } = render(<FooterTitle {...mockProps} />);
        expect(container.firstChild).toHaveClass('test-class');
    });

    it('should call onMouseEnter and onMouseLeave events', () => {
        const { getByTestId } = render(<FooterTitle {...mockProps} />);
        fireEvent.mouseEnter(getByTestId('test-footer-title'));
        fireEvent.mouseLeave(getByTestId('test-footer-title'));
        expect(mockProps.onMouseEnter).toHaveBeenCalled();
        expect(mockProps.onMouseLeave).toHaveBeenCalled();
    });
});
