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
      <a href="https://www.instagram.com/hrloom.agency/?hl=ru" target="_blank" className="contact-social-card" rel="noreferrer">
        <div className="contact-social-card-inner">
          <div className="contact-social-card-icon" aria-hidden="true">
            <img src="/socials/instagram.svg" alt="" className="contact-social-card-svg" />
          </div>
          <div className="contact-social-card-text">{instagramHandle}</div>
        </div>
      </a>
      <a href="https://www.tiktok.com/@hrloom.agency" target="_blank" className="contact-social-card" rel="noreferrer">
        <div className="contact-social-card-inner">
          <div className="contact-social-card-icon" aria-hidden="true">
            <img src="/socials/tiktok.svg" alt="" className="contact-social-card-svg" />
          </div>
          <div className="contact-social-card-text">{tiktokHandle}</div>
        </div>
      </a>
      <a href="https://t.me/HRLoomAgency" target="_blank" className="contact-social-card" rel="noreferrer">
        <div className="contact-social-card-inner">
          <div className="contact-social-card-icon" aria-hidden="true">
            <img src="/socials/telegram.svg" alt="" className="contact-social-card-svg" />
          </div>
          <div className="contact-social-card-text">{telegramHandle}</div>
        </div>
      </a>
      <a href={`mailto:${email}`} className="contact-social-card">
        <div className="contact-social-card-inner">
          <div className="contact-social-card-icon" aria-hidden="true">
            <img src="/socials/post.svg" alt="" className="contact-social-card-svg" />
          </div>
          <div className="contact-social-card-text">{email}</div>
        </div>
      </a>
    </div>
  );
}
