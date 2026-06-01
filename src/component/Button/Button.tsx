import type { ButtonProps } from "./button.type";
import "./button.style.css";

export default function Button({ mode, title, icon: Icon }: ButtonProps) {
  return (
    <button className={`btn btn-${mode}`}>
      {title}
      {Icon}
    </button>
  );
}
