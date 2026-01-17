type Props = {
  instagramHandle?: string;
  tiktokHandle?: string;
  telegramHandle?: string;
  email?: string;
};

export default function ContactUs1SocialCards({
  instagramHandle = "hrloom.agency",
  tiktokHandle = "hrloom.agency",
  telegramHandle = "@HRLoomAgency",
  email = "hrloom.agency@gmail.com",
}: Props) {
  return (
    <div className="contact-social-cards">
      <a href="https://www.instagram.com/" target="_blank" className="contact-social-card" rel="noreferrer">
        <div className="contact-social-card-inner">
          <div className="contact-social-card-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="contact-social-card-svg" role="img">
              <path
                fill="currentColor"
                d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 4a5 5 0 1 1 0 10a5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6Zm5.25-.75a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5Z"
              />
            </svg>
          </div>
          <div className="contact-social-card-text">{instagramHandle}</div>
        </div>
      </a>
      <a href="https://www.tiktok.com/" target="_blank" className="contact-social-card" rel="noreferrer">
        <div className="contact-social-card-inner">
          <div className="contact-social-card-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="contact-social-card-svg" role="img">
              <path
                fill="currentColor"
                d="M16.7 2c.3 2.6 1.8 4.7 4.3 5.6V11c-1.6-.1-3-.6-4.3-1.5v6.5c0 4.1-3.3 7.4-7.4 7.4S2 20.1 2 16s3.3-7.4 7.4-7.4c.5 0 1 .1 1.5.2v3.7c-.5-.2-1-.4-1.5-.4c-2.1 0-3.9 1.7-3.9 3.9S7.3 19.9 9.4 19.9s4-1.6 4-4V2h3.3Z"
              />
            </svg>
          </div>
          <div className="contact-social-card-text">{tiktokHandle}</div>
        </div>
      </a>
      <a href="https://t.me/" target="_blank" className="contact-social-card" rel="noreferrer">
        <div className="contact-social-card-inner">
          <div className="contact-social-card-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="contact-social-card-svg" role="img">
              <path
                fill="currentColor"
                d="M21.7 3.3a1.5 1.5 0 0 0-1.6-.2L3.3 10.2a1.5 1.5 0 0 0 .1 2.8l4.2 1.4l1.6 5a1.5 1.5 0 0 0 2.4.7l2.4-2l4.4 3.2a1.5 1.5 0 0 0 2.4-.9l2.3-15.3a1.5 1.5 0 0 0-.7-1.8ZM9.3 13.7l8.9-7.1l-6.8 8.6c-.1.1-.2.3-.2.5l-.2 2.9l-1.1-3.5a1.5 1.5 0 0 0-.9-.9l-3.2-1.1l12-5.1l-9.4 7.6c-.2.1-.3.4-.2.6Z"
              />
            </svg>
          </div>
          <div className="contact-social-card-text">{telegramHandle}</div>
        </div>
      </a>
      <a href={`mailto:${email}`} className="contact-social-card">
        <div className="contact-social-card-inner">
          <div className="contact-social-card-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="contact-social-card-svg" role="img">
              <path
                fill="currentColor"
                d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 4v10h16V8l-8 5L4 8Zm0-2l8 5l8-5H4Z"
              />
            </svg>
          </div>
          <div className="contact-social-card-text">{email}</div>
        </div>
      </a>
    </div>
  );
}
