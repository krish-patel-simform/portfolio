import Button from "../Button/Button";
import "./about.style.css";
import ArrowRight from "reicon-react/icons/ArrowRight";

import MoneyBag from "reicon-react/icons/MoneyBag";
import Location2 from "reicon-react/icons/Location";
import Laptop3 from "reicon-react/icons/Laptop3";
const ABOUT_INFO = [
  {
    title: "Experience",
    content: "1+ Years",
    Icon: MoneyBag,
    bgColor: "#A7A8E5",
    iconFillColor: "#6B6DCE",
  },
  {
    title: "Projects",
    content: "10+ Completed",
    Icon: Laptop3,
    bgColor: "#BDEACF",
    iconFillColor: "#5CC189",
  },
  {
    title: "Location",
    content: "India",
    Icon: Location2,
    bgColor: "#FDE7E8",
    iconFillColor: "#E85560",
  },
];

export default function About() {
  return (
    <div className="about">
      <section className="about__left">
        <p className="highlight-text">ABOUT ME</p>
        <p className="heading">Get to know me</p>
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
      <section className="about__right">
        <div className="about__right-info">
          {ABOUT_INFO.map((info, index) => {
            return (
              <div className="about__right-card-container">
                <div key={index} className="about__right-card">
                  <div>
                    <info.Icon color={info.iconFillColor} size={"1.9rem"} />
                  </div>
                  <div className="about__right-card__content">
                    <p>{info.title}</p>
                    <p>{info.content}</p>
                  </div>
                </div>
                {index < ABOUT_INFO.length - 1 ? <hr /> : null}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
