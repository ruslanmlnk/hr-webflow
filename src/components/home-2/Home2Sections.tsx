import Home2BannerSection from "./sections/Home2BannerSection";
import Home2LinesSection from "./sections/Home2LinesSection";
import Home2HowItWorksIntroSection from "./sections/Home2HowItWorksIntroSection";
import Home2HowItWorksCardsSection from "./sections/Home2HowItWorksCardsSection";
import Home2WhyJobboardSection from "./sections/Home2WhyJobboardSection";
// import Home2JobVacancySection from "./sections/Home2JobVacancySection";
// import Home2JobPositionsSection from "./sections/Home2JobPositionsSection";
import Home2HowItWorksTabsSection from "./sections/Home2HowItWorksTabsSection";
import Home2LeadershipSection from "./sections/Home2LeadershipSection";
import Home2TestimonialsSection from "./sections/Home2TestimonialsSection";
// import Home2CtaSection from "./sections/Home2CtaSection";
import Home2FooterSection from "./sections/Home2FooterSection";
import PricingPlansSection from "../pricing/sections/PricingPlansSection";
import ContactUs1MessageFormSection from "../contact-us-1/sections/ContactUs1MessageFormSection";
import {
  expertiseCardsData,
  leadershipTeamData,
  leadershipTeamSecondaryData,
  pricingPlansData,
  testimonialsBottomData,
  testimonialsTopData,
} from "@/app/data/data";

export default function Home2Sections() {

  return (
    <div className="home-2-section-bg">
      <Home2BannerSection />
      <Home2HowItWorksIntroSection />
      <Home2HowItWorksCardsSection />
      <Home2WhyJobboardSection cards={expertiseCardsData} />
      <Home2HowItWorksTabsSection />
      <Home2LinesSection />
      <Home2LeadershipSection leadership={leadershipTeamData} team={leadershipTeamSecondaryData} />
      <PricingPlansSection
        animation="inview"
        plans={pricingPlansData}
      />

      <Home2TestimonialsSection testimonialsBottom={testimonialsBottomData} testimonialsTop={testimonialsTopData} />
      <ContactUs1MessageFormSection animation="inview" />
      <Home2FooterSection />
    </div>
  );
}
