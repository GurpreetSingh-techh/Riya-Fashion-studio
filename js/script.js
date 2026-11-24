// =====================================
// MOBILE NAVIGATION
// =====================================

const menuButton = document.querySelector(".menu-btn");
const navigation = document.getElementById("navigation");

if (menuButton && navigation) {
    menuButton.addEventListener("click", function () {
        const isOpen = navigation.classList.toggle("active");

        menuButton.setAttribute("aria-expanded", isOpen);
    });
}


// =====================================
// AUTOMATIC COPYRIGHT YEAR
// =====================================

document.querySelectorAll(".year").forEach(function (element) {
    element.textContent = new Date().getFullYear();
});


// =====================================
// CONTACT FORM - SEND EMAIL
// =====================================

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const submitButton = contactForm.querySelector('button[type="submit"]');
        const formMessage = document.getElementById("form-message");

        // Show sending message
        submitButton.disabled = true;
        submitButton.textContent = "Sending...";

        formMessage.style.display = "block";
        formMessage.style.color = "#856404";
        formMessage.textContent = "Please wait, sending your message...";

        // Collect form information
        const formData = new FormData(contactForm);

        try {

            // Send information to FormSubmit
            const response = await fetch(
                "https://formsubmit.co/ajax/tanu4022@gmail.com",
                {
                    method: "POST",
                    body: formData,
                    headers: {
                        "Accept": "application/json"
                    }
                }
            );

            const result = await response.json();

            if (response.ok && String(result.success).toLowerCase() === "true") {

                // Success message
                formMessage.style.color = "green";
                formMessage.textContent =
                    "✓ Your message has been sent successfully! Thank you for contacting Riya Fashion Studio.";

                // Clear the form
                contactForm.reset();

            } else {

                throw new Error(result.message || "Message could not be sent.");

            }

        } catch (error) {

            console.error("Contact form error:", error);

            // Error message
            formMessage.style.color = "red";
            formMessage.textContent =
                "Sorry! Your message could not be sent. Please try again later.";

        }

        // Restore button
        submitButton.disabled = false;
        submitButton.innerHTML = 'Send Enquiry <span>→</span>';

    });

}
