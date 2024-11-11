import baseRoutes from "../apps/base/urls";
import blogRoutes from '../apps/blog/urls.js';
import shopRoutes from '../apps/shop/urls.js';

const routes = {
    ...baseRoutes,
    ...blogRoutes,
    ...shopRoutes,
};

export default routes;
