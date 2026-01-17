export default function ApplyPopup() {
  return (
    <div className="apply-pop-up">
      <div className="pop-up-contact-us">
        <div className="form-block-contacts w-form">
          <form id="wf-form-Name" name="wf-form-Name" data-name="Name" method="get" className="form" data-wf-page-id="64943f2a36915879aa1daee3" data-wf-element-id="ce6ec6aa-9506-a4b6-7684-7aa3ad40efbf">
            <div className="contact-us-input-wrapper">
              <div className="input-wrap">
                <input className="first-input w-input" maxLength="256" name="First-name" data-name="First-name" placeholder="First Name" type="text" id="First-name" required="" />
                <input className="second-input w-input" maxLength="256" name="Last-name" data-name="Last name" placeholder="Last name" type="text" id="Last-name" required="" />
              </div>
              <div className="input-wrap">
                <input className="third-input w-input" maxLength="256" name="Your-Email" data-name="Your Email" placeholder="Your Email" type="email" id="Your-Email" required="" />
                <input className="fourth-input w-input" maxLength="256" name="Your-Phone" data-name="Your Phone" placeholder="Your phone" type="tel" id="Your-Phone" required="" />
              </div>
            </div>
            <textarea id="Field-6" name="Field" maxLength="5000" data-name="Field" placeholder="Your text" required="" className="contacts-textarea w-input"></textarea>
            <input type="submit" data-wait="Please wait..." className="primary-button full-width-mobile w-button" value="Submit" />
          </form>
          <div className="success-message w-form-done">
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div className="error-message w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
        <div data-w-id="ce6ec6aa-9506-a4b6-7684-7aa3ad40efca" className="close-button"></div>
      </div>
    </div>
  );
}
