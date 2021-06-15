const h2 = document.querySelector('h2');
h2.addEventListener('mouseenter', () => {
    h2.classList.add('color');
})
h2.addEventListener('mouseleave', () => {
    h2.classList.remove('color');
})