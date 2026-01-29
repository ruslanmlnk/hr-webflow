export const scrollToContactForm = (e: React.MouseEvent) => {
  e.preventDefault();
  e.stopPropagation();

  const anchor = document.getElementById("contact-form");
  if (!anchor) return;

  const lenis = (window as any).lenis;
  if (!lenis) return;

  console.log("Scrolling to contact form...");

  // Використовуємо offsetTop відносно документа
  const targetPosition = anchor.offsetTop;

  lenis.scrollTo(targetPosition, {
    duration: 1.2,
    easing: (t: number) => 1 - Math.pow(1 - t, 3),
  });
};
