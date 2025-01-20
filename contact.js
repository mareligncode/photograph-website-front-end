document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const statusMessage = document.getElementById('message-status');

    // Simple validation for required fields
    if (name && email && message) {
        // You can replace this with your form submission logic (AJAX, API, etc.)
        statusMessage.innerHTML = `<p style="color: green;">Thank you, ${name}! Your message has been sent.</p>`;

        // Clear form fields
        document.getElementById('contact-form').reset();
    } else {
        statusMessage.innerHTML = `<p style="color: red;">Please fill in all fields.</p>`;
    }
});
