const envelope = document.querySelector('.envelope');
const flap = document.querySelector('.flap');
const popout = document.querySelector('.popout');

envelope.addEventListener('click', () => {
    flap.classList.toggle('open');
    if (flap.classList.contains('open')) {
        popout.style.display = 'block';
    } else {
        popout.style.display = 'none';
    }
});