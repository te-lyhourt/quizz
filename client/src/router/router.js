import {createWebHistory,createRouter} from 'vue-router'
import signUp from '@/components/signUp.vue'
import logIn from '@/components/logIn.vue'
import homepage from '@/components/homepage.vue'

const routes = [
    {
        path:'/',
        name:'homepage',
        component: homepage
    },
    {
        path:'/logIn',
        name:'logIn',
        component: logIn
    },
    {
        path:'/signUp',
        name:'signUp',
        component: signUp
    },
]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router