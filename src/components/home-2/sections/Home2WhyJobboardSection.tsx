import { webflowStyles } from "../styles";
import type { Home2WhyJobboardSectionProps } from "../types/types";

export default function Home2WhyJobboardSection({ cards }: Home2WhyJobboardSectionProps) {
  return (
    <section className="section without-top-spacing-copy">
      <div className="why-job-board">
        <div className="left-why-job-board">
          <div className="why-jobboad-wrap">
            <div className="w-layout-blockcontainer base-container w-container">
              <div className="why-jobboard-wrapper">
                <h6 data-w-id="c6f71348-e011-139e-bc51-8c9f8cd3e941" style={webflowStyles.opacity0} className="primary-title">Our expertise</h6>
                <h3 data-w-id="c6f71348-e011-139e-bc51-8c9f8cd3e943" style={webflowStyles.opacity0} className="medium-title">
                  We cover all <span className="accent-primary-text">recruitment needs</span>
                </h3>
                <p data-w-id="c6f71348-e011-139e-bc51-8c9f8cd3e948" style={webflowStyles.opacity0} className="short-paragraph mobile-align-left">We hire talent aligned with your business goals, timelines, and budget</p>
              </div>
            </div>
          </div>
        </div>
        <div className="why-job-board-home-2">
          <div className="jobboard-wrapper">
            <div data-w-id="1783743b-37c5-b9b8-652d-e10224129c09" className="jobboard-items-wrapper">
              {cards.map((card) => (
                <div key={card.title} className="new-way-item-wrapper-copy">
                  <div className="new-way-job-link w-inline-block">
                    <div className="image-wrapp image-bg-wrapper">
                      <img src={card.icon} loading="lazy" alt="icon" />
                    </div>
                    <h4 className="new-way-title" data-text={card.title}>{card.title}</h4>
                    <p className="short-paragraph white">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div data-w-id="1ed52d35-1d76-824f-c4f4-5a30d704f7dd" className="jobboard-items-wrapper">
              {cards.map((card) => (
                <div key={`dup-${card.title}`} className="new-way-item-wrapper-copy">
                  <div className="new-way-job-link w-inline-block">
                    <div className="image-wrapp image-bg-wrapper">
                      <img src={card.icon} loading="lazy" alt="icon" />
                    </div>
                    <h4 className="new-way-title" data-text={card.title}>{card.title}</h4>
                    <p className="short-paragraph white">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
