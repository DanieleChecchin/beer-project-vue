import { createWebHistory, createRouter } from 'vue-router'

import AppHome from './AppHome.vue'
import About from './About.vue'

const routes = [
    { path: '/', component: AppHome, name: 'home' },
    { path: '/about', component: About, name: 'about' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export { router }