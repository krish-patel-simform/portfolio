import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type InputType = "text" | "email";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: InputType;
  name: string;
}

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string;
  rows: number;
}
