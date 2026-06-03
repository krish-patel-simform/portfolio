import type { NavlinkProps } from "./navlink.type";
import "./navlink.style.css";

export default function Navlink({ id, title }: NavlinkProps) {
  return (
    <a href={`#${id}`} className="navlink">
      {title}
    </a>
  );
}
