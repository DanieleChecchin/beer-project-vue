import { createWebHistory, createRouter } from 'vue-router';

import AppHome from './AppHome.vue';
import AppAbout from './About.vue';

const routes = [
    { path: '/', component: AppHome, name: 'home' },
    { path: '/about', component: AppAbout, name: 'about' },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export { router };