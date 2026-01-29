export const scrollToContactForm = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const anchor = document.getElementById("contact-form");
    if (!anchor) return;

    const lenis = (window as any).lenis;
    if (!lenis) return;

    console.log("Scrolling to contact form...");


    // 🔥 ДАЄМО WEBFLOW ЗАКІНЧИТИ АНІМАЦІЇ
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            const rect = anchor.getBoundingClientRect();
            const scrollTop = window.scrollY || window.pageYOffset;

            lenis.stop();
            lenis.scrollTo(scrollTop + rect.top, {
                duration: 1.1,
                easing: (t: number) => 1 - Math.pow(1 - t, 3),
            });
            lenis.start();
        });
    });
};
