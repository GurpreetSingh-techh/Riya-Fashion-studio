// =====================================
// RIYA FASHION STUDIO - JAVASCRIPT
// =====================================


// MOBILE NAVIGATION

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

}


// CURRENT YEAR

const currentYear = document.getElementById("current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// =====================================
// CONTACT FORM - EMAIL SUBMISSION
// =====================================

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const submitButton = document.getElementById("submit-btn");
        const formMessage = document.getElementById("form-message");

        // Show sending message

        submitButton.disabled = true;
        submitButton.textContent = "Sending...";

        formMessage.style.display = "block";
        formMessage.style.backgroundColor = "#fff3cd";
        formMessage.style.color = "#856404";

        formMessage.textContent = "Please wait, sending your message...";


        // Collect visitor information

        const formData = new FormData(contactForm);

        formData.append(
            "_subject",
            "New Enquiry - Riya Fashion Studio"
        );


        try {

            // Send message to Tanu's Gmail through FormSubmit

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


            // Check submission result

            if (
                response.ok &&
                String(result.success).toLowerCase() === "true"
            ) {

                formMessage.style.backgroundColor = "#d4edda";
                formMessage.style.color = "#155724";

                formMessage.textContent =
                    "✓ Your message has been sent successfully! Thank you for contacting Riya Fashion Studio.";

                contactForm.reset();

            } else {

                throw new Error(
                    result.message || "Unable to send your message."
                );

            }


        } catch (error) {

            console.error("Contact form error:", error);

            formMessage.style.backgroundColor = "#f8d7da";
            formMessage.style.color = "#721c24";

            formMessage.textContent =
                "Sorry! Your message could not be sent. Please try again later.";

        }


        // Restore button

        submitButton.disabled = false;
        submitButton.textContent = "Send Message";

    });

}
