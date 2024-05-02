'use client';
import { Alert as FlowbiteAlert } from 'flowbite-react';
import React, { forwardRef, useEffect, useState } from 'react';
import { HiInformationCircle } from 'react-icons/hi';

import { AlertProps } from '@/types/shared/types/components/alert';

// eslint-disable-next-line react/display-name
const Alert = forwardRef<any, AlertProps>(
  (
    {
      id,
      additionalContent,
      role = 'blue',
      icon = HiInformationCircle,
      transitionDurations = 300,
      className,
      children,
      testId,
      onClick,
      onDismiss,
      onMouseEnter,
      onMouseLeave,
      dismissAfter,
      ...rest
    }: AlertProps,
    ref: React.Ref<any> | null,
  ) => {
    const [showAlert, setShowAlert] = useState(true);
    const [isMounted, setIsMounted] = useState(true);

    useEffect(() => {
      let timeoutId: number;

      if (dismissAfter) {
        timeoutId = window.setTimeout(() => {
          handleDismiss();
        }, dismissAfter);
      }

      return () => {
        if (timeoutId) window.clearTimeout(timeoutId);
      };
    }, [dismissAfter, id, onDismiss]);

    const handleDismiss = () => {
      setShowAlert(false);
      if (!onDismiss) return;
      else if (onDismiss && typeof onDismiss === 'function') onDismiss();
      else onDismiss;
      setTimeout(() => {
        setIsMounted(false);
      }, transitionDurations);
    };

    return (
      isMounted && (
        <div
          className={`transition-all duration-${transitionDurations} ease ${showAlert ? 'max-h-40 opacity-1' : 'max-h-0 opacity-0'}`}
        >
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
            ref={ref}
            {...rest}
          >
            {children}
          </FlowbiteAlert>
        </div>
      )
    );
  },
);

export default Alert;
