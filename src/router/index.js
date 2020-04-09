import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import VueCookies from 'vue-cookies'
import { BootstrapVue } from 'bootstrap-vue'

import Login from '@/views/Login.vue'
import About from '@/views/About.vue'
import Register from '@/views/Register.vue'
import Home from '@/views/Home.vue'
import ScoutObjects from '@/views/ScoutObjects.vue'
import CloseApproaching from '@/views/CloseApproaching.vue'
import Fireballs from '@/views/Fireballs.vue'

import InternalError from '@/views/InternalError.vue'

Vue.use(VueRouter);
Vue.use(Vuelidate);
Vue.use(VueCookies);
Vue.use(BootstrapVue);

// configure cookies to be set for one day
Vue.$cookies.config('1d');

// Check if user is already authenticated on routes that do not
//  require authentication.
const ifAuthenticated = (to, from, next) => {
    if (Vue.$cookies.isKey("logged_in")) {
        next('/');
        return;
    }
    next();
}

const ifNotAuthenticated = (to, from, next) => {
    if (Vue.$cookies.isKey("logged_in")) {
        next();
        return;
    }
    next('/login')
};

const routes = [
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: 'Login - NASAnalysis',
            metaTags: [
                {
                    name: 'description',
                    content: 'Log in to NASAnalysis to access your account.'
                },
                {
                    name: 'og:description',
                    content: 'Log in to NASAnalysis to access your account.'
                }
            ]
        },
        component: Login,
        beforeEnter: ifAuthenticated
    },
    {
        path: '/about',
        name: 'About',
        meta: {
            title: 'About - NASAnalysis',
            metaTags: [
                {
                    name: 'description',
                    content: 'Learn more about the purpose of NASAnalysis and its history.'
                },
                {
                    name: 'og:description',
                    content: 'Learn more about the purpose of NASAnalysis and its history.'
                }
            ]
        },
        component: About,
        beforeEnter: ifAuthenticated
    },
    {
        path: '/register',
        name: 'Register',
        meta: {
            title: 'Register - NASAnalysis',
            metaTags: [
                {
                    name: 'description',
                    content: 'Register for an account with NASAnalysis'
                },
                {
                    name: 'og:description',
                    content: 'Register for an account with NASAnalysis'
                }
            ]
        },
        component: Register,
        beforeEnter: ifAuthenticated
    },
    {
        path: '/',
        name: 'Home',
        meta: {
            title: 'Home - NASAnalysis',
            metaTags: [
                {
                    name: 'description',
                    content: 'Access the information presented by NASAnalysis and learn more about NASA\'s datasets!'
                },
                {
                    name: 'og:description',
                    content: 'Access the information presented by NASAnalysis and learn more about NASA\'s datasets!'
                }
            ]
        },
        component: Home,
        beforeEnter: ifNotAuthenticated
    },
    {
        path: '/scout',
        name: 'ScoutObjects',
        meta: {
            title: 'Scout Objects - NASAnalysis',
            metaTags: [
                {
                    name: 'description',
                    content: 'Access data related to objects that have been scouted by NASA\'s observation team, but have not yet been confirmed.'
                },
                {
                    name: 'og:description',
                    content: 'Access data related to objects that have been scouted by NASA\'s observation team, but have not yet been confirmed.'
                }
            ]
        },
        component: ScoutObjects,
        beforeEnter: ifNotAuthenticated
    },
    {
        path: '/close-approaching',
        name: 'CloseApproaching',
        meta: {
            title: 'Close Approaching Objects - NASAnalysis',
            metaTags: [
                {
                    name: 'description',
                    content: 'Access data acquired by NASA related to objects approaching earth in the past, present and future.'
                },
                {
                    name: 'og:description',
                    content: 'Access data acquired by NASA related to objects approaching earth in the past, present and future.'
                }
            ]
        },
        component: CloseApproaching,
        beforeEnter: ifNotAuthenticated
    },
    {
        path: '/fireballs',
        name: 'Fireballs',
        meta: {
            title: 'Fireballs - NASAnalysis',
            metaTags: [
                {
                    name: 'description',
                    content: 'The latest data on Fireballs that have struck the earth.'
                },
                {
                    name: 'og:description',
                    content: 'The latest data on Fireballs that have struck the earth.'
                }
            ]
        },
        component: Fireballs,
        beforeEnter: ifNotAuthenticated
    },
    {
        path: '/500',
        name: 'InternalErro',
        meta: {
            title: '500 - Internal Server Error',
            metaTags: [
                {
                    name: 'description',
                    content: 'Unable to access requested resource.'
                },
                {
                    name: 'og:description',
                    content: 'Unable to access requested resource.'
                }
            ]
        },
        component: InternalError
    },
    {
        path: '*'
    }
];

const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    base: process.env.BASE_URL,
    routes
});

// Below Router Function obtained from article found at the following link:
// https://alligator.io/vuejs/vue-router-modify-head/

// This callback runs before every route change, including on page load.
router.afterEach((to) => {
    // This goes through the matched routes from last to first, finding the closest route with a title.
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

    // Find the nearest route element with meta tags.
    const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

    // If a route with a title was found, set the document (page) title to that value.
    if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

    // Remove any stale meta tags from the document using the key attribute we set below.
    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

    // Skip rendering meta tags if there are none.
    if (!nearestWithMeta) return;

    // Turn the meta tag definitions into actual elements in the head.
    nearestWithMeta.meta.metaTags.map(tagDef => {
        const tag = document.createElement('meta');

        Object.keys(tagDef).forEach(key => {
            tag.setAttribute(key, tagDef[key]);
        });

        // We use this to track which meta tags we create, so we don't interfere with other ones.
        tag.setAttribute('data-vue-router-controlled', '');

        return tag;
    }).forEach(tag => document.head.appendChild(tag));
});

export default router