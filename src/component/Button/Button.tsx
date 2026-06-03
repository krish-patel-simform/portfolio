import type { ButtonProps } from "./button.type";
import "./button.style.css";

export default function Button({
  mode,
  title,
  icon: Icon,
  ...rest
}: ButtonProps) {
  return (
    <button className={`btn btn-${mode}`} {...rest}>
      {title}
      {Icon}
    </button>
  );
}
