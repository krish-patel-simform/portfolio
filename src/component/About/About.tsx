import Button from "../Button/Button";
import "./about.style.css";
import ArrowRight from "reicon-react/icons/ArrowRight";

export default function About() {
  return (
    <div className="about">
      <section className="about__left">
        <p className="lightlight-text">ABOUT ME</p>
        <p>Get to know me</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae natus
          provident obcaecati, amet doloremque recusandae tempora nemo quasi
          nostrum harum sapiente dolorum adipisci debitis quis esse quod
          consequuntur numquam aliquid.
        </p>
        <div>
          <Button mode="Secondary" title="Read more" icon={<ArrowRight />} />
        </div>
      </section>
      <section className="about__right"></section>
    </div>
  );
}
