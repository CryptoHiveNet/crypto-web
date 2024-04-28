import { Alert as FlowbiteAlert } from 'flowbite-react';
import React, { forwardRef, useEffect, useState } from 'react';
import { HiInformationCircle } from 'react-icons/hi';

import { iAlertProps } from '@/types/types/components/alert';

const Alert = forwardRef<any, iAlertProps>(
  (
    {
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
    }: iAlertProps,
    ref: React.Ref<any> | null,
  ) => {
    const [showAlert, setShowAlert] = useState(true);
    const [isMounted, setIsMounted] = useState(true);
    const transitionDurations = 300;

    useEffect(() => {
      let timeoutId: NodeJS.Timeout;

      if (dismissAfter) {
        timeoutId = setTimeout(() => {
          setShowAlert(false);
          if (onDismiss) {
            if (typeof onDismiss === 'function') {
              onDismiss();
            } else {
              onDismiss;
            }
          }
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
      if (onDismiss) {
        if (typeof onDismiss === 'function') {
          onDismiss();
        } else {
          onDismiss;
        }
      }
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
