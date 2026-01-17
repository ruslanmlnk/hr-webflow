import { webflowStyles } from "../../home-2/styles";
import InView from "../../shared/InView";

type Props = {
  animation?: "webflow" | "inview" | "none";
};

export default function PricingPlansSection({ animation = "webflow" }: Props) {
  const isWebflow = animation === "webflow";
  const isInView = animation === "inview";

  return (
    <div className="section without-top-spacing">
      <div className="base-container w-container">
        {isInView ? (
          <InView className="section-title-wrapper inview-fade-up inview-delay-0">
            <h2 className="section-title">
              Pricing that suits your needs
            </h2>
            <p className="section-title-description">
              Our goal is to ensure that you get the most value for your investment, allowing you to access our high-quality products and services without breaking the bank.
            </p>
          </InView>
        ) : (
          <div className="section-title-wrapper">
            <h2 data-w-id="5b8457c2-4a28-5a36-811e-601b20f407c4" style={isWebflow ? webflowStyles.opacity0 : undefined} className="section-title">
              Pricing that suits your needs
            </h2>
            <p data-w-id="5b8457c2-4a28-5a36-811e-601b20f407c6" style={isWebflow ? webflowStyles.opacity0 : undefined} className="section-title-description">
              Our goal is to ensure that you get the most value for your investment, allowing you to access our high-quality products and services without breaking the bank.
            </p>
          </div>
        )}
        <div className="pricing-plans-wrapper">
          {isInView ? (
            <InView className="pricing-plan-item inview-fade-up inview-delay-1">
              <h3 className="pricing-plan-item-title">Basic Plan</h3>
              <p className="paragraph-large">Offers job listing features to streamline your recruitment processes.</p>
              <div className="pricing-plan-price-wrapper">
                <div className="pricing-plan-currency-icon">$ </div>
                <h6>
                  <span className="pricing-plan-price">50</span>/month
                </h6>
              </div>
              <a href="/contact-us-1" className="primary-white-button w-inline-block">
                <div className="white-button-text">Buy now</div>
              </a>
              <ul role="list" className="pricing-plan-list">
                <li>Affordable pricing</li>
                <li>Job listing and applicant management</li>
                <li>Limited job postings and candidate applications</li>
                <li>Basic customer support</li>
              </ul>
            </InView>
          ) : (
            <div data-w-id="5b8457c2-4a28-5a36-811e-601b20f407c9" style={isWebflow ? webflowStyles.opacity0 : undefined} className="pricing-plan-item">
              <h3 className="pricing-plan-item-title">Basic Plan</h3>
              <p className="paragraph-large">Offers job listing features to streamline your recruitment processes.</p>
              <div className="pricing-plan-price-wrapper">
                <div className="pricing-plan-currency-icon">$ </div>
                <h6>
                  <span className="pricing-plan-price">50</span>/month
                </h6>
              </div>
              <a href="/contact-us-1" className="primary-white-button w-inline-block">
                <div className="white-button-text">Buy now</div>
              </a>
              <ul role="list" className="pricing-plan-list">
                <li>Affordable pricing</li>
                <li>Job listing and applicant management</li>
                <li>Limited job postings and candidate applications</li>
                <li>Basic customer support</li>
              </ul>
            </div>
          )}
          {isInView ? (
            <InView className="pricing-plan-item inview-fade-up inview-delay-2">
              <h3 className="pricing-plan-item-title">Premium Plan</h3>
              <p className="paragraph-large">Our Premium Plan delivers a comprehensive suite of features.</p>
              <div className="pricing-plan-price-wrapper">
                <div className="pricing-plan-currency-icon">$ </div>
                <h6>
                  <span className="pricing-plan-price">60</span>/month
                </h6>
              </div>
              <a href="/contact-us-1" className="primary-white-button w-inline-block">
                <div className="white-button-text">Buy now</div>
              </a>
              <ul role="list" className="pricing-plan-list">
                <li>Comprehensive features for high-volume recruitment</li>
                <li>Unlimited job postings and applicant tracking</li>
                <li>Advanced analytics </li>
                <li>Dedicated account manager</li>
              </ul>
            </InView>
          ) : (
            <div data-w-id="5b8457c2-4a28-5a36-811e-601b20f407e0" style={isWebflow ? webflowStyles.opacity0 : undefined} className="pricing-plan-item">
              <h3 className="pricing-plan-item-title">Premium Plan</h3>
              <p className="paragraph-large">Our Premium Plan delivers a comprehensive suite of features.</p>
              <div className="pricing-plan-price-wrapper">
                <div className="pricing-plan-currency-icon">$ </div>
                <h6>
                  <span className="pricing-plan-price">60</span>/month
                </h6>
              </div>
              <a href="/contact-us-1" className="primary-white-button w-inline-block">
                <div className="white-button-text">Buy now</div>
              </a>
              <ul role="list" className="pricing-plan-list">
                <li>Comprehensive features for high-volume recruitment</li>
                <li>Unlimited job postings and applicant tracking</li>
                <li>Advanced analytics </li>
                <li>Dedicated account manager</li>
              </ul>
            </div>
          )}
          {isInView ? (
            <InView
              id="w-node-_5b8457c2-4a28-5a36-811e-601b20f407f7-aa1daf2f"
              className="pricing-plan-item inview-fade-up inview-delay-3"
            >
              <h3 className="pricing-plan-item-title">Custom Plan</h3>
              <p className="paragraph-large width">Offers pricing and features that align precisely with your job site requirements.</p>
              <div className="pricing-plan-price-wrapper">
                <div className="pricing-plan-currency-icon">$ </div>
                <h6>
                  <span className="pricing-plan-price">120</span>/month
                </h6>
              </div>
              <a href="/contact-us-1" className="primary-white-button w-inline-block">
                <div className="white-button-text">Buy now</div>
              </a>
              <ul role="list" className="pricing-plan-list">
                <li>Tailored pricing and features</li>
                <li>Customizable branding options</li>
                <li>API integrations and advanced customization</li>
                <li>Premium support</li>
              </ul>
            </InView>
          ) : (
            <div
              id="w-node-_5b8457c2-4a28-5a36-811e-601b20f407f7-aa1daf2f"
              data-w-id="5b8457c2-4a28-5a36-811e-601b20f407f7"
              style={isWebflow ? webflowStyles.opacity0 : undefined}
              className="pricing-plan-item"
            >
              <h3 className="pricing-plan-item-title">Custom Plan</h3>
              <p className="paragraph-large width">Offers pricing and features that align precisely with your job site requirements.</p>
              <div className="pricing-plan-price-wrapper">
                <div className="pricing-plan-currency-icon">$ </div>
                <h6>
                  <span className="pricing-plan-price">120</span>/month
                </h6>
              </div>
              <a href="/contact-us-1" className="primary-white-button w-inline-block">
                <div className="white-button-text">Buy now</div>
              </a>
              <ul role="list" className="pricing-plan-list">
                <li>Tailored pricing and features</li>
                <li>Customizable branding options</li>
                <li>API integrations and advanced customization</li>
                <li>Premium support</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
