import "./contact.style.css";
import "./contact.style.css";
import Mailbox from "reicon-react/icons/Mailbox";
import Phone from "reicon-react/icons/Phone";
import LocationTick from "reicon-react/icons/LocationTick";
import Send from "reicon-react/icons/Send";

import Input from "../Input/Input";
import Button from "../Button/Button";
import TextArea from "../Input/TextArea";
import { useForm, ValidationError } from "@formspree/react";
import { useData } from "../../hooks/useData";
import { ContactInfoCard } from "../Card/ContactInfoCard";

export default function Contact() {
  const [state, handleSubmit] = useForm("mrednyod");
  const data = useData();
  console.log("bnfdji");

  const CONTACT_DATA = [
    {
      Icon: Mailbox,
      title: "Email",
      content: data.email,
    },
    {
      Icon: Phone,
      title: "Phone",
      content: data.phone,
    },
    {
      Icon: LocationTick,
      title: "Location",
      content: data.location,
    },
  ];

  return (
    <div className="contact-container" id={"contact"}>
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
        <form action={handleSubmit} className="contact__right-form">
          <div className="contact__right-form-input">
            <Input type="text" name="text" placeholder="Your Name" />
            <ValidationError
              prefix="Name"
              field="message"
              errors={state.errors}
            />
            <Input type="email" name="email" placeholder="Your Email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <TextArea rows={5} placeholder="Message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
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
        {state.succeeded ? <h3>Thank's for submitting</h3> : null}
      </section>
    </div>
  );
}
