import Navbar from "../../components/home-2/Navbar";
import WebflowInit from "../../components/home-2/WebflowInit";
import Home2FooterSection from "../../components/home-2/sections/Home2FooterSection";
import PricingPlansSection from "../../components/pricing/sections/PricingPlansSection";

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <div className="job-listing-sections-bg bg">
        <PricingPlansSection />
        <Home2FooterSection />
      </div>
      <WebflowInit />
    </>
  );
}

