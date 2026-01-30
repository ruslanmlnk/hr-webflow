import ContactUs1MessageForm from "../ContactUs1MessageForm";
import ContactUs1SocialCards from "./ContactUs1SocialCards";
import InView from "../../shared/InView";

type Props = {
  animation?: "inview" | "none";
};

export default function ContactUs1MessageFormSection({ animation = "inview" }: Props) {
  const isInView = animation === "inview";

  return (
    <div className="section without-top-spacing" >
      <div className="base-container w-container">
        <div className="contacts-wrapper contacts-wrapper--top contacts-wrapper--form-wide contacts-wrapper--side-stretch">
         
            <div className="contacts-content-wrapper">
              <ContactUs1SocialCards />
            </div>
          <div className="contacts-form-wrapper" id="contact-form">
            
              <div>
                <h3 className="contacts-form-title">Send us a message</h3>
                <ContactUs1MessageForm />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
