const experiences = document.querySelectorAll('.experience');

experiences.forEach(experience => {

    experience.addEventListener('touchstart', () => {
        experiences.forEach(item => {
            item.classList.remove('touch-active');
        });

        experience.classList.add('touch-active');
    }, { passive: true });

    experience.addEventListener('touchend', () => {
        experience.classList.remove('touch-active');
    }, { passive: true });

    experience.addEventListener('touchcancel', () => {
        experience.classList.remove('touch-active');
    }, { passive: true });

});

/* =========================
   EXPERIENCE PAGE REVEAL
========================= */

const revealElements = document.querySelectorAll('.experience-page .reveal');

if (revealElements.length > 0) {

    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }

            });
        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });

}