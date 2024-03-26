'use client';
import React, { FC, SVGProps, useState } from 'react';
import { Alert as FlowbiteAlert } from 'flowbite-react';
import { HiEye, HiInformationCircle } from 'react-icons/hi';

export type iAlertProps = {
   id?: string;
   additionalContent?: JSX.Element;
   color?: string; // String for color name
   alertIcon?: FC<SVGProps<SVGSVGElement>>;
   children: JSX.Element;
} & Partial<Omit<HTMLDivElement, 'type' | 'value'>>; // HTMLDivElement is more suitable

const Alert: FC<iAlertProps> = ({
   id,
   additionalContent,
   color = 'warning',
   alertIcon = HiInformationCircle,
   children,
}) => {
   const [showAlert, setShowAlert] = useState(true);

   const onDismissFunc = () => setShowAlert(false);
   return (
      <>
         {showAlert && (
            <FlowbiteAlert
               id={id}
               additionalContent={additionalContent}
               color={color}
               icon={alertIcon}
               onDismiss={onDismissFunc}
               rounded
            >
               {children}
            </FlowbiteAlert>
         )}
      </>
   );
};

export default Alert;
