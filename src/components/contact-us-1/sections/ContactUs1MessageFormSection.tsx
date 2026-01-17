import { webflowStyles } from "../../home-2/styles";
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
        <div className="contacts-wrapper contacts-wrapper--top contacts-wrapper--form-wide">
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
              <div className="form-block-contacts w-form">
                <form
                  id="email-form"
                  name="email-form"
                  data-name="Email Form"
                  method="get"
                  className="form-contacts center"
                  data-wf-page-id="64943f2a36915879aa1daecb"
                  data-wf-element-id="ea41af14-8b87-8ae8-ae5d-f8373dc8aafa"
                >
                  <input className="contacts-input w-input" maxLength={256} name="name" data-name="Name" placeholder="Your Name" type="text" id="name" required />
                  <div className="contacts-input-row">
                    <input className="contacts-input w-input" maxLength={256} name="telegram" data-name="Telegram" placeholder="Your Telegram" type="text" id="telegram" />
                    <input className="contacts-input w-input" maxLength={256} name="whatsapp" data-name="WhatsApp" placeholder="Your WhatsApp" type="text" id="whatsapp" />
                  </div>
                  <textarea placeholder="Message" maxLength={5000} id="message" name="message" data-name="Message" required className="contacts-textarea w-input contact-message-textarea" />
                  <input type="submit" data-wait="Please wait..." className="primary-button full-width-mobile w-button" value="Submit" />
                </form>
                <div className="success-message w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="error-message w-form-fail">
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
            </InView>
          ) : (
            <div className="contacts-form-wrapper">
              <h3 className="contacts-form-title">Send us a message</h3>
              <div className="form-block-contacts w-form">
                <form
                  id="email-form"
                  name="email-form"
                  data-name="Email Form"
                  method="get"
                  className="form-contacts center"
                  data-wf-page-id="64943f2a36915879aa1daecb"
                  data-wf-element-id="ea41af14-8b87-8ae8-ae5d-f8373dc8aafa"
                >
                  <input className="contacts-input w-input" maxLength={256} name="name" data-name="Name" placeholder="Your Name" type="text" id="name" required />
                  <div className="contacts-input-row">
                    <input className="contacts-input w-input" maxLength={256} name="telegram" data-name="Telegram" placeholder="Your Telegram" type="text" id="telegram" />
                    <input className="contacts-input w-input" maxLength={256} name="whatsapp" data-name="WhatsApp" placeholder="Your WhatsApp" type="text" id="whatsapp" />
                  </div>
                  <textarea placeholder="Message" maxLength={5000} id="message" name="message" data-name="Message" required className="contacts-textarea w-input contact-message-textarea" />
                  <input type="submit" data-wait="Please wait..." className="primary-button full-width-mobile w-button" value="Submit" />
                </form>
                <div className="success-message w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="error-message w-form-fail">
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
