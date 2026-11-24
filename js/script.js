// Mobile navigation, footer year and contact form submission.
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-btn");
  const navigation = document.getElementById("navigation");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.textContent = isOpen ? "×" : "☰";
    });
    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navigation.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.textContent = "☰";
      });
    });
  }

  document.querySelectorAll(".year").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const formMessage = document.getElementById("form-message");
        const submitButton = contactForm.querySelector('button[type="submit"]');

        submitButton.textContent = "Message Sent!";
        submitButton.disabled = true;

        formMessage.textContent =
            "✓ Thank you! Your message has been submitted successfully.";

        formMessage.style.color = "green";
        formMessage.style.backgroundColor = "#e8f5e9";
        formMessage.style.padding = "12px";
        formMessage.style.borderRadius = "6px";

        contactForm.reset();

        setTimeout(function() {
            submitButton.textContent = "Send Message";
            submitButton.disabled = false;
        }, 3000);
    });
}
  });
});
