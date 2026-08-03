// Simple Form Handling & Interaction
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      
      // Feedback to user
      alert(`Thank you, ${name}! Your message has been sent successfully.`);
      
      // Reset form fields
      contactForm.reset();
    });
  }
});