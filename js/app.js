import { navigateTo } from './core/router.js';

// Handle navigation on initial load and link clicks
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (e) => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    router(); // Load the initial route
});
