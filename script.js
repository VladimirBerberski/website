document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    if (name && message) {
        document.getElementById("responseMessage").innerText = `Thank you, ${name}! Your message has been received.`;
    } else {
        document.getElementById("responseMessage").innerText = "Please fill out all fields.";
    }
});
