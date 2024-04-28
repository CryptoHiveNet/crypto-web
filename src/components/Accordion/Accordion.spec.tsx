import { iAccordionProps } from '@/types/types/components/accordion';
import { fireEvent, render, waitFor } from '@testing-library/react';

import Accordion from './Accordion'; // Adjust path if necessary

describe('Accordion component', () => {
  it('should render the FlowbiteAccordion component with passed props', () => {
    const props: iAccordionProps = {
      id: 'my-accordion',
      className: 'custom-class',
      testId: 'accordion-test',
      collapseAll: true,
    };
    const { getByTestId } = render(<Accordion {...props} />);

    const accordion = getByTestId('accordion-test');
    waitFor(() => {
      expect(accordion).toBeInTheDocument();
      expect(accordion).toHaveAttribute('id', 'my-accordion');
      expect(accordion).toHaveClass('custom-class');
    });
  });

  it('should pass down children to the FlowbiteAccordion', () => {
    const content = <p>This is some accordion content.</p>;
    const { getByText } = render(<Accordion>{content}</Accordion>);
    waitFor(() => {
      expect(getByText(content.props.children)).toBeInTheDocument();
    });
  });

  it('should call the onClick handler when clicked (if provided)', () => {
    const mockOnClick = jest.fn();
    const props: iAccordionProps = { onClick: mockOnClick };
    const { getByTestId } = render(<Accordion {...props} />);

    waitFor(() => {
      const accordion = getByTestId('accordion-test');
      fireEvent.click(accordion);

      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
  });

  const defaultProps = {
    id: 'accordion-id',
    collapseAll: true,
    className: 'custom-class',
    testId: 'accordion',
  };

  it('renders without crashing', () => {
    render(<Accordion {...defaultProps} />);
    waitFor(() => {
      expect(screen.getByTestId('accordion')).toBeInTheDocument();
    });
  });

  it('applies className correctly', () => {
    render(<Accordion {...defaultProps} />);
    waitFor(() => {
      expect(screen.getByTestId('accordion')).toHaveClass('custom-class');
    });
  });

  it('calls onMouseEnter handler when mouse enters', () => {
    const handleMouseEnter = jest.fn();
    render(
      <Accordion
        {...defaultProps}
        onMouseEnter={handleMouseEnter}
      />,
    );
    waitFor(() => {
      fireEvent.mouseEnter(screen.getByTestId('accordion'));
      expect(handleMouseEnter).toHaveBeenCalled();
    });
  });

  it('calls onMouseLeave handler when mouse leaves', () => {
    const handleMouseLeave = jest.fn();
    render(
      <Accordion
        {...defaultProps}
        onMouseLeave={handleMouseLeave}
      />,
    );
    waitFor(() => {
      fireEvent.mouseLeave(screen.getByTestId('accordion'));
      expect(handleMouseLeave).toHaveBeenCalled();
    });
  });
  const props: iAccordionProps = {
    id: 'accordion-id',
    collapseAll: false,
    className: 'accordion-class',
    children: <div>Hello World!</div>,
    testId: 'accordion-test-id',
    onClick: jest.fn(),
    onMouseEnter: jest.fn(),
    onMouseLeave: jest.fn(),
  };
});
