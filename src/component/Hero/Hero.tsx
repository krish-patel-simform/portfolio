import "./hero.style.css";
import Button from "../Button/Button";
import ArrowRight from "reicon-react/icons/ArrowRight";
import MyImage from "../../assets/my.png";
import { useData } from "../../hooks/useData";
import { goToId } from "../../utils";

export default function Hero() {
  const data = useData();

  function handleProjectsBtn() {
    goToId("project");
  }

  function handleContactBtn() {
    goToId("contact");
  }

  return (
    <div className="hero" id={"hero"}>
      <section>{/* phoro with some bg */}</section>

      <section className="hero__left">
        <img src={MyImage} height={"600px"}></img>
      </section>

      <section className="hero__right">
        <p>hey, I'am</p>
        <div className="hero__heading">
          <p>{data.firstName}</p>
          <p>{data.lastName}</p>
        </div>
        <p className="highlight-text">{data.role}</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          libero ipsam deleniti, perspiciatis voluptates quisquam iste
          perferendis suscipit laborum tempore blanditiis aliquid. Tempora
          praesentium quidem exercitationem ad, esse dolorum eaque?
        </p>
        <div className="hero__actions">
          <Button
            mode="Primary"
            title="View Projects"
            onClick={handleProjectsBtn}
          />
          <Button
            mode="Secondary"
            title="Contact Me"
            icon={<ArrowRight />}
            onClick={handleContactBtn}
          />
        </div>
        <div>{/* Icons */}</div>
      </section>
    </div>
  );
}
