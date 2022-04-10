import { createRouter, createWebHashHistory } from 'vue-router';

import Admin from './User/Admin.vue';
import Login from './User/Login.vue';
import Profile from './User/Profile.vue';
import Dashboard from './Dashboard/Dashboard.vue';
import Cart from './Cart/Cart.vue';
import Recommendations from './Cart/CartRecommendation'
import ArticleAnalysis from './Articles/ArticleAnalysis.vue';
import CartComposition from './Products/CartComposition.vue';
import Organizations from './Orgs/Organizations.vue';
import Offers from './Offers/Offers.vue';
import Analytics from './Analytics/Products.vue';
import Audience from './Audience/Audience.vue';
//import Campaigns from './Campaigns/Campaigns.vue';
import Campaigns from './Campaigns/CampaignNew'
// import Members from './Members/Members.vue';
import Members from './Members/MembersNew.vue';
// import MemberDetail from './Members/MemberDetail.vue';
import MemberDetailNew from './Members/MemberDetailNew.vue';
import NotFound from './Core/404.vue';

const routes = [{
        path: "/admin/users",
        name: "Admin",
        component: Admin,
        beforeEnter: (to, from, next) => {
            if (router.$global.$ability.can('list', 'User')) {
                next();
            } else {
                next({ name: 'Profile' });
            }
        }
    },
    {
        path: "/admin/orgs",
        name: "Organizations",
        component: Organizations,
    },
    // {
    //     path: "/admin/offers",
    //     name: "Offers",
    //     component: Offers,
    // },
    {
        path: "/admin/audience",
        name: "Audience",
        component: Audience,
    },
    {
        path: "/admin/members",
        name: "Members",
        component: Members,
    },
    // {
    //     path: "/admin/members/:memberId/",
    //     name: "MemberDetail",
    //     component: MemberDetail,
    // },
    {
        path: "/Members/:memberId/",
        name: "MemberDetail",
        component: MemberDetailNew,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: '/analytics',
        name: 'Analytics',
        component: Analytics,
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart,
    }, 
    {
        path: '/Cart/Recommendations',
        name: 'Recommendations',
        component: Recommendations,
    },
    {
        path: '/offers',
        name: 'Offers',
        component: Offers,
    },
    {
        path: '/members',
        name: 'Members',
        component: Members,
    },
    {
        path: '/campaigns',
        name: 'Campaigns',
        component: Campaigns,
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
    },
    {
        path: "/articles",
        name: "ArticleAnalysis",
        component: ArticleAnalysis,
    },
    {
        path: "/cart/composition",
        name: "CartComposition",
        component: CartComposition,
    },
    {
        path: "/",
        name: "Profile",
        component: Profile,
        beforeEnter: (to, from, next) => {
            if (router.$global.$ability.can('read', 'User')) {
                next();
            } else {
                next({ name: 'Login' });
            }
        }
    },
    {
        name: "404",

        path: "/:catchAll(.*)",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
