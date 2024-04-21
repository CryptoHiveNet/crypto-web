import { Button as FlowbiteButton } from 'flowbite-react';
import { forwardRef } from 'react';

import { iButtonProps } from '@/types/types/components/button';

const Button = forwardRef<any, iButtonProps>(
  (
    {
      id,
      color,
      gradientMonochrome,
      gradientDuoTone,
      outline = false,
      size,
      label,
      isProcessing = false,
      processingSpinner,
      pill = false,
      disabled = false,
      className,
      children,
      testId,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...rest
    }: iButtonProps,
    ref: React.Ref<any> | null,
  ) => {
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
        pill={pill}
        disabled={disabled}
        data-testid={testId}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
        {...rest}
      >
        {children}
      </FlowbiteButton>
    );
  },
);

export default Button;
