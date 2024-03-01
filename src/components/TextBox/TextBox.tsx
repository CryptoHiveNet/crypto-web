"use client";
import { TextInputType } from "@/types/components/textbox";
import { Label, TextInput } from "flowbite-react";
import React, { FC, SVGProps } from "react";

export type iTextBoxProps = {
  type: TextInputType;
  labelText: string;
  id?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  icon?: FC<SVGProps<SVGSVGElement>> | undefined;
  color?: string;
  helperText?: string;
} & Partial<Omit<HTMLInputElement, "type" | "value">>;

const TextBox = ({
  type,
  labelText,
  id,
  placeholder,
  required,
  value,
  icon,
  color,
  helperText,
  ...rest
}: iTextBoxProps) => {
  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor={id} value={labelText} />
      </div>
      <TextInput
        id={id}
        type={type}
        placeholder={placeholder}
        shadow
        color={color}
        helperText={helperText}
        value={value}
        icon={icon}
        required={required}
      />
    </div>
  );
};

export default TextBox;
