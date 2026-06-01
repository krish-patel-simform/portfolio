import "./contact.style.css";
import "./contact.style.css";
import type { ContactInfoCardProps } from "./contact.type";

import Mailbox from "reicon-react/icons/Mailbox";
import Phone from "reicon-react/icons/Phone";
import LocationTick from "reicon-react/icons/LocationTick";

const ContactInfoCard = ({ Icon, content, title }: ContactInfoCardProps) => {
  return (
    <div className="contact-info-card-container">
      <section>
        {/* icon */}
        {Icon}
      </section>
      <section>
        <p>{title}</p>
        <p>{content}</p>
      </section>
    </div>
  );
};

const CONTACT_DATA = [
  {
    Icon: <Mailbox />,
    title: "Email",
    content: "knp839@gamil.com",
  },
  {
    Icon: <Phone />,
    title: "Phone",
    content: "+91 7096098839",
  },
  {
    Icon: <LocationTick />,
    title: "Location",
    content: "India",
  },
];

export default function Contact() {
  return (
    <div className="contact-container">
      <section className="conatct__left">
        <div>
          <p className="highlight-text">CONTACT</p>
          <p>Let's work together</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            facere nesciunt temporibus qui suscipit velit eveniet ratione
            dolorem, quasi ab facilis aliquid non, esse in magnam at minus
            officia asperiores?
          </p>
        </div>

        <div>
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
      <section className="contact__right"></section>
    </div>
  );
}
