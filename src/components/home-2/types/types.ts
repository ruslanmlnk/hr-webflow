export type PricingPlan = {
  title: string;
  subtitle: string;
  items: string[];
};

export type PricingPlansProps = {
  animation?: "webflow" | "inview" | "none";
  plans: PricingPlan[];
};

export type ExpertiseCard = {
  title: string;
  description: string;
  icon: string;
};

export type Home2WhyJobboardSectionProps = {
  cards: ExpertiseCard[];
};

export type TeamMember = {
  name: string;
  position: string;
  image: string;
  imageAlt?: string;
  imageClassName?: string;
  infoCardColor?: string;
};

export type Home2LeadershipSectionProps = {
  leadership: TeamMember[];
  team: TeamMember[];
};

// types.ts
export interface Testimonial {
  text: string;
  author: string;
}

export interface Home2TestimonialsSectionProps {
  titleTag?: string; // TESTIMONIALS
  mainTitle: string; // Our happy users...
  description: string;
  testimonialsTop: Testimonial[];      // перша велика стрічка
  testimonialsMiddle: Testimonial[];   // друга стрічка
  testimonialsBottom: Testimonial[];   // третя стрічка
}
