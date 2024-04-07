document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        // Display pop-up message
        alert('Thanks for using our service. \nYour response has been recorded. We will contact you in a minute.');
        // Optionally, you can clear the form fields or perform other actions here
    });
});
