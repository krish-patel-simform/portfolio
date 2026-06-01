import "./contact.style.css";
import "./contact.style.css";
import type { ContactInfoCardProps } from "./contact.type";

import Mailbox from "reicon-react/icons/Mailbox";
import Phone from "reicon-react/icons/Phone";
import LocationTick from "reicon-react/icons/LocationTick";
import Send from "reicon-react/icons/Send";

import Input from "../Input/Input";
import Button from "../Button/Button";
import TextArea from "../Input/TextArea";

const ContactInfoCard = ({ Icon, content, title }: ContactInfoCardProps) => {
  return (
    <div className="contact-info-card-container">
      <section className="contact-info-card__logo">
        {<Icon fill="#6B6DCE" />}
      </section>
      <section className="contact-info-card__content">
        <p>{title}</p>
        <p>{content}</p>
      </section>
    </div>
  );
};

const CONTACT_DATA = [
  {
    Icon: Mailbox,
    title: "Email",
    content: "knp839@gamil.com",
  },
  {
    Icon: Phone,
    title: "Phone",
    content: "+91 7096098839",
  },
  {
    Icon: LocationTick,
    title: "Location",
    content: "India",
  },
];

export default function Contact() {
  return (
    <div className="contact-container">
      <section className="conatct__left">
        <div className="conatct__left-content">
          <p className="highlight-text">CONTACT</p>
          <p className="heading">Let's work together</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            facere nesciunt temporibus qui suscipit velit eveniet ratione
            dolorem, quasi ab facilis aliquid non, esse in magnam at minus
            officia asperiores?
          </p>
        </div>

        <div className="conatct__left-info">
          {CONTACT_DATA.map((info, index) => {
            return (
              <ContactInfoCard
                key={index}
                Icon={info.Icon}
                content={info.content}
                title={info.title}
              />
            );
          })}
        </div>
      </section>
      <section className="contact__right">
        <form className="contact__right-form">
          <div className="contact__right-form-input">
            <Input type="text" name="text" placeholder="Your Name" />
            <Input type="email" name="email" placeholder="Your Email" />
            <TextArea rows={5} placeholder="Message" />
          </div>
          <div className="contact__right-form-btn">
            <Button
              type="button"
              mode="Primary"
              title="Send Message"
              icon={<Send />}
            />
          </div>
        </form>
      </section>
    </div>
  );
}
