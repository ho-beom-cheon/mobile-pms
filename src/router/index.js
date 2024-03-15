import { createRouter, createWebHistory } from 'vue-router'
import Login from '../layout/login/Login.vue'

const router =  createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
})

export default router

