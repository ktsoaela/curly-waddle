import routes from './urls.js';

function getRoute(path) {
    const routeKeys = Object.keys(routes);
    for (const key of routeKeys) {
        const regex = new RegExp(`^${key.replace(/:\w+/, "\\w+")}$`); // Simple regex for dynamic segments like "/blog/:id"
        if (regex.test(path)) {
            return { view: routes[key], params: path.match(regex).groups || {} };
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
