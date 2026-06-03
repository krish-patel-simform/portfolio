import Button from "../Button/Button";
import Navlink from "../Navlink/Navlink";
import "./header.style.css";
import Download2 from "reicon-react/icons/Download2";

const NAVLINKS = ["Home", "About", "Skills", "Contact"];

export default function Header() {
  function handleDownloadCV() {
    console.log("btn clicked");
    const link = document.createElement("a");
    link.href = "/kp_resume_simple.pdf"; // file stored in public folder
    link.setAttribute("download", "Krish-CV.pdf"); // custom filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <header className="header">
      <div className="header__logo">
        <img
          className="header__logo-image"
          src="./images/logo.png"
          alt="logo"
        />
      </div>
      <div className="header__links">
        {NAVLINKS.map((link, index) => {
          return <Navlink key={index} id={link.toLowerCase()} title={link} />;
        })}
      </div>
      <div className="header__actions">
        <Button
          mode="Primary"
          title="Download CV"
          onClick={handleDownloadCV}
          icon={<Download2 />}
        />
      </div>
    </header>
  );
}
