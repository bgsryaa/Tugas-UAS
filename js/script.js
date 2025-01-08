function updateGreeting() {
    const hour = new Date().getHours();
    let greeting;
    
    if (hour < 12) {
        greeting = "Selamat Pagi! 🌅";
    } else if (hour < 15) {
        greeting = "Selamat Siang! ☀️";
    } else if (hour < 18) {
        greeting = "Selamat Sore! 🌤";
    } else {
        greeting = "Selamat Malam! 🌙";
    }
    
    const greetingElement = document.getElementById('greeting');
    if (greetingElement) {
        greetingElement.textContent = greeting;
    }
}


document.addEventListener('DOMContentLoaded', function() {
    updateGreeting();
    
    // Update greeting every minute
    setInterval(updateGreeting, 60000);
    
    // Form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Terima kasih! Pesan Anda telah terkirim.');
            this.reset();
        });
    }
});