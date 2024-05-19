import { fireEvent, render, screen } from '@testing-library/react';

import FooterLinkGroup from './FooterLinkGroup';

const onClickMock = jest.fn();
const onMouseEnter = jest.fn();
const onMouseLeave = jest.fn();
const mockProps = {
    id: 'test-id',
    col: 3,
    testId: 'test-footer-link-group',
    onClick: onClickMock,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    className: 'test-class',
};
const mockChildren = (
    <>
        <div>Group 1</div>
        <div>Group 2</div>
    </>
);
describe('FooterLinkGroup component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it('should render FooterLinkGroup component with required props', () => {
        render(<FooterLinkGroup {...mockProps} />);
        expect(
            screen.getByTestId('test-footer-link-group'),
        ).toBeInTheDocument();
    });

    it('should handle onClick event', () => {
        render(<FooterLinkGroup {...mockProps} />);
        fireEvent.click(screen.getByTestId('test-footer-link-group'));
        expect(onClickMock).toHaveBeenCalled();
    });

    it('should render children', () => {
        render(
            <FooterLinkGroup {...mockProps}>{mockChildren}</FooterLinkGroup>,
        );
        expect(screen.getByText('Group 1')).toBeInTheDocument();
        expect(screen.getByText('Group 2')).toBeInTheDocument();
    });

    it('should apply className prop', () => {
        render(<FooterLinkGroup {...mockProps} />);
        expect(screen.getByTestId('test-footer-link-group')).toHaveClass(
            'test-class',
        );
    });

    it('should call onMouseEnter and onMouseLeave events', () => {
        render(<FooterLinkGroup {...mockProps} />);
        fireEvent.mouseEnter(screen.getByTestId('test-footer-link-group'));
        fireEvent.mouseLeave(screen.getByTestId('test-footer-link-group'));
        expect(mockProps.onMouseEnter).toHaveBeenCalled();
        expect(mockProps.onMouseLeave).toHaveBeenCalled();
    });
});
