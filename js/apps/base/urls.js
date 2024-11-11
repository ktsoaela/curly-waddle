import Home from "./views/home.js";
import About from './views/about.js'
import Contact from './views/contact.js'

const baseRoutes = {
    "/": Home,
    "/about": About,
    "/contact": Contact,
};

export default baseRoutes;
