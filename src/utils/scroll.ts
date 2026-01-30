export const scrollToContactForm = (e: React.MouseEvent) => {
  e.preventDefault();
  e.stopPropagation();

  const anchor = document.getElementById("contact-form");
  if (!anchor) return;

  const lenis = (window as any).lenis;
  if (!lenis) return;

  console.log("Scrolling to contact form...");

  // Топ елемента відносно документа
  const elementTop = anchor.offsetTop;

  // Скролимо до верху елемента
  lenis.scrollTo(elementTop, {
    duration: 1.2,
    easing: (t: number) => 1 - Math.pow(1 - t, 3),
  });
};
if (typeof window !== "undefined") {
  (window as any).Webflow ||= [];
  (window as any).Webflow.push(() => {
    const jq = (window as any).jQuery ?? (window as any).$;
    jq?.('a[href*="#"]').off('click.wf-smoothscroll');
  });
}