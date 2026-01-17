import { webflowStyles } from "../styles";

export default function Home2FooterSection() {
  return (
    <section className="footer">
      <div className="footer-bg">
        <div className="base-container w-container">
          <div className="footer-cta-wrapper-copy">
            <div data-w-id="2747963a-afb3-3313-2e75-f63c4a1e224d" style={webflowStyles.opacity0} className="cta-wrap">
              <div>
                <h6 className="primary-title">carrers</h6>
              </div>
              <h3 className="medium-title left-width">Join to help businesses grow</h3>
              <div className="button-spacing">
                <a href="#" className="primary-white-button shadow w-inline-block">
                  <div className="white-button-text">
                    Explore Careers 
                    <span className="text-button-icon"></span>
                  </div>
                </a>
              </div>
            </div>
            <div data-w-id="2747963a-afb3-3313-2e75-f63c4a1e2259" style={webflowStyles.opacity0} className="cta-wrap">
              <h6 className="primary-title">blog</h6>
              <h3 className="medium-title left-width">Tips, and trends for your future job</h3>
              <div className="button-spacing">
                <a href="/blog" className="primary-white-button shadow w-inline-block">
                  <div className="white-button-text shadow">
                    Explore blog 
                    <span className="text-button-icon"></span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div data-w-id="2747963a-afb3-3313-2e75-f63c4a1e2264" style={webflowStyles.opacity0} className="subscribe-wrapper">
            <div className="footer-form w-form">
              <h4 className="form-title">subscribe</h4>
              <p className="footer-text">Stay current with all thinks JobBoard</p>
              <form id="wf-form-Email-Form" name="wf-form-Email-Form" data-name="Email Form" method="get" className="form" data-wf-page-id="64943f2a36915879aa1daee3" data-wf-element-id="2747963a-afb3-3313-2e75-f63c4a1e226a">
                <input className="input w-input" maxLength={256} name="email-3" data-name="Email 3" placeholder="Email" type="email" id="email-3" required />
                <div className="primary-white-button absolute">
                  <input type="submit" data-wait="Please wait..." className="white-button-text height w-button" value="Subscribe" />
                  <p className="text-icon">
                    <span className="text-button-icon"></span>
                  </p>
                </div>
              </form>
              <div className="success-message w-form-done">
                <div className="success-text">Thank you! Your submission has been received!</div>
              </div>
              <div className="error-message w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
            <div className="footer-right-links-wrapper">
              <div className="footer-link-wrapper">
                <h6 className="small-footer-title">company</h6>
                <a href="/about-us" className="footer-link">about</a>
                <a href="/our-team" className="footer-link">Our team</a>
                <a href="/jobs-listing" className="footer-link">jobs</a>
              </div>
              <div className="footer-link-wrapper">
                <h6 className="small-footer-title">resources</h6>
                <a href="/blog" className="footer-link">news</a>
                <a href="/faq" className="footer-link">FAQs</a>
                <a href="/candidates" className="footer-link">Candidates</a>
              </div>
              <div className="footer-link-wrapper">
                <h6 className="small-footer-title">contacts</h6>
                <a href="/cv-post" className="footer-link">cV post</a>
                <a href="/job-post" className="footer-link">job post</a>
                <a href="/contact-us-1" className="footer-link">contact us</a>
              </div>
            </div>
          </div>
          <div data-w-id="2747963a-afb3-3313-2e75-f63c4a1e2293" style={webflowStyles.opacity0} className="footer-social-icon-wrapper">
            <a href="/home-1" className="w-inline-block">
              <img src="images/logo.svg" loading="lazy" alt="logo" />
            </a>
            <div className="social-links-wrapper">
              <a href="https://www.facebook.com/" target="_blank" className="social-icon"></a>
              <a href="https://www.youtube.com/" target="_blank" className="social-icon"></a>
              <a href="https://dribbble.com/" target="_blank" className="social-icon"></a>
              <a href="https://www.instagram.com/" target="_blank" className="social-icon"></a>
              <a href="https://www.linkedin.com/" target="_blank" className="social-icon"></a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-section">
        <div className="w-layout-blockcontainer base-container w-container">
          <div className="footer-bottom-wrapper">
            <div className="footer-copyright">© 2000 - 2023. All Rights Reserved.</div>
            <div className="footer-rights-wrapper">
              <div className="footer-rights">
                © JobBoard 128. All Rights Reserved 2023. 
                <a href="#">Licensing</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
