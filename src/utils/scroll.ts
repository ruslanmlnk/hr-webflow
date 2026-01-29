export const scrollToContactForm = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const anchor = document.getElementById("contact-form");
    if (!anchor) return;

    const lenis = (window as any).lenis;
    if (!lenis) return;

    console.log("Scrolling to contact form...");

    lenis.scrollTo(anchor, {
        duration: 1.1,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
    });
};
