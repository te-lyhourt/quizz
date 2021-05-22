import { createApp } from 'vue'
import {createStore} from 'vuex'
import App from './App.vue'

const shore = createStore({
    state(){
        return{

        }
    },
    getters:{

    },
    actions:{

    },
    mutations:{

    }
})

const app = createApp(App)
app.use(shore)
app.mount('#app')
