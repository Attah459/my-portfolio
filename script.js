document.addEventListener("DOMContentLoaded", () => {
  const toggleButtons = document.querySelectorAll(".toggle-btn");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const details = button.nextElementSibling;

      if (details.classList.contains("hidden")) {
        details.classList.remove("hidden");
        button.textContent = "Hide Details";
      } else {
        details.classList.add("hidden");
        button.textContent = "Show Details";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Stop form from submitting until validation passes

    // Clear out any old error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";

    let isValid = true;

    // Name validation
    const name = document.getElementById("name").value.trim();
    if (name === "") {
      document.getElementById("nameError").textContent = "Name is required.";
      isValid = false;
    }

    // Email validation
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent = "Enter a valid email.";
      isValid = false;
    }

    // Message validation
    const message = document.getElementById("message").value.trim();
    if (message === "") {
      document.getElementById("messageError").textContent = "Message can't be empty.";
      isValid = false;
    }

    if (isValid) {
      alert("Form submitted successfully!");
      form.reset(); // Clearing out the form
    }
  });
});





