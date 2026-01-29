export const scrollToContactForm = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const el = document.getElementById("contact-form");
    if (!el) return;

    const lenis = (window as any).lenis;
    if (!lenis) return;

    // реальна позиція елемента на сторінці
    const rect = el.getBoundingClientRect();
    const scrollTop = window.scrollY || window.pageYOffset;

    // 🔥 центр елемента
    const elementCenterY = scrollTop + rect.top + rect.height / 2;

    // 🔥 центр viewport
    const viewportCenterY = scrollTop + window.innerHeight / 2;

    const targetY = elementCenterY - window.innerHeight / 2;

    lenis.stop();
    lenis.scrollTo(targetY, {
        duration: 1.2,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
    });
    lenis.start();
};
