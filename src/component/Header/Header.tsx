import Button from "../Button/Button";
import Navlink from "../Navlink/Navlink";
import "./header.style.css";
import Download2 from "reicon-react/icons/Download2";

const NAVLINKS = ["Home", "About", "Skills", "Contact"];

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">{/* Logo */}</div>
      <div className="header__links">
        {NAVLINKS.map((link) => {
          return <Navlink id={link} title={link} />;
        })}
      </div>
      <div className="header__actions">
        <Button mode="Primary" title="Download CV" icon={<Download2 />} />
      </div>
    </header>
  );
}
