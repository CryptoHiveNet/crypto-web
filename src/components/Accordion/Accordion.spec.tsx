import { AccordionProps } from '@/types/shared/types/components/accordion';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import Accordion from './Accordion';
import AccordionItem from './AccordionItem/AccordionItem';

describe('Accordion component unit tests', () => {
  it('should render the FlowbiteAccordion component with passed props', () => {
    const props: AccordionProps = {
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
    const content = (
      <AccordionItem
        title='title'
        content='This is some accordion content.'
      />
    );
    const { getByText } = render(<Accordion>{content}</Accordion>);
    waitFor(() => {
      expect(getByText(content.props.children)).toBeInTheDocument();
    });
  });

  it('should call the onClick handler when user clicked on any where of the Accordion component container', () => {
    const mockOnClick = jest.fn();
    const props: AccordionProps = { onClick: mockOnClick };
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
});
