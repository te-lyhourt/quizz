import {createWebHistory,createRouter} from 'vue-router'
import signUp from '@/components/user/signUp.vue'
import logIn from '@/components/user/logIn.vue'
import homepage from '../components/quiz/homepage.vue'
import createquiz from '../components/quiz/createQuizes.vue'
import taskQuiz from '../components/takeQuiz/taskQuiz.vue'
import startQuiz from '../components/takeQuiz/startQuiz.vue'
import endQuiz from '../components/takeQuiz/endQuiz.vue'
import quizpage from '../components/quiz/quizpage.vue'
import quizdetail from '../components/quiz/quizdetail.vue'
import latequiz from '../components/takeQuiz/lateQuiz.vue'
import nofound from '../components/quiz/pageNotFound.vue'
const routes = [
    {
        path:'/',
        name:'homepage',
        component: homepage
    },
    {
        path:'/quizpage/:id',
        name:'quizpage',
        component:quizpage
    },
    {
        path:'/quizdetail/:quizID',
        name:'quizdetail',
        component:quizdetail
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
        path:'/createquiz/:id',
        name:'createquiz',
        component: createquiz,
        props:true
    },
    {
        path:'/editQuiz/:id/:data',
        name:'editQuiz',
        component: createquiz,
        props:true
    },
    {
        path:'/startquiz/:quizID/:userID',
        name:'startquiz',
        component : startQuiz
    },
    {
        path:'/takequiz/:quizID/:userID',
        name:'takequiz',
        component: taskQuiz
    },
    {
        path:'/endquiz',
        name:'endquiz',
        component: endQuiz
    },
    {
        path:'/latequiz/:quizID/:userID',
        name:'latequiz',
        component: latequiz
    },
    {
        path:'/:pathMatch(.*)*',
        name:"notfound",
        component:nofound,
    }

]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router