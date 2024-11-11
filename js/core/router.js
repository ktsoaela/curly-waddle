import routes from './urls.js';

function getRoute(path) {
    const routeKeys = Object.keys(routes);
    for (const key of routeKeys) {
        const regex = new RegExp(`^${key.replace(/:\w+/g, "(\\w+)")}$`); // Match dynamic segments properly
        const match = path.match(regex);
        if (match) {
            const params = {};
            const keys = key.match(/:\w+/g) || [];
            keys.forEach((key, index) => {
                params[key.replace(':', '')] = match[index + 1]; // Capture dynamic parts
            });
            return { view: routes[key], params };
        }
    }
    return { view: () => "<h1>404 Not Found</h1>" };
}

export function router() {
    const path = window.location.pathname;
    const { view, params } = getRoute(path);
    document.getElementById("app").innerHTML = view(params);
}

export function navigateTo(url) {
    history.pushState(null, null, url);
    router();
}

window.addEventListener("popstate", router);
