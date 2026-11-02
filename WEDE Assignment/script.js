document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("open");
      const expanded = nav.classList.contains("open");
      menuToggle.setAttribute("aria-expanded", String(expanded));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 650) {
          nav.classList.remove("open");
          menuToggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  if (contactForm && formMessage) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const enquiryType = document.getElementById("type").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !enquiryType || !message) {
        formMessage.textContent = "Please complete all fields before submitting.";
        formMessage.style.color = "#b00020";
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.style.color = "#b00020";
        return;
      }

      formMessage.textContent = `Thank you, ${name}! Your enquiry has been submitted successfully.`;
      formMessage.style.color = "#00754a";
      contactForm.reset();
    });
  }
});
