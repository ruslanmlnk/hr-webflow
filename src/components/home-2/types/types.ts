export type PricingPlan = {
  title: string;
  subtitle: string;
  items: string[];
};

export type PricingPlansProps = {
  animation?: "webflow" | "inview" | "none";
  plans: PricingPlan[];
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
