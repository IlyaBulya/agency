document.addEventListener("DOMContentLoaded", () => {
    const consultationForm = document.getElementById('consultationForm');
    consultationForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const businessName = document.getElementById('businessName').value;
        const email = document.getElementById('email').value;
        const issue = document.getElementById('issue').value;

        if (businessName && email && issue) {
            alert('Thank you for booking a consultation, ' + businessName + '! We will get back to you soon.');
            consultationForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('emailContact').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert('Thank you for contacting us, ' + name + '! We will get back to you soon.');
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
});
