import { serializeContactForm } from "../serializers/contactSerializer.js";

export default function ContactForm() {
    return `
    <form id="contactForm">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>
      <br/>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
      <br/>
      <button type="submit">Submit</button>
    </form>
  `;
}

// Event listener for form submission
document.addEventListener("submit", (e) => {
    if (e.target.id === "contactForm") {
        e.preventDefault();
        const formData = serializeContactForm(new FormData(e.target));
        console.log("Form Submitted:", formData);
    }
});
