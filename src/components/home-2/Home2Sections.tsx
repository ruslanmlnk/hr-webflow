import Home2BannerSection from "./sections/Home2BannerSection";
import Home2LinesSection from "./sections/Home2LinesSection";
import Home2HowItWorksIntroSection from "./sections/Home2HowItWorksIntroSection";
import Home2HowItWorksCardsSection from "./sections/Home2HowItWorksCardsSection";
import Home2WhyJobboardSection from "./sections/Home2WhyJobboardSection";
import Home2JobVacancySection from "./sections/Home2JobVacancySection";
import Home2JobPositionsSection from "./sections/Home2JobPositionsSection";
import Home2HowItWorksTabsSection from "./sections/Home2HowItWorksTabsSection";
import Home2LeadershipSection from "./sections/Home2LeadershipSection";
import Home2TestimonialsSection from "./sections/Home2TestimonialsSection";
import Home2CtaSection from "./sections/Home2CtaSection";
import Home2FooterSection from "./sections/Home2FooterSection";
import PricingPlansSection from "../pricing/sections/PricingPlansSection";
import ContactUs1MessageFormSection from "../contact-us-1/sections/ContactUs1MessageFormSection";

export default function Home2Sections() {
  return (
    <div className="home-2-section-bg">
      <Home2BannerSection />
      <Home2HowItWorksIntroSection />
      <Home2HowItWorksCardsSection />
      <Home2WhyJobboardSection />
      <Home2HowItWorksTabsSection />
      <Home2LinesSection />
      <Home2JobVacancySection />
      <Home2JobPositionsSection />
      <Home2LeadershipSection />
      <Home2TestimonialsSection />
      <Home2CtaSection />
      <PricingPlansSection animation="inview" />
      <ContactUs1MessageFormSection animation="inview" />
      <Home2FooterSection />
    </div>
  );
}
