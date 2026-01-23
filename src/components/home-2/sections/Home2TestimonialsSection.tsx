interface Testimonial {
  text: string;
  author: string;
}

export default function Home2TestimonialsSection({ testimonialsTop, testimonialsBottom }: { testimonialsTop: Testimonial[], testimonialsBottom: Testimonial[] }) {
  return (
    <section className="section without-top-spacing">
      <div className="w-layout-blockcontainer base-container w-container">
        <div className="center-content-wrapper width">
          <h6 data-w-id="86e8301c-f525-2945-b9fd-a4556e115c4c" data-ix-inview className="primary-title ix-fade-up">TESTIMONIALS</h6>
          <h3 data-w-id="86e8301c-f525-2945-b9fd-a4556e115c4e" data-ix-inview className="medium-title ix-fade-up ix-delay-1">Our happy users say about us</h3>
          <p data-w-id="86e8301c-f525-2945-b9fd-a4556e115c50" data-ix-inview className="short-paragraph center ix-fade-up ix-delay-2">We are grateful to our users for their kind words and testimonials. Their success stories motivate us to continually improve our platform and provide the best possible job search experience for every user.</p>
        </div>
      </div>
      <div data-w-id="4a51c29a-0986-16a5-a01a-c7e7e785ab87" className="testimon-wrap">
        <div className="top-testimon-wrapper">
          <div data-w-id="9a6a70f8-cdee-34f2-4f56-cb39c7898dd1" className="testimanial-full-width-wrapper">
            {testimonialsTop.map((testimonial, index) => (
              <div key={index} className={`testimon-wrapper ${index % 2 === 1 ? 'bg-color' : ''}`}>
                <img src="images/star-20images.png" loading="lazy" alt="icon" />
                <p className="testimonials-text">{testimonial.text}</p>
                <p className="short-paragraph mobile-align-left">{testimonial.author}</p>
              </div>
            ))}
          </div>
          <div data-w-id="e14aded4-ae91-8708-c6f6-538a4ffd73b4" className="testimanial-full-width-wrapper">
            {testimonialsTop.map((testimonial, index) => (
              <div key={index} className={`testimon-wrapper ${index % 2 === 1 ? 'bg-color' : ''}`}>
                <img src="images/star-20images.png" loading="lazy" alt="icon" />
                <p className="testimonials-text">{testimonial.text}</p>
                <p className="short-paragraph mobile-align-left">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bottom-testimonial">
          <div data-w-id="292c33d3-a095-4554-ab51-d56925c9759f" className="bottom-testimon-full-width-wrap">
            {testimonialsBottom.map((testimonial, index) => (
              <div key={index} className={`testimon-wrapper ${index % 2 !== 1 ? 'bg-color' : ''}`}>
                <img src="images/star-20images.png" loading="lazy" alt="icon" />
                <p className="testimonials-text">{testimonial.text}</p>
                <p className="short-paragraph mobile-align-left">{testimonial.author}</p>
              </div>
            ))}
          </div>
          <div data-w-id="23ba6d33-265d-4503-4598-66c22a995bd2" className="bottom-testimon-full-width-wrap">
            {testimonialsBottom.map((testimonial, index) => (
              <div key={index} className={`testimon-wrapper ${index % 2 !== 1 ? 'bg-color' : ''}`}>
                <img src="images/star-20images.png" loading="lazy" alt="icon" />
                <p className="testimonials-text">{testimonial.text}</p>
                <p className="short-paragraph mobile-align-left">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
