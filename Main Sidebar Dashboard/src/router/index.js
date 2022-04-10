import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Contacts from '../views/Contacts.vue';
import Cart from '../views/Cart.vue';
import Offers from '../views/Offers.vue';
import Campaigns from '../views/Campaigns.vue';
import Admins from '../views/Admins.vue';
import JqueryTable from '../components/JqueryTable.vue';

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/offers',
    name: 'Offers',
    component: Offers,
  },
  {
    path: '/campaigns',
    name: 'Campaigns',
    component: Campaigns,
  },
  {
    path: '/admins',
    name: 'Admins',
    component: Admins,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { layout: 'MainLayout' },
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts,
    meta: { layout: 'MainLayout' },
  },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
