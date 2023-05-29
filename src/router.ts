import { createRouter, createWebHistory, RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
    {
        path: '/',
        name: 'Home',
        component: () => import('pages/index.vue')
    },
    {
        path: '/profile',
        name: 'Simulator',
        component: () => import('pages/profile.vue')
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
