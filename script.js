document.addEventListener('touchstart', () => {}, { passive: true });

const experiences = document.querySelectorAll('.experience');

experiences.forEach(experience => {

    experience.addEventListener('touchstart', () => {
        experience.classList.add('touch-active');
    }, { passive: true });

    experience.addEventListener('touchend', () => {
        experience.classList.remove('touch-active');
    }, { passive: true });

    experience.addEventListener('touchcancel', () => {
        experience.classList.remove('touch-active');
    }, { passive: true });

});