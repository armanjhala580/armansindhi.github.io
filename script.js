// Mobile Navigation
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");

    if (navLinks) {
        navLinks.classList.toggle("show");
    }
}


// Contact Form
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const course = document.getElementById("course").value;
        const message = document.getElementById("message").value.trim();

        if (name === "" || phone === "" || course === "" || message === "") {
            alert("Please fill in all the details.");
            return;
        }

        if (phone.length < 10) {
            alert("Please enter a valid phone number.");
            return;
        }

        alert(
            "Thank you, " + name +
            "! Your enquiry for " + course +
            " has been received. We will contact you soon."
        );

        contactForm.reset();
    });
}


// Close mobile menu after clicking a link
const menuLinks = document.querySelectorAll("#navLinks a");

menuLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        const navLinks = document.getElementById("navLinks");

        if (navLinks) {
            navLinks.classList.remove("show");
        }
    });
});


// Simple scroll animation
const cards = document.querySelectorAll(
    ".course-card, .feature, .owner-card, .info-card, .gallery-item"
);

const observer = new IntersectionObserver(
    function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    },
    {
        threshold: 0.1
    }
);

cards.forEach(function(card) {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(card);
});
