import { webflowStyles } from "../styles";

export default function Home2BannerSection() {
  return (
    <section className="section home-2-banner">
      <div className="w-layout-blockcontainer base-container w-container">
        <div className="home-2-banner-wrapper">
          <div className="home-2-banner-content-wrapper">
            <div data-w-id="840c6250-2090-e03d-0df8-cb882921525e" style={webflowStyles.opacity0} className="top-banner-block">
              <div className="banner-text-block">The best job seekers</div>
              <a data-w-id="840c6250-2090-e03d-0df8-cb8829215261" href="/jobs-listing" className="link-with-icon">
                explore 
                <span style={webflowStyles.transformReset} className="text-button-icon"></span>
              </a>
            </div>
            <h1 data-w-id="840c6250-2090-e03d-0df8-cb8829215265" style={webflowStyles.opacity0} className="banner-title aling-left">
              Find your 
              <span className="grey-text">dream job with JobBoard</span>
            </h1>
            <p data-w-id="840c6250-2090-e03d-0df8-cb882921526a" style={webflowStyles.opacity0} className="banner-paragraph width">Growing a business means having the right people in your team.</p>
            <form action="/search" className="home-2-banner-search width w-form">
              <input className="banner-search-input w-input" maxLength={256} name="query" style={webflowStyles.opacity0} placeholder="Job title" data-w-id="840c6250-2090-e03d-0df8-cb882921526d" type="search" id="search" required="" />
              <p data-w-id="840c6250-2090-e03d-0df8-cb882921526e" style={webflowStyles.opacity0} className="search-icon"></p>
              <div data-w-id="840c6250-2090-e03d-0df8-cb8829215270" style={webflowStyles.opacity0} className="primary-white-button absolute-copy">
                <input type="submit" className="white-button-text height w-button" value="Find jobs" />
                <p className="text-icon">
                  <span className="text-button-icon"></span>
                </p>
              </div>
            </form>
          </div>
          <div className="right-elements-wrapper">
            <img src="images/y68778-201.webp" loading="lazy" style={webflowStyles.opacity0} data-w-id="1a3d2dfe-b4da-e4f6-4c52-e589b95690f2" alt="home banner image" className="girl-banner-image" />
            <img src="images/subtract.svg" loading="lazy" style={webflowStyles.opacity0} data-w-id="2e66a02a-4e4a-37b3-79c1-81eb79fca035" alt="background image" className="bg-image" />
            <div data-w-id="6015248b-3103-befc-db3a-0f4dbd13441e" style={webflowStyles.opacity0} className="home-2-logo second">
              <img src="images/logomark-20-4-.svg" loading="lazy" alt="logo" />
            </div>
            <div data-w-id="786636f7-78cf-7b18-0863-2a63f116e764" style={webflowStyles.opacity0} className="home-2-logo fourth">
              <img src="images/logomark.svg" loading="lazy" alt="logo" />
            </div>
            <div data-w-id="3ce2c3fd-bde9-005c-a7bd-669e05d769f7" style={webflowStyles.opacity0} className="home-2-logo fifth">
              <img src="images/frame-2090.svg" loading="lazy" alt="logo" />
            </div>
            <div data-w-id="ebc38ba4-dcee-8f10-d530-41e4078d95df" style={webflowStyles.opacity0} className="home-2-logo third">
              <img src="images/logomark-20-6-.svg" loading="lazy" alt="logo" className="logo-image" />
            </div>
            <div data-w-id="29b99efb-e672-5196-701a-3f979d1e7390" style={webflowStyles.opacity0} className="home-2-logo">
              <img src="images/logomark-20-1-.svg" loading="lazy" alt="logo" />
            </div>
            <div data-w-id="f06df3c2-59e4-6b20-51d3-3eb5e0d98e39" style={webflowStyles.opacity0} className="banner-blured-block left">
              <div className="banner-number-text">10,000+</div>
              <p className="small-paragraph">Job vacancies</p>
            </div>
            <div data-w-id="caffce8b-ca9c-c9e4-cca8-29c6abcb36d7" style={webflowStyles.opacity0} className="banner-blured-block">
              <div className="banner-number-text">5,000+</div>
              <p className="small-paragraph">Experts</p>
            </div>
            <div data-w-id="ef1fab17-cdb9-0b7b-64c5-bb41750c21cc" style={webflowStyles.opacity0} className="circle-wrap">
              <div className="circle-image-wrapper">
                <img src="images/rectangle-2027.svg" loading="lazy" alt="background circle" className="circle-bg-image" />
                <div className="text-block-2">Find Experts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
