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


