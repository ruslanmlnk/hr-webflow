import { webflowStyles } from "../styles";

export default function Home2LinesSection() {
  const cases = [
    { title: "Affiliate Manager", details: "Contacts: 23 \u00a0 Interviews: 8 \u00a0 Completion time: 2.5 weeks" },
    { title: "Media Buyer", details: "Contacts: 32 \u00a0 Interviews: 16 \u00a0 Completion time: 3 weeks" },
    { title: "SMM Manager", details: "Contacts: 30 \u00a0 Interviews: 4 \u00a0 Completion time: 2-3 weeks" },
    { title: "Head of Sales", details: "Contacts: 9 \u00a0 Interviews: 5 \u00a0 Completion time: 4-5 weeks" },
    { title: "Product Manager", details: "Contacts: 41 \u00a0 Interviews: 8 \u00a0 Completion time: 4-5 weeks" },
    { title: "Business Analyst", details: "Contacts: 40 \u00a0 Interviews: 12 \u00a0 Completion time: 3-4 weeks" },
    { title: "UX/UI Designer", details: "Contacts: 20 \u00a0 Interviews: 6 \u00a0 Completion time: 3-4 weeks" },
    { title: "Finance Manager", details: "Contacts: 18 \u00a0 Interviews: 2 \u00a0 Completion time: 3-4 weeks" },
    { title: "Senior Backend Developer", details: "Contacts: 41 \u00a0 Interviews: 8 \u00a0 Completion time: 4-5 weeks" },
    { title: "Full-Stack Developer", details: "Contacts: 40 \u00a0 Interviews: 6 \u00a0 Completion time: 3-4 weeks" },
    { title: "DevOps Engineer", details: "Contacts: 55 \u00a0 Interviews: 6 \u00a0 Completion time: 4-5 weeks" },
    { title: "System Administrator", details: "Contacts: 32 \u00a0 Interviews: 4 \u00a0 Completion time: 2 weeks" },
  ];

  const renderCaseItems = (suffix = "") =>
    cases.map((item) => (
      <div key={`${item.title}${suffix}`} role="listitem" className="right-jobs-collection-wrapper width w-dyn-item">
        <div className="about-positon-wrapper height">
          <div className="position-wrap">
            <h5 className="jobs-title">{item.title}</h5>
            <div className="location-type-wrapper wrap">
              <p className="jobs-parapgraph">{item.details}</p>
            </div>
          </div>
        </div>
      </div>
    ));

  return (
    <section id="cases" className="section home-2bg-with-lines">

      <div className="w-layout-blockcontainer base-container w-container">
        <div className="about-jobboard-wrapper home-2">
          <section className="section how-it-works" style={{ overflow: 'visible' }}>
            <div className="w-layout-blockcontainer base-container w-container">
              <div className="center-how-it-works-wrapper" style={{ overflow: 'visible', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                <h6 data-w-id="78b1b3e7-47e2-8506-03d6-8fe5cb6336b3" style={webflowStyles.opacity0} className="primary-title">Real cases</h6>
                <h3 data-w-id="78b1b3e7-47e2-8506-03d6-8fe5cb6336b5" style={webflowStyles.opacity0} className="medium-title">
                  Closed roles with <span className="grey-text">measurable results</span>
                </h3>
                <p data-w-id="78b1b3e7-47e2-8506-03d6-8fe5cb6336b7" style={webflowStyles.opacity0} className="short-paragraph center">We showcase real recruitment cases under NDA — with contacts reached, interviews conducted, and time-to-hire</p>
              </div>
            </div>
          </section>
          <div data-w-id="d5f52c81-4508-3818-4bbc-342ae3af498a" style={webflowStyles.opacity0} className="home-2-jobs-wrapper">
            <div className="wrapper-with-link">
              <h5 className="white-title border">Cases</h5>
              {/* <a href="/jobs-listing" className="link">All Jobs</a> */}
            </div>
            <div className="jobs-list-wrapper home-2 w-dyn-list">
              <div data-w-id="d5f52c81-4508-3818-4bbc-342ae3af498e" style={webflowStyles.opacity0} className="home-2-jobs-collection-track">
                <div role="list" className="home-2-jobs-collection-wrap w-dyn-items">
                  {renderCaseItems()}
                </div>
                <div aria-hidden="true" className="home-2-jobs-collection-wrap w-dyn-items">
                  {renderCaseItems("-dup")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
