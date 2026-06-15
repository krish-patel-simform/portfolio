import type { ContactInfoCardProps } from "./card.type";

export const ContactInfoCard = ({
  Icon,
  content,
  title,
}: ContactInfoCardProps) => {
  return (
    <div className="contact-info-card-container">
      <section className="contact-info-card__logo">
        {<Icon color="#6B6DCE" />}
      </section>
      <section className="contact-info-card__content">
        <p>{title}</p>
        <p>{content}</p>
      </section>
    </div>
  );
};
