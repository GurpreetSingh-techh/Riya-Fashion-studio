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

  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const status = document.getElementById("form-message");
    const button = form.querySelector('button[type="submit"]');
    const originalText = button.innerHTML;
    status.className = "form-message is-sending";
    status.textContent = "Sending your message…";
    button.disabled = true;
    button.textContent = "Sending…";

    try {
      const response = await fetch("https://formsubmit.co/ajax/riyafashion123@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form).entries()))
      });

      let result = {};
      try { result = await response.json(); }
      catch (_) { throw new Error("The email service returned an unexpected response. Please try again."); }

      const accepted = result.success === true || String(result.success).toLowerCase() === "true";
      if (!response.ok || !accepted) {
        throw new Error(result.message || "The email service could not accept your message. Please try again.");
      }

      status.className = "form-message is-success";
      status.textContent = "✓ Thank you! Your message has been sent successfully. Riya Fashion Studio will be in touch soon.";
      form.reset();
    } catch (error) {
      console.error("Contact form submission failed:", error);
      status.className = "form-message is-error";
      status.textContent = error.message || "Sorry, we could not send your message. Please try again or email riyafashion123@gmail.com.";
    } finally {
      button.disabled = false;
      button.innerHTML = originalText;
    }
  });
});
