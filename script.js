
const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
        //toggle.parentNode to access class faq
        toggle.parentNode.classList.toggle('active');
    });
});