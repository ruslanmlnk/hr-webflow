import TwoColTitle from "./TwoColTitle";
import type { Home2LeadershipSectionProps } from "../types/types";

export default function Home2LeadershipSection({ leadership, team }: Home2LeadershipSectionProps) {
  return (
    <section id="team" className="section without-space">
      <div className="base-container w-container">
        <TwoColTitle
          topTitle="TEAM"
          title="A team of"
          titleColor="professional recruiters"
          description="We are a team of recruiters with experience in both agency and in-house hiring. Each specialist focuses on their domain and communicates effectively with both candidates and business leaders"
        />

        <div className="section-title-wrapper">
          <h2 data-w-id="2c9c6a06-707e-b1ff-a965-59cb79a785b9" data-ix-inview className="section-title leadership-title ix-fade-up">
            Our leadership team
          </h2>
        </div>

        <div className="w-layout-grid team-grid-large">
          {leadership.map((member, index) => (
            <div
              key={`${member.name}-${index}`}
              data-ix-inview
              className={`team-card ix-fade-up ix-delay-${index + 1}`}
              style={member.infoCardColor ? { background: member.infoCardColor } : undefined}
            >
              <img
                src={member.image}
                loading="lazy"
                alt={member.imageAlt ?? "team image"}
                className={`team-card-image${member.imageClassName ? ` ${member.imageClassName}` : ""}`}
              />
              <div className="team-card-content-wrapper">
                <h4 className="team-member-title">{member.name}</h4>
                <p className="team-member-position">{member.position}</p>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="w-layout-grid team-grid-large col4">
          {team.map((member, index) => (
            <div
              key={`${member.name}-secondary-${index}`}
              data-ix-inview
              className={`team-card ix-fade-up ix-delay-${index + 1}`}
              style={member.infoCardColor ? { background: member.infoCardColor } : undefined}
            >
              <img
                src={member.image}
                loading="lazy"
                alt={member.imageAlt ?? "team image"}
                className={`team-card-image${member.imageClassName ? ` ${member.imageClassName}` : ""}`}
              />
              <div className="team-card-content-wrapper">
                <h4 className="team-member-title">{member.name}</h4>
                <p className="team-member-position">{member.position}</p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
