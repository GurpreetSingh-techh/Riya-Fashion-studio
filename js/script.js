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
// DEMO CONTACT FORM
// =====================================

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const submitButton = contactForm.querySelector('button[type="submit"]');
        const formMessage = document.getElementById("form-message");

        // Show sending message
        submitButton.disabled = true;
        submitButton.textContent = "Submitting...";

        formMessage.style.display = "block";
        formMessage.style.color = "#856404";
        formMessage.textContent = "Please wait... Submitting your enquiry.";

        // Simulate form submission
        setTimeout(function () {

            // Show success message
            formMessage.style.color = "green";

            formMessage.textContent =
                "✓ Thank you for contacting Riya Fashion Studio! Your enquiry has been submitted successfully. We appreciate your interest.";

            // Clear the form
            contactForm.reset();

            // Restore button
            submitButton.disabled = false;
            submitButton.innerHTML = 'Send Enquiry <span>→</span>';

        }, 1200);

    });

}
