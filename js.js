// Change the custom greeting based on the time of day
const currentTime = new Date().getHours();
const greetingElement = document.getElementById('greeting');
if (currentTime < 12) {
    greetingElement.textContent = 'Good morning, my love!';
} else if (currentTime < 18) {
    greetingElement.textContent = 'Good afternoon, my love!';
} else {
    greetingElement.textContent = 'Good evening, my love!';
}

// Add event listeners for interactive love notes
const loveNotes = document.querySelectorAll('.love-note');
loveNotes.forEach(loveNote => {
    loveNote.addEventListener('click', () => {
        alert('You are my everything!, keep loving me');
    });
});

// Set up a countdown timer (example)
const countdownElement = document.getElementById('countdown');
const weddingDate = new Date('2024-06-01').getTime();
const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = weddingDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

// Update the countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Call the function once to initialize the countdown
