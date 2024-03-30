import React from 'react';
import { Button as FlowbiteButton } from 'flowbite-react';

export type iButtonProps = {
  id?: string;
  color?: string;
  gradientMonochrome?: string;
  gradientDuoTone?: string;
  outline?: boolean;
  size?: string;
  label?: string;
  isProcessing?: boolean;
  processingSpinner?: JSX.Element;
  disabled?: boolean;
  className?: string;
  children: JSX.Element | string; // Adjusted to accept JSX.Element
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

const Button = ({
  id,
  color,
  gradientMonochrome,
  gradientDuoTone,
  outline = false,
  size,
  label,
  isProcessing = false,
  processingSpinner,
  disabled = false,
  className,
  children,
  testId,
  onClick,
  onMouseEnter,
  onMouseLeave,
  ...rest
}: iButtonProps) => {
  return (
    <FlowbiteButton
      id={id}
      className={className}
      color={color}
      gradientMonochrome={gradientMonochrome}
      gradientDuoTone={gradientDuoTone}
      outline={outline}
      size={size}
      label={label}
      isProcessing={isProcessing}
      processingSpinner={processingSpinner}
      disabled={disabled}
      data-testid={testId}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...rest}
    >
      {children}
    </FlowbiteButton>
  );
};

export default Button;
