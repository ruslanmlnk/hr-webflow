"use client";

import { webflowStyles } from "../styles";
import { scrollToContactForm } from "@/utils/scroll";

export default function Home2HowItWorksTabsSection() {
  return (
    <section id="process" className="section without-top-spacing">
      <div className="w-layout-blockcontainer base-container w-container">
        <div className="how-it-works-wrap">
          <div className="how-it-works-wrapper">
            <h6 data-w-id="bf0ddcf4-6a19-22f5-40ac-b3f3f7d1664b" style={webflowStyles.opacity0} className="primary-title uppercase">HOW IT WORK</h6>
            <h3 data-w-id="bf0ddcf4-6a19-22f5-40ac-b3f3f7d1664d" style={webflowStyles.opacity0} className="medium-title">Work <span className="primary-span">process</span></h3>
            <p data-w-id="bf0ddcf4-6a19-22f5-40ac-b3f3f7d1664f" style={webflowStyles.opacity0} className="short-paragraph">A clear and efficient path to top talent</p>
          </div>
          <a href="#contact-form" onClick={scrollToContactForm} className="primary-button-black w-inline-block">
            <div className="button-text">Get a consultation</div>
          </a>
        </div>
        <div className="process-grid">
          <div data-ix-inview className="process-item ix-fade-up">
            <h6 className="primary-title">01</h6>
            <h4 className="tabs-title">Client Briefing</h4>
            <p className="short-paragraph grey">We align on requirements, candidate profile, timelines, and confirm the assignment</p>
          </div>
          <div data-ix-inview className="process-item ix-fade-up ix-delay-1">
            <h6 className="primary-title">02</h6>
            <h4 className="tabs-title">Market Analysis</h4>
            <p className="short-paragraph grey">We assess market availability and define realistic hiring timelines</p>
          </div>
          <div data-ix-inview className="process-item ix-fade-up ix-delay-2">
            <h6 className="primary-title">03</h6>
            <h4 className="tabs-title">Search Launch</h4>
            <p className="short-paragraph grey">We launch sourcing, prepare job materials, and shortlist relevant candidates</p>
          </div>
          <div data-ix-inview className="process-item ix-fade-up ix-delay-3">
            <h6 className="primary-title">04</h6>
            <h4 className="tabs-title">Client Reporting</h4>
            <p className="short-paragraph grey">We provide regular updates with clear recruitment progress metrics</p>
          </div>
          <div data-ix-inview className="process-item ix-fade-up ix-delay-4">
            <h6 className="primary-title">05</h6>
            <h4 className="tabs-title">Candidate Review</h4>
            <p className="short-paragraph grey">We deliver concise candidate summaries after interviews</p>
          </div>
          <div data-ix-inview className="process-item ix-fade-up ix-delay-5">
            <h6 className="primary-title">06</h6>
            <h4 className="tabs-title">Interview Coordination</h4>
            <p className="short-paragraph grey">We coordinate interviews and support all hiring stages</p>
          </div>
          <div data-ix-inview className="process-item ix-fade-up ix-delay-6">
            <h6 className="primary-title">07</h6>
            <h4 className="tabs-title">Final Stage & Offer</h4>
            <p className="short-paragraph grey">We align terms, support decisions, and conduct checks if needed</p>
          </div>
          <div data-ix-inview className="process-item ix-fade-up ix-delay-7">
            <h6 className="primary-title">08</h6>
            <h4 className="tabs-title">Guarantee Period</h4>
            <p className="short-paragraph grey">We support onboarding and monitor candidate adaptation</p>
          </div>
          <div data-ix-inview className="process-item ix-fade-up ix-delay-8">
            <h6 className="primary-title">09</h6>
            <h4 className="tabs-title">Replacement Guarantee</h4>
            <p className="short-paragraph grey">We provide replacements in case of mismatch, per package terms</p>
          </div>
        </div>
      </div>
    </section>
  );
}
