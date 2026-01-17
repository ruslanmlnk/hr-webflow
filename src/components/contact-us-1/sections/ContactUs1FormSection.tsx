import { webflowStyles } from "../../home-2/styles";
import ContactUs1SocialCards from "./ContactUs1SocialCards";

export default function ContactUs1FormSection() {
  return (
    <div className="section without-top-spacing">
      <div className="base-container w-container">
        <div className="contacts-wrapper contacts-wrapper--top contacts-wrapper--form-wide">
          <div className="contacts-content-wrapper">
            <div data-w-id="64ab773d-0e4f-d1c1-e3cf-9810dc3b4b62" style={webflowStyles.opacity0} className="contacts-detail">
              <div className="contact-us-item-wrapper first">
                <p className="contacts-icon">{"\uf3c5"}</p>
                <a
                  href="https://www.google.com/maps/place/Liberty+State+Park/@40.7074294,-74.0395605,17z/data=!3m1!4b1!4m6!3m5!1s0x89c250934b02cba3:0xbd6035c2e0daafcc!8m2!3d40.7074294!4d-74.0369856!16zL20vMDJ6cjBt?entry=ttu"
                  target="_blank"
                  className="location-link"
                >
                  1 Audrey Zapp Dr, Jersey City, USA
                </a>
              </div>
            </div>
            <div data-w-id="818ee75b-97fd-4765-3010-e5b28f1012d7" style={webflowStyles.opacity0} className="contacts-detail">
              <div className="contact-us-item-wrapper">
                <p className="contacts-icon">{"\uf095"}</p>
                <a href="tel:+12124258617" className="location-link">
                  +1 212 425 8617
                </a>
              </div>
            </div>
            <div data-w-id="2d795c65-8f28-5364-8057-86ac399da26d" style={webflowStyles.opacity0} className="contacts-detail">
              <div className="contact-us-item-wrapper">
                <p className="contacts-icon">{"\uf0e0"}</p>
                <a href="mailto:information@office.com" className="location-link">
                  information@jobboard.com
                </a>
              </div>
            </div>
            <div data-w-id="8f81ccd8-c046-099f-d940-fbfa9b319666" style={webflowStyles.opacity0} className="contacts-social-cards-wrapper">
              <ContactUs1SocialCards />
            </div>
          </div>
          <div data-w-id="92a8d9be-2b86-6361-2ecb-849b408b23c7" style={webflowStyles.opacity0} className="contacts-form-wrapper">
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
        </div>
      </div>
    </div>
  );
}
