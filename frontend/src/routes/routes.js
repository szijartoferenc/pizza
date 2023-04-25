import Dashboard from '../components/admin/Dashboard';
import Profile from '../components/admin/profile/Profile';
import Category from '../components/admin/category/Category';
import ViewCategory from '../components/admin/category/ViewCategory';
import EditCategory from '../components/admin/category/EditCategory';
import AddProduct from '../components/admin/product/AddProduct';
import ViewProduct from '../components/admin/product/ViewProduct';
import EditProduct from '../components/admin/product/EditProduct';
import Attribute from '../components/admin/attribute/Attribute';
import ViewAttribute from '../components/admin/attribute/ViewAttribute';
import EditAttribute from '../components/admin/attribute/EditAttribute';
import Attributevalue from '../components/admin/attribute/Attributevalue';
import ViewAttributevalue from '../components/admin/attribute/ViewAttributevalue';
import EditAttributevalue from '../components/admin/attribute/EditAttributevalue';
import Order from '../components/admin/order/Order';
import ViewOrders from '../components/admin/order/ViewOrders';
import ViewProfile from '../components/admin/profile/ViewProfile';
import EditProfile from '../components/admin/profile/EditProfile';


const routes = [
    { path: '/admin', exact: true, name: 'Admin' },
    { path: '/admin/dashboard', exact: true, name: 'Dashboard', component: Dashboard},
    { path: '/admin/add-category', exact: true, name: 'Category', component: Category},
    { path: '/admin/view-category', exact: true, name: 'ViewCategory', component: ViewCategory},
    { path: '/admin/edit-category/:id', exact: true, name: 'EditCategory', component: EditCategory},
    { path: '/admin/add-product', exact: true, name: 'AddProduct', component: AddProduct},
    { path: '/admin/view-product', exact: true, name: 'ViewProduct', component: ViewProduct},
    { path: '/admin/edit-product/:id', exact: true, name: 'EditProduct', component: EditProduct},
    { path: '/admin/profile', exact: true, name: 'Profile', component: Profile},
    { path: '/admin/view-profile', exact: true, name: 'ViewProfile', component: ViewProfile},
    { path: '/admin/edit-profile/:id', exact: true, name: 'EditProfile', component: EditProfile},
    { path: '/admin/add-attribute', exact: true, name: 'Attribute', component: Attribute},
    { path: '/admin/view-attribute', exact: true, name: 'ViewAttribute', component: ViewAttribute},
    { path: '/admin/edit-attribute/:id', exact: true, name: 'EditAttribute', component: EditAttribute},
    { path: '/admin/add-attributevalue', exact: true, name: 'Attributevalue', component: Attributevalue},
    { path: '/admin/view-attributevalue', exact: true, name: 'ViewAttributevalue', component: ViewAttributevalue},
    { path: '/admin/edit-attributevalue/:id', exact: true, name: 'EditAttributevalue', component: EditAttributevalue},
    { path: '/admin/orders', exact: true, name: 'Order', component: Order},
    { path: '/admin/view-orders', exact: true, name: 'ViewOrders', component: ViewOrders},
  ];

  export default routes