import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Signin',
    component: () => import('@/views/page/SignIn.vue'),
  },
  {
    path: '/forgotpassword',
    name: 'forgotPassword',
    component: () => import('@/views/page/ForgotPassword.vue'),
  },
  {
    path: '/resetpassword',
    name: 'resetpassword',
    component: () => import('@/views/page/ResetPassword.vue'),
  },
  {
    path: '/app',
    name: 'Home',
    component: () => import('@/views/page/Home.vue'),
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/page/Dashboard.vue'),
      },
      {
        path: 'analytics',
        name: 'Analytics',
        component: () => import('@/views/page/Analytics.vue'),
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import('@/views/page/Cart.vue'),
      },
      {
        path: 'offers',
        name: 'Offers',
        component: () => import('@/views/page/Offers.vue'),
      },
      {
        path: 'compaings',
        name: 'Compaing',
        component: () => import('@/views/page/Compaing.vue'),
      },
      {
        path: 'members',
        name: 'Members',
        component: () => import('@/views/page/Member.vue'),
      },
      {
        path: 'audience',
        name: 'Audience',
        component: () => import('@/views/page/Audience.vue'),
      },
      {
        path: 'addnewaudience',
        name: 'AddNewAudience',
        component: () => import('@/views/page/AddNewAudience.vue'),
      },
      {
        path: 'admin',
        name: 'Admin',
        component: () => import('@/views/page/Admin.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router
