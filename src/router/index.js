import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeView
        },
        {
            path: '/java',
            name: 'Java',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/JavaView.vue')
        },
        {
            path: '/go',
            name: 'Go',
            component: () => import('../views/GoView.vue')
        },
        {
            path: '/js',
            name: 'Js',
            component: () => import('../views/JsView.vue')
        },
        {
            path: '/linux',
            name: 'Linux',
            component: () => import('../views/LinuxView.vue')
        }
    ]
})

export default router
