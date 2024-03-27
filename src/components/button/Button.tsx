'use client';
import React, { FC, SVGProps, useState } from 'react';
import { Button as FlowbiteButton } from 'flowbite-react';
import { HiHashtag } from 'react-icons/hi';

export type iButtonProps = {
  id?: string;
  color?: string; // String for color name
  gradientMonochrome?: string;
  outline?: boolean;
  size?: string;
  label?: string;
  isProcessing?: boolean;
  processingSpinner?: JSX.Element;
  disabled?: boolean;
  children: JSX.Element | string;
  onClick?: () => void;
};

const Button = ({
  id,
  color,
  gradientMonochrome,
  outline = false,
  size,
  label,
  isProcessing = false,
  processingSpinner,
  disabled = false,
  children,
  onClick,
}: iButtonProps) => {
  return (
    <FlowbiteButton
      id={id}
      color={color}
      gradientMonochrome={gradientMonochrome}
      outline={outline}
      size={size}
      label={label}
      isProcessing={isProcessing}
      processingSpinner={processingSpinner}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </FlowbiteButton>
  );
};

export default Button;
