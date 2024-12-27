const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
// hero section
const muteButton = document.getElementById('mute-btn');
const muteIcon = document.getElementById('mute-icon');
const video = document.getElementById('bg-video');

muteButton.addEventListener('click', () => {
    if (video.muted) {
        video.muted = false;
        muteIcon.classList.remove('fa-volume-mute');
        muteIcon.classList.add('fa-volume-up');
    } else {
        video.muted = true;
        muteIcon.classList.remove('fa-volume-up');
        muteIcon.classList.add('fa-volume-mute');
    }
});

document.getElementById('current-year').textContent = new Date().getFullYear();