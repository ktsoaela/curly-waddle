import Home from './views/home.js';
import About from './views/about.js';
import Contact from './views/contact.js';

const routes = {
    "/": Home,
    "/about": About,
    "/contact": Contact
};

export function router() {
    const path = window.location.pathname;
    const view = routes[path] || Home; // Default to Home if route not found
    document.getElementById("app").innerHTML = view();
}
