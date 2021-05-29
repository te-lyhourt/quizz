<template v-html="html">
    <div>
        <brand></brand>
        <div class="signbox">
            <div class="top">
            <div class="text">
                <span class="heading">Log in</span>
                <p class="signbox-text">Enter you email and password to continue</p>
            </div>
        

            <form @submit.prevent="logIn()">
                <p class="left-text">Email address</p>
                <div class="error">
                    <span style="color: red;" v-if="notFound">
                        incorrect password or email not exist!
                    </span>
                </div>
                <input class="long-box" v-model="email" type="email" name="email" required="required" /> <br/>
                <p class="left-text">Password</p> 
                <input class="long-box"  v-model="password" type="password" name="password" pattern=".{8,}" title="password should be atleast 8 letter" required="required"/> <br/>
                

                <button class="long-box btn btn-primary" type="submit" >Sign Up</button> 
            </form>
        </div>
        
        <p class="sign-up">Dont have any account ? <a href="http://localhost:8080/signUp">sign up</a></p>
        <p class="copy-right">2021 © Quizz! by Lyhourt</p>

        <pop-up v-if="popUp" v-on:getClick="goHome" :text = message></pop-up>
    </div>
    </div>
</template>
<script>

import router from '../../router/router'
import axios from 'axios'
import brand from '@/components/brand.vue'
import PopUp from '../popUp.vue'
export default {
    data() {
        return {
            notFound: false,
            email:'',
            password:'',
            message:'',
            popUp:'',
        }
    },
    components: { 
      brand,
      PopUp,
    },
    methods: {
        logIn(){
            // const user =  this.$store.getters.userLogIn(this.input)
            // alert(user)
            // if(user==undefined){
            //     this.notFound = true
            //     alert('not found')
            // }
            // else if (user.userEmail == this.input.email, user.password == this.input.password){
            //     alert('log in')
            // }
            axios.post('http://localhost:8080/logIn',
            {
                userEmail : this.email,
                password : this.password,
            })
            .then( (result) => {
                if(result.data.passwordIsMatch){

                    this.popUp = true;
                    this.notFound = false;
                    this.message = "successfully log In !!";
                }
                else if(!result.data.passwordIsMatch){
                    this.notFound = true;
                    this.popUp = true;
                    this.message = "log In fail !!";

                }
            },(error) => {
                console.log(error);
            })
        },
        goHome(){
            if(!this.notFound){
                router.push({name:"homepage"})
            }
            else{
                this.popUp = false
            }
            
        }
        
    },
    
}
</script>
<style scoped>
    
    body {
        padding: 0;
        margin: 0;
        background-color: #dcdcdc;
        font-family: "Concert One", sans-serif;
        font-size: 1.15rem;
    }

    .signbox {

        margin: 60px auto;
        text-align: center;
        width: 30%;
    }

    .top {
        background-color: #242424;
        border: solid black;
        padding: 30px 70px;
        text-align: left;
    }

    .text {
        margin: 20px auto;
        text-align: center;
    }

    .signbox-text {
        color: gray;
        width: 65%;
        margin: 30px auto;
    }
    .long-box {
        width: 100%;
        margin-bottom: 20px;
    }

    button,
    .btn {
        margin-top: 20px;
        border: solid black;
        box-shadow: 10px 5px 5px 0 rgb(0, 0, 0, 0.7);
    }

    input {
        border: solid 2px;
    }

    .sign-up {
        margin-top: 20px;
        margin-bottom: 40px;
    }
    .heading{
        font-size:2.5rem
    }
    .error {
        color: red;
        font-size: 0.9em;
        margin-bottom: 5px;
    }

    @media only screen and (max-width: 1300px) {
        
        .heading{
            font-size: 30px;
        }
        .signbox-text {
            font-size: 15px;
        }
        .top{
            padding: 10px 40px;
        }
        .left-text{
            font-size: 15px;
        }
        .signbox{
            width: 40%;
        }
    }
    @media only screen and (max-width: 980px) {
        .signbox{
            width: 50%;
        }
    }
    @media only screen and (max-width: 790px) {
        .signbox{
            width: 60%;
        }
    }
    @media only screen and (max-width: 590px) {
        .signbox{
            width: 80%;
        }
    }
    @import url("https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css");
    @import url("https://cdn.rawgit.com/afeld/bootstrap-toc/v1.0.1/dist/bootstrap-toc.min.css");
</style>