//layout
import Headeronly from '../layouts/HeaderOnly';
import routes from '../config/routes';
//pages
import Home from '../Pages/Home';
import Following from '../Pages/Following';
import Upload from '../Pages/Upload';
import Profile from '../Pages/Profile';
import Search from '../Pages/Search';
const publicRouter = [
    { path: routes.home, component: Home },
    { path: routes.following, component: Following },
    { path: routes.profile, component: Profile },
    { path: routes.upload, component: Upload, layout: Headeronly },
    { path: routes.search, component: Search, layout: null },
];

const privateRouter = [];

export { publicRouter, privateRouter };
