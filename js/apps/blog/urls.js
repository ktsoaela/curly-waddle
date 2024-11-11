import BlogHome from './views/blogHome.js';
import PostDetail from './views/postDetail.js';

const blogRoutes = {
    "/blog": BlogHome,
    "/blog/:id": PostDetail // This could represent a post detail page
};

export default blogRoutes;
