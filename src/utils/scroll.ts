export const scrollToContactForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactForm = document.getElementById("contact-form");
    if (!contactForm) return;

    if ((window as any).lenis) {
        const height = window.innerHeight;
        const formHeight = contactForm.offsetHeight;
        // Calculate offset to center the element
        // We want: targetPos + offset = currentScroll + (windowHeight/2 - elementHeight/2)
        // Actually lenis.scrollTo(target, {offset}) scrolls to target.top + offset.
        // We want target.top to be at (windowHeight - formHeight) / 2 from top of viewport.
        // So we want to scroll to target.top - (windowHeight - formHeight) / 2.
        // Thus offset should be - (windowHeight - formHeight) / 2.
        const offset = -1 * (height - formHeight) / 2;
        (window as any).lenis.scrollTo(contactForm, { offset });
    } else {
        contactForm.scrollIntoView({ behavior: "smooth", block: "center" });
    }
};
