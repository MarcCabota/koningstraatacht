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