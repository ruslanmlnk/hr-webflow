export const scrollToContactForm = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const anchor = document.getElementById("contact-form-anchor");
    if (!anchor) return;

    const lenis = (window as any).lenis;
    if (!lenis) return;

    // 🔥 реальна висота viewport (мобілка!)
    const viewportHeight =
        window.visualViewport?.height || window.innerHeight;

    const rect = anchor.getBoundingClientRect();
    const scrollTop = window.scrollY || window.pageYOffset;

    const targetY =
        scrollTop +
        rect.top -
        viewportHeight / 2;

    lenis.stop();
    lenis.scrollTo(targetY, {
        duration: 1.1,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
    });
    lenis.start();
};
