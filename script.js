document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Error message elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    
    let isValid = true;

    // Clear previous errors
    nameError.classList.add('hidden');
    emailError.classList.add('hidden');
    messageError.classList.add('hidden');

    // Validate name
    if (!name) {
        nameError.classList.remove('hidden');
        isValid = false;
    }

    // Validate email using a regular expression
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
        emailError.classList.remove('hidden');
        isValid = false;
    }

    // Validate message
    if (!message) {
        messageError.classList.remove('hidden');
        isValid = false;
    }

    // If the form is valid, display a success message or take appropriate action
    if (isValid) {
        alert('Thank you for your message! We will get back to you soon.');
        document.getElementById('contactForm').reset(); // Clear the form
    }
});







