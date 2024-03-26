"use client";
import React, { FC, SVGProps } from "react";
import { Alert } from "flowbite-react";
import { HiEye, HiInformationCircle } from "react-icons/hi";
import { IconType } from "react-icons";

export type iAlertBoxProps = {
  id?: string;
  additionalContent?: JSX.Element;
  color?: string; // String for color name
  alertIcon?: FC<SVGProps<SVGSVGElement>>;
  children: JSX.Element;
} & Partial<Omit<HTMLDivElement, "type" | "value">>; // HTMLDivElement is more suitable

const AlertBox: FC<iAlertBoxProps> = ({
  id,
  additionalContent,
  color = "warning",
  alertIcon=HiInformationCircle,
  children
}) => {
  const onDismissFunc = () => console.log("Alert Dismissed!")
  return (
    <Alert
      id={id}
      additionalContent={additionalContent}
      color={color}
      icon={alertIcon}
      onDismiss={onDismissFunc}
      rounded
    >
      {children}
    </Alert>
  );
};

export default AlertBox;
