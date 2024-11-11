import ContactForm from "../forms/contactForm.js";

export default function Contact() {
    return `
    <h1>Contact</h1>
    <p>Get in touch with us here.</p>
     ${ContactForm()}
  `;
}
