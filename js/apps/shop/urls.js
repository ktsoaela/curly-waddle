import ShopHome from './views/shopHome.js';
import ProductDetail from './views/productDetail.js';
import ServiceDetail from './views/serviceDetail.js';

const shopRoutes = {
    "/shop": ShopHome,
    "/shop/p/:id": ProductDetail,
    "/shop/s/:id": ServiceDetail
};

export default shopRoutes;
