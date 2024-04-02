'use client';
import React, { FC, SVGProps, useState, useEffect } from 'react';
import { Alert as FlowbiteAlert } from 'flowbite-react';
import { HiInformationCircle } from 'react-icons/hi';

export type iAlertProps = {
  id?: string;
  additionalContent?: JSX.Element;
  role?: string;
  icon?: FC<SVGProps<SVGSVGElement>>;
  className?: string;
  children: JSX.Element | string;
  testId?: string;
  onClick?: () => void;
  onDismiss?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  dismissAfter?: number; // Optional time in milliseconds to automatically dismiss the alert
};

const Alert = ({
  id,
  additionalContent,
  role = 'blue',
  icon = HiInformationCircle,
  className,
  children,
  testId,
  onClick,
  onDismiss,
  onMouseEnter,
  onMouseLeave,
  dismissAfter,
  ...rest
}: iAlertProps) => {
  const [showAlert, setShowAlert] = useState(true);
  const [isMounted, setIsMounted] = useState(true);
  const transitionDurations = 300;
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (dismissAfter) {
      timeoutId = setTimeout(() => {
        setShowAlert(false);
        if (onDismiss) onDismiss();
        setTimeout(() => {
          setIsMounted(false);
        }, transitionDurations);
      }, dismissAfter);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [dismissAfter, id, onDismiss]);

  const handleDismiss = () => {
    setShowAlert(false);
    if (onDismiss) onDismiss();
    setTimeout(() => {
      setIsMounted(false);
    }, transitionDurations);
  };

  return (
    isMounted && (
      <div
        className={`overflow-hidden ${showAlert ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0 pointer-events-none'}`}
        style={{
          animation: `${showAlert ? 'showAlert' : 'hideAlert'} ${transitionDurations / 1000}s ease forwards`,
        }}
      >
        <style>{`
        @keyframes showAlert {
          from {
            max-height: 0;
            opacity: 0;
          }
          to {
            max-height: 1000px; /* Adjust this value as needed */
            opacity: 1;
          }
        }

        @keyframes hideAlert {
          from {
            max-height: 1000px; /* Adjust this value as needed */
            opacity: 1;
          }
          to {
            max-height: 0;
            opacity: 0;
          }
        }
      `}</style>
        <FlowbiteAlert
          id={id}
          className={className}
          additionalContent={additionalContent}
          color={role}
          icon={icon}
          rounded
          data-testid={testId}
          onClick={onClick}
          onDismiss={handleDismiss}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          {...rest}
        >
          {children}
        </FlowbiteAlert>
      </div>
    )
  );
};

export default Alert;
