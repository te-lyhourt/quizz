import { createApp } from 'vue'
// import {createStore} from 'vuex'
import router from './router/router'
import App from './App.vue'


// const shore = createStore({
//     state(){
//         return{
//             users:[
//                 {
//                     userName:'',
//                     userEmail:'',
//                     password:''
//                 }
//             ]
//         }
//     },
//     getters:{
//         userLogIn:(state)=>(input)=>{
            
//             const result = state.users.find(user => {
//                 return (user.userEmail == input.email && user.password == input.password)
//             });

//             return result
//         },

//     },
//     actions:{
//         addUser(context,user){
//             context.commit('ADD_USER',user)
//         }
//     },
//     mutations:{
//         ADD_USER(state,user){
//             state.users.push(user);
//         }
//     }
// })
// app.use(shore)

const app = createApp(App)


app.use(router)

// app.use(VueAxios, axios)
app.mount('#app')
