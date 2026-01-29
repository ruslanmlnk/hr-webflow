import ContactUs1MessageForm from "../ContactUs1MessageForm";
import ContactUs1SocialCards from "./ContactUs1SocialCards";
import InView from "../../shared/InView";

type Props = {
  animation?: "inview" | "none";
};

export default function ContactUs1MessageFormSection({ animation = "inview" }: Props) {
  const isInView = animation === "inview";

  return (
    <div className="section without-top-spacing">
      <div className="base-container w-container">
        <div className="contacts-wrapper contacts-wrapper--top contacts-wrapper--form-wide contacts-wrapper--side-stretch">
          {isInView ? (
            <InView className="contacts-content-wrapper inview-fade-up inview-delay-0">
              <ContactUs1SocialCards />
            </InView>
          ) : (
            <div className="contacts-content-wrapper">
              <ContactUs1SocialCards />
            </div>
          )}
          {isInView ? (
            <InView className="contacts-form-wrapper inview-fade-up inview-delay-1">
              <h3 className="contacts-form-title">Send us a message</h3>
              <ContactUs1MessageForm />
            </InView>
          ) : (
            <div className="contacts-form-wrapper">
              <h3 className="contacts-form-title">Send us a message</h3>
              <ContactUs1MessageForm />
            </div>
          )}
        </div>
      </div>
      <div id="contact-form"></div>
    </div>
  );
}
