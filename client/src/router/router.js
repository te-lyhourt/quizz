import {createWebHistory,createRouter} from 'vue-router'
import signUp from '@/components/user/signUp.vue'
import logIn from '@/components/user/logIn.vue'
import homepage from '../components/quiz/homepage.vue'
import createquiz from '../components/quiz/createQuizes.vue'
import taskQuzi from '../components/takeQuiz/quizPage.vue'
import startQuiz from '../components/takeQuiz/startQuiz.vue'
import endQuiz from '../components/takeQuiz/endQuiz.vue'

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
    {
        path:'/takequiz',
        name:'takequiz',
        component: taskQuzi
    },
    {
        path:'/startquiz',
        name:'startquiz',
        component : startQuiz
    },
    {
        path:'/endquiz',
        name:'endquiz',
        component: endQuiz
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router