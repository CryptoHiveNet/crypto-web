import '@testing-library/jest-dom';

import { HiEye } from 'react-icons/hi';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import Alert from './Alert';

const onDismissMock = jest.fn();
describe('Alert component unit tests', () => {
  it('should render the alert with default props and message', () => {
    render(<Alert testId='my-alert'>This is an alert message.</Alert>);
    const alertComponent = screen.getByTestId('my-alert');
    expect(alertComponent).toHaveTextContent('This is an alert message.');
  });
  it('renders with the provided testId prop', () => {
    const testId = 'test-alert';
    const { getByTestId } = render(<Alert testId={testId}>Test Alert</Alert>);
    const alertElement = getByTestId(testId);
    expect(alertElement).toBeInTheDocument();
  });
  it('should render the alert with custom props', () => {
    const customId = 'my-alert';
    const customColor = 'warning';
    const customIcon = HiEye;

    render(
      <Alert
        id={customId}
        color={customColor}
        icon={customIcon}
      >
        Custom alert content.
      </Alert>,
    );
    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveAttribute('id', customId);
    expect(alert).toHaveClass(
      'text-yellow-700 bg-yellow-100 border-yellow-500',
    );
    expect(screen.getByTestId('flowbite-alert-icon')).toBeInTheDocument();
  });

  it('should render the close button and close the alert when clicked', async () => {
    render(<Alert testId='my-alert'>This is an alert message.</Alert>);
    const alertComponent = screen.getByTestId('my-alert');
    const closeButton = alertComponent.querySelector(
      'button[aria-label="Dismiss"]',
    );

    expect(alertComponent).toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();

    if (!closeButton) {
      throw new Error('Close button not found');
    }

    fireEvent.click(closeButton);

    await waitFor(() => {
      expect(alertComponent).not.toBeInTheDocument();
    });
  });

  it('renders additional content correctly', () => {
    const AdditionalContent = () => <div>Additional Content</div>;
    render(<Alert additionalContent={<AdditionalContent />}>Hello</Alert>);
    expect(screen.getByText('Additional Content')).toBeInTheDocument();
  });

  it('calls onDismiss function when dismiss button is clicked', async () => {
    const { getByLabelText } = render(
      <Alert
        onDismiss={onDismissMock}
        testId='alert-dismiss-button'
      >
        Hello
      </Alert>,
    );
    const closeButton = getByLabelText('Dismiss');
    fireEvent.click(closeButton);
    await waitFor(() => {
      expect(onDismissMock).toHaveBeenCalledTimes(1);
    });
  });

  it('should call onClick when clicked', async () => {
    const onClickMock = jest.fn();
    const { getByTestId } = render(
      <Alert
        testId='my-alert'
        onClick={onClickMock}
      >
        Clickable Alert
      </Alert>,
    );
    const alertComponent = getByTestId('my-alert');
    fireEvent.click(alertComponent);
    await waitFor(() => {
      expect(onClickMock).toHaveBeenCalled();
    });
  });

  it('should call onMouseEnter when mouse enters', async () => {
    const onMouseEnterMock = jest.fn();
    const { getByTestId } = render(
      <Alert
        testId='my-alert'
        onMouseEnter={onMouseEnterMock}
      >
        Hoverable Alert
      </Alert>,
    );
    const alertComponent = getByTestId('my-alert');
    fireEvent.mouseEnter(alertComponent);
    await waitFor(() => {
      expect(onMouseEnterMock).toHaveBeenCalled();
    });
  });

  it('should call onMouseLeave when mouse leaves', async () => {
    const onMouseLeaveMock = jest.fn();
    const { getByTestId } = render(
      <Alert
        testId='my-alert'
        onMouseLeave={onMouseLeaveMock}
      >
        Hoverable Alert
      </Alert>,
    );
    const alertComponent = getByTestId('my-alert');
    fireEvent.mouseLeave(alertComponent);
    await waitFor(() => {
      expect(onMouseLeaveMock).toHaveBeenCalled();
    });
  });
});
