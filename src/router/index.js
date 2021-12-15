import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '../pages/Dashboard.vue'

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    // Scroll to top when change page
    // scrollBehavior(to, from, savedPosition) {
    //     window.scrollTo(0, 0)
    // },
})

router.beforeEach((to, from, next) => {
    console.log('Before go to page')
    next()
})

export default router
