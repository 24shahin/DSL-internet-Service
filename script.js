document
  .getElementById("partner-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const company = document.getElementById("company").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // Here you would typically send this data to your server
    console.log("Form submitted:", { name, company, email, phone, message });

    // Show success message (in a real implementation, you'd want something more robust)
    alert(
      `Thank you, ${name}! We've received your partnership request and will contact you shortly.`
    );

    // Reset form
    this.reset();
  });

// Simple testimonial slider functionality
const dots = document.querySelectorAll(".slider-dot");
dots.forEach((dot) => {
  dot.addEventListener("click", function () {
    dots.forEach((d) => d.classList.remove("active"));
    this.classList.add("active");
    // In a full implementation, you would switch the testimonial content here
  });
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");

mobileMenuBtn.addEventListener("click", function () {
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});

// Handle window resize to ensure proper menu display
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    navLinks.style.display = "flex";
  } else {
    navLinks.style.display = "none";
  }
});
