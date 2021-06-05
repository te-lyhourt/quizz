import {createWebHistory,createRouter} from 'vue-router'
import signUp from '@/components/user/signUp.vue'
import logIn from '@/components/user/logIn.vue'
import homepage from '../components/quiz/homepage.vue'
import createquiz from '../components/quiz/createQuizes.vue'

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
    {
        path:'/createquiz',
        name:'createquiz',
        component: createquiz
    },

]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router