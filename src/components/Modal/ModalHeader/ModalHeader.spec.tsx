import { render, waitFor } from '@testing-library/react';

import Modal from '../Modal';
import ModalHeader from './ModalHeader';

describe('ModalHeader component', () => {
  it('should render ModalHeader component with required props', () => {
    const mockProps = {
      id: 'test-modal-header',
      className: 'custom-modal-header',
      children: 'Test Modal Header',
      testId: 'test-modal-header',
    };
    const { getByTestId, getByText } = render(
      <Modal>
        <ModalHeader {...mockProps} />
      </Modal>,
    );
    waitFor(() => {
      const modalHeaderComponent = getByTestId('test-modal-header');
      expect(modalHeaderComponent).toBeInTheDocument();
      expect(modalHeaderComponent).toHaveClass('custom-modal-header');
      expect(getByText('Test Modal Header')).toBeInTheDocument();
    });
  });
});
