import React from "react";

import "./input.style.css";
import type { InputProps } from "./input.type";

export default function Input({ type, ...rest }: InputProps) {
  return <input className="input" type={type} {...rest}></input>;
}
