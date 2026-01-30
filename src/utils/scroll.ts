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
window.Webflow ||= [];
window.Webflow.push(() => {
  // прибирає webflow smoothscroll на якорях
  window.jQuery?.('a[href*="#"]').off('click.wf-smoothscroll');
});
export { };

declare global {
  interface Window {
    Webflow?: Array<(arg?: unknown) => void>;
    jQuery?: (selector: string) => { off: (events?: string) => void };
    $?: (selector: string) => { off: (events?: string) => void };
    lenis?: unknown;
  }
}
