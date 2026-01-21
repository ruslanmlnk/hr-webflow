import { webflowStyles } from "../styles";

export default function Home2HowItWorksCardsSection() {
  return (
    <section className="how-it-works-section">
      <img src="/testbg.svg " loading="lazy" width="361" alt="background image" className="home-background-image" />
      <div className="w-layout-blockcontainer base-container position w-container">
        <div className="home-2-how-it-works-block-wrap">
          <div data-w-id="71611291-5fd5-9990-8f8c-a889124e3eb3" style={webflowStyles.opacity0} className="item-wrapper">
            <div className="item-image-wrapper">
              <img src="images/icon-20-stroke-.svg" loading="lazy" alt="icon" className="item-image" />
            </div>
            <div className="item-text-wraper">
              <h4 className="tabs-title align-left">Quickly fill vacancies</h4>
              <p className="custom-grey-text aling-left">Average time-to-hire is 7–21 days, depending on role complexity</p>
            </div>
          </div>
          <div data-w-id="3aa20a89-d0f6-6f7d-077b-229e91b251e0" style={webflowStyles.opacity0} className="item-wrapper">
            <div className="item-image-wrapper">
              <img src="images/icon-20-stroke-20-1-.svg" loading="lazy" alt="icon" className="item-image" />
            </div>
            <div className="item-text-wraper">
              <h4 className="tabs-title align-left">Candidate assessment</h4>
              <p className="custom-grey-text aling-left">We use multi-stage screening and proprietary assessment tools</p>
            </div>
          </div>
          <div data-w-id="d3b162f9-6b9f-15a4-2482-ab6efa6eb58d" style={webflowStyles.opacity0} className="item-wrapper">
            <div className="item-image-wrapper">
              <img src="images/icon-20-stroke-20-2-.svg" loading="lazy" alt="icon" className="item-image" />
            </div>
            <div className="item-text-wraper">
              <h4 className="tabs-title align-left">Cross-industry experience</h4>
              <p className="custom-grey-text aling-left">Across IT, business, manufacturing, logistics, and services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
