import { webflowStyles } from "../../home-2/styles";
import ContactUs1MessageForm from "../ContactUs1MessageForm";
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
                <a href="mailto:hrloom.agency@gmail.com" className="location-link">
                  hrloom.agency@gmail.com
                </a>
              </div>
            </div>
            <div data-w-id="8f81ccd8-c046-099f-d940-fbfa9b319666" style={webflowStyles.opacity0} className="contacts-social-cards-wrapper">
              <ContactUs1SocialCards />
            </div>
          </div>
          <div data-w-id="92a8d9be-2b86-6361-2ecb-849b408b23c7" style={webflowStyles.opacity0} className="contacts-form-wrapper">
            <h3 className="contacts-form-title">Send us a message</h3>
            <ContactUs1MessageForm />
          </div>
        </div>
      </div>
    </div>
  );
}
