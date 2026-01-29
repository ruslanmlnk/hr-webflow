export const scrollToContactForm = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const contactForm = document.getElementById("contact-form");
    if (!contactForm) return;

    const lenis = (window as any).lenis;
    if (!lenis) return;

    const height = window.innerHeight;
    const formHeight = contactForm.offsetHeight;

    const offset = -((height - formHeight) / 2);

    // 🔥 головне
    lenis.stop();              // зупиняємо будь-який поточний scroll
    lenis.scrollTo(contactForm, {
        offset,
        immediate: false,      // не force
        duration: 1.2,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
    });
    lenis.start();
};
