import { router } from './router.js';

// Handle navigation
document.addEventListener("DOMContentLoaded", () => {
    // Attach click events to links with data-link
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    // Load the initial route
    router();
});

function navigateTo(url) {
    history.pushState(null, null, url); // Update the URL without reloading
    router(); // Call router to update the view
}

// Handle back/forward navigation
window.addEventListener("popstate", router);
