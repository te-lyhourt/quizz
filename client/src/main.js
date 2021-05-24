import { createApp } from 'vue'
import {createStore} from 'vuex'
import router from './router/router'

import App from './App.vue'


const shore = createStore({
    state(){
        return{
            users:[
                {
                    userName:'lyhourt',
                    userEmail:'lyhourt@gmail.com',
                    password:'123'
                }
            ]
        }
    },
    getters:{
        userLogIn:(state)=>(input)=>{
            
            const result = state.users.find(user => {
                return (user.userEmail == input.email && user.password == input.password)
            });

            return result
        },

    },
    actions:{
        addUser(context,user){
            context.commit('ADD_USER',user)
        }
    },
    mutations:{
        ADD_USER(state,user){
            state.users.push(user);
        }
    }
})

const app = createApp(App)
app.use(shore)
app.use(router)
app.mount('#app')
