import TwoColTitle from "@/components/home-2/sections/TwoColTitle";
import { webflowStyles } from "../../home-2/styles";
import InView from "../../shared/InView";
import { PricingPlansProps } from "@/components/home-2/types/types";

export default function PricingPlansSection({
  animation = "webflow",
  plans,
}: PricingPlansProps) {
  const isWebflow = animation === "webflow";
  const isInView = animation === "inview";

  return (
    <div id="rates" className="section">
      <div className="base-container w-container">
        <TwoColTitle
          topTitle="Pricing"
          title="Explore Our"
          titleColor="Pricing Options"
          description="Whether you're a startup, growing business, or enterprise company, we offer flexible recruitment plans that fit your hiring goals without compromising quality"
        />

        <div className="pricing-plans-wrapper">
          {plans.map((plan, index) => {
            const content = (
              <>
                <h3 className="pricing-plan-item-title">{plan.title}</h3>
                <p className="paragraph-large paragraph-plan-item">
                  {plan.subtitle}
                </p>
                <ul role="list" className="pricing-plan-list">
                  {plan.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </>
            );

            if (isInView) {
              return (
                <InView
                  key={plan.title}
                  className={`pricing-plan-item inview-fade-up inview-delay-${index + 1}`}
                >
                  {content}
                </InView>
              );
            }

            return (
              <div
                key={plan.title}
                className="pricing-plan-item"
                style={isWebflow ? webflowStyles.opacity0 : undefined}
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
