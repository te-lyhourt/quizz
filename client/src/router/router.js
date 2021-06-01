import {createWebHistory,createRouter} from 'vue-router'
import signUp from '@/components/user/signUp.vue'
import logIn from '@/components/user/logIn.vue'
import homepage from '../components/quiz/homepage.vue'
import createQuiz from '../components/quiz/createQuizes.vue'
import multiple from '../components/question/mutipleChioce.vue'
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
        path:'/createQuiz',
        name:'createQuiz',
        component: createQuiz
    },
    {
        path:"/createQuiz/multiple",
        name:'multiple',
        component: multiple
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router