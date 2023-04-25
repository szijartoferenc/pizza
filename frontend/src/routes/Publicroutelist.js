import Home from "../components/frontend/Home";
import About from "../components/frontend/About";
import Contact from "../components/frontend/Contact";
import Page403 from "../components/errors/Page403";
import Page404 from "../components/errors/Page404";
import Register from "../components/frontend/auth/Register";
import Login from "../components/frontend/auth/Login";
import ViewCategory from "../components/frontend/pizza/ViewCategory";
import ViewProduct from "../components/frontend/pizza/ViewProduct";
import ProductDetail from "../components/frontend/pizza/ProductDetail";
import Cart from "../components/frontend/Cart";
import Checkout from "../components/frontend/Checkout";
import Thankyou from "../components/frontend/thankyou";
import PrivacyPublicy from "../components/frontend/PrivacyPolicy";
import TermsCondition from "../components/frontend/TermsCondition";

const publicRoutesList = [
    { path: '/', exact: true, name: 'Home',  component: Home},
    { path: '/about', exact: true, name: 'About', component: About},
    {path: '/contact', exact: true, name: 'Contact', component: Contact},
    {path: '/403', exact: true, name: 'Page403', component: Page403},
    {path: '/404', exact: true, name: 'Page404', component: Page404},
    {path: '/login', exact: true, name: 'Login', component: Login},
    {path: '/register', exact: true, name: 'Register', component: Register},
    {path: '/pizza', exact: true, name: 'ViewCategory', component: ViewCategory},
    {path: '/pizza/:slug', exact: true, name: 'ViewProduct', component: ViewProduct},
    {path: '/pizza/:category/:product', exact: true, name: 'ProductDetail', component: ProductDetail},
    {path: '/cart', exact: true, name: 'Cart', component: Cart},
    {path: '/checkout', exact: true, name: 'Checkout', component: Checkout},
    {path: '/thankyou', exact: true, name: 'Thankyou', component: Thankyou},
    {path: '/privacypublicy', exact: true, name: 'PrivacyPublicy', component: PrivacyPublicy},
    {path: '/termscondition', exact: true, name: 'TermsCondition', component: TermsCondition},
    
  ];

  export default  publicRoutesList;
