'use client';
import React, { FC, SVGProps, useState } from 'react';
import { Alert as FlowbiteAlert } from 'flowbite-react';
import { HiInformationCircle } from 'react-icons/hi';

export type iAlertProps = {
  id?: string;
  additionalContent?: JSX.Element;
  color?: string; // String for color name
  alertIcon?: FC<SVGProps<SVGSVGElement>>;
  className?: string;
  children: JSX.Element | string;
};

const Alert = ({
  id,
  additionalContent,
  color = 'warning',
  alertIcon = HiInformationCircle,
  className,
  children,
  ...rest
}: iAlertProps) => {
  const [showAlert, setShowAlert] = useState(true);

  const onDismissFunc = () => setShowAlert(false);
  return (
    <>
      {showAlert && (
        <FlowbiteAlert
          id={id}
          className={className}
          additionalContent={additionalContent}
          color={color}
          icon={alertIcon}
          onDismiss={onDismissFunc}
          rounded
          {...rest}
        >
          {children}
        </FlowbiteAlert>
      )}
    </>
  );
};

export default Alert;
