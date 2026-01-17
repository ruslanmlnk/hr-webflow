import Navbar from "../../components/home-2/Navbar";
import WebflowInit from "../../components/home-2/WebflowInit";
import Home2FooterSection from "../../components/home-2/sections/Home2FooterSection";
import ContactUs1BannerSection from "../../components/contact-us-1/sections/ContactUs1BannerSection";
import ContactUs1FormSection from "../../components/contact-us-1/sections/ContactUs1FormSection";

export default function ContactUs1Page() {
  return (
    <>
      <Navbar />
      <div className="job-listing-sections-bg">
        <ContactUs1BannerSection />
        <ContactUs1FormSection />
        <Home2FooterSection />
      </div>
      <WebflowInit />
    </>
  );
}

