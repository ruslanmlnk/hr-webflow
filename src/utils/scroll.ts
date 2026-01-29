export const scrollToContactForm = (e: React.MouseEvent) => {
  e.preventDefault();
  e.stopPropagation();

  const anchor = document.getElementById("contact-form");
  if (!anchor) return;

  const lenis = (window as any).lenis;
  if (!lenis) return;

  console.log("Scrolling to bottom of contact form...");

  // Висота елемента
  const elementHeight = anchor.offsetHeight;

  // Позиція верху елемента відносно документа
  const elementTop = anchor.offsetTop;

  // Цільова позиція — низ елемента
  const targetPosition = elementTop + elementHeight;

  lenis.scrollTo(targetPosition, {
    duration: 1.2,
    easing: (t: number) => 1 - Math.pow(1 - t, 3),
  });
};
