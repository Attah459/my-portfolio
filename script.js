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



// Dark Mode Toggle
document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("darkModeToggle");
  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    // Optionally, change button text
    if (document.body.classList.contains("dark-mode")) {
      darkModeToggle.textContent = "Light Mode";
    } else {
      darkModeToggle.textContent = "Dark Mode";
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const revealSections = () => {
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        section.classList.add("visible");
      }
    });
  };
  window.addEventListener("scroll", revealSections);
  revealSections();
});





document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";

    let isValid = true;

   
    const name = document.getElementById("name").value.trim();
    if (name === "") {
      document.getElementById("nameError").textContent = "Name is required.";
      isValid = false;
    }

    
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent = "Enter a valid email.";
      isValid = false;
    }

    
    const message = document.getElementById("message").value.trim();
    if (message === "") {
      document.getElementById("messageError").textContent = "Message can't be empty.";
      isValid = false;
    }

    if (isValid) {
      alert("Form submitted successfully!");
      form.reset(); 
    }
  });
});





