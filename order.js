document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;
    const message = document.getElementById('message').value;
    const statusMessage = document.getElementById('order-status');

    // Simple validation for required fields
    if (name && email && product && quantity) {
        // You can replace this with your order submission logic (AJAX, API, etc.)
        statusMessage.innerHTML = `<p style="color: green;">Thank you, ${name}! Your order for ${quantity} ${product}(s) has been placed successfully.</p>`;

        // Clear form fields
        document.getElementById('order-form').reset();
    } else {
        statusMessage.innerHTML = `<p style="color: red;">Please fill in all required fields.</p>`;
    }
});
