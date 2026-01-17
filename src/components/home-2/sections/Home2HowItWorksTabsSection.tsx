import { webflowStyles } from "../styles";

export default function Home2HowItWorksTabsSection() {
  return (
    <section className="section without-top-spacing">
      <div className="w-layout-blockcontainer base-container w-container">
        <div className="how-it-works-wrap">
          <div className="how-it-works-wrapper">
            <h6 data-w-id="bf0ddcf4-6a19-22f5-40ac-b3f3f7d1664b" style={webflowStyles.opacity0} className="primary-title">how it works</h6>
            <h3 data-w-id="bf0ddcf4-6a19-22f5-40ac-b3f3f7d1664d" style={webflowStyles.opacity0} className="medium-title">Getting started is easy</h3>
            <p data-w-id="bf0ddcf4-6a19-22f5-40ac-b3f3f7d1664f" style={webflowStyles.opacity0} className="short-paragraph">Upon gaining entry to the JobBoard platform, your initial task involves inputting your initial team positions or roles.</p>
          </div>
          <a data-w-id="bf0ddcf4-6a19-22f5-40ac-b3f3f7d16651" style={webflowStyles.opacity0} href="/contact-us-1" className="primary-white-button w-inline-block">
            <div className="white-button-text">learn more</div>
          </a>
        </div>
        <div data-current="Tab 1" data-easing="ease" data-duration-in="300" data-duration-out="100" className="how-it-works-tab w-tabs">
          <div className="home-2-tab-menu w-tab-menu">
            <a data-w-tab="Tab 1" data-w-id="bf0ddcf4-6a19-22f5-40ac-b3f3f7d1667f" style={webflowStyles.opacity0} className="tab-link-tab-1-2 w-inline-block w-tab-link w--current">
              <div className="tab-text-wrapper bg-color">
                <h6 className="primary-title mobile-align-left">01</h6>
                <h4 className="tabs-title">Job search</h4>
                <p className="short-paragraph grey">Begin your job search by exploring a wide range of job openings.</p>
              </div>
            </a>
            <a data-w-tab="Tab 2" data-w-id="bf0ddcf4-6a19-22f5-40ac-b3f3f7d16687" style={webflowStyles.opacity0} className="tab-link-tab-1-2 w-inline-block w-tab-link">
              <div className="tab-text-wrapper bg-color">
                <h6 className="primary-title mobile-align-left">02</h6>
                <h4 className="tabs-title">Salary estimate</h4>
                <p className="short-paragraph grey">Provide your profile details to receive a salary estimate.</p>
              </div>
            </a>
            <a data-w-tab="Tab 3" data-w-id="bf0ddcf4-6a19-22f5-40ac-b3f3f7d1668f" style={webflowStyles.opacity0} className="tab-link-tab-1-2 w-inline-block w-tab-link">
              <div className="tab-text-wrapper bg-color">
                <h6 className="primary-title mobile-align-left">03</h6>
                <h4 className="tabs-title">Read reviews</h4>
                <p className="short-paragraph grey">Gain valuable insights about potential employers.</p>
              </div>
            </a>
            <a data-w-tab="Tab 4" data-w-id="bf0ddcf4-6a19-22f5-40ac-b3f3f7d16697" style={webflowStyles.opacity0} className="tab-link-tab-1-2 w-inline-block w-tab-link">
              <div className="tab-text-wrapper bg-color">
                <h6 className="primary-title mobile-align-left">04</h6>
                <h4 className="tabs-title">Apply and connect</h4>
                <p className="short-paragraph grey">Connect with employers, attend interviews.</p>
              </div>
            </a>
          </div>
          <div className="how-it-works-tab-content w-tab-content">
            {/* <div data-w-tab="Tab 1" className="how-it-work-tab-pane w-tab-pane w--tab-active">
              <div data-w-id="bf0ddcf4-6a19-22f5-40ac-b3f3f7d16657" style={webflowStyles.opacity0} className="tabs-content-wrapper">
                <img loading="lazy" src="images/form-20image.svg" alt="image form" className="form-image" />
                <div className="right-tabs-content-wrapper">
                  <h6 className="primary-title">01</h6>
                  <h3 className="tabs-title">Discover Job Openings</h3>
                  <p className="short-paragraph mobile-align-left">Start by searching for job openings using our comprehensive search engine. Simply enter relevant keywords, location, and other criteria to find the positions that match your interests and qualifications.</p>
                </div>
              </div>
            </div> */}
            <div data-w-tab="Tab 2" className="w-tab-pane">
              <div className="tabs-content-wrapper">
                <img loading="lazy" src="images/form-20image.svg" alt="image form" className="form-image" />
                <div className="right-tabs-content-wrapper">
                  <h6 className="primary-title">02</h6>
                  <h3 className="tabs-title">Customized Salary Assessment</h3>
                  <p className="short-paragraph mobile-align-left">After finding a job that interests you, provide your profile details to receive a personalized salary estimate.</p>
                </div>
              </div>
            </div>
            <div data-w-tab="Tab 3" className="w-tab-pane">
              <div className="tabs-content-wrapper">
                <img loading="lazy" src="images/form-20image.svg" alt="image form" className="form-image" />
                <div className="right-tabs-content-wrapper">
                  <h6 className="primary-title">03</h6>
                  <h3 className="tabs-title">Gain Insights from Company Reviews</h3>
                  <p className="short-paragraph mobile-align-left">Read feedback and ratings from current and former employees, helping you make informed decisions about companies you are considering.</p>
                </div>
              </div>
            </div>
            <div data-w-tab="Tab 4" className="w-tab-pane">
              <div className="tabs-content-wrapper">
                <img loading="lazy" src="images/form-20image.svg" alt="image form" className="form-image" />
                <div className="right-tabs-content-wrapper">
                  <h6 className="primary-title">04</h6>
                  <h3 className="tabs-title">Act and make connections</h3>
                  <p className="short-paragraph mobile-align-left">Access valuable insights from a wealth of company reviews. Gain a deeper understanding of potential employers by</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
