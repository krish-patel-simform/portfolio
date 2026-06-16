import "./input.style.css";
import type { TextAreaProps } from "./input.type";

export default function TextArea({ rows, ...rest }: TextAreaProps) {
  return <textarea className="input" rows={rows} {...rest}></textarea>;
}
