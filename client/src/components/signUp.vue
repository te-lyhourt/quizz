<template v-html="html">
  <div>
    <brand></brand>
    <div class="signbox">
      <div class="top">
        <div class="text">
          <span class="heading">Sign up</span>
          <p class="signbox-text">
            Dont have an account ? Create your own account ,it take less than a
            minute
          </p>
        </div>

        <form action="http://localhost:3000/signUp" method="POST">
          <p>Username</p>
          <input 
            required="required" 
            pattern="[A-Za-z0-9]{4,20}" 
            title="Username should be 4 to 20 english letter or number "
            class="long-box"
            type="text"
            name="username"
            maxlength="20"
            v-model="userName"
          />
          <br />
          <p class="email">Email address</p>
          <!-- <% if(email) {%>
          <span style="color: red;"><%= message %></span>
          <% } %> -->
          <input
            required="required"
            class="long-box"
            type="email"
            name="email"
            v-model="email"
          />
          <br />

          <p>Password</p>
          <input
            required="required"
            class="long-box"
            type="password"
            name="password"
            pattern=".{8,}"
            title="password should be atleast 8 letter"
            v-model="password"
          />
          <br />
          <p>Confirm Password</p>
            <div class="error">
                <span v-if="checkPasswrod" >{{errorMessage}}</span>
            </div>
          <input
            
            required="required"
            class="long-box"
            type="password"
            name="conpassword"
            pattern=".{8,}"
            title="password should be atleast 8 letter"
            v-model="confirmPass"
          />
          <br />
          <div class="checkbox">
            <input required="required" type="checkbox" id="term" name="term" @change="checking()"/>

            I accept Terms and Conditions <br />

          </div>
          <button
            class="long-box btn btn-primary"
            type="submit"
            id="submit"
            :disabled = !ableSubmit
            @click="ableSubmit"
          >
            Sign Up
          </button>
        </form>
      </div>

      <p class="sign-up">
        Already have account ?
        <a href="http://localhost:3000/signIn">sign in</a>
      </p>
      <p class="copy-right">2021 © Awesome Shop by Lyhourt</p>
    </div>
  </div>
</template>
<script>
import brand from '@/components/brand.vue'
export default {
    data() {
        return {
            userName:'',
            email:'',
            password:'',
            confirmPass:'',
            errorMessage:'',
            termChecked : false
        }
    },
    methods: {
        submitSignUp(){
            this.$store.dispatch("addUser",{
                userName : this.userName,
                userEmail : this.email,
                password : this.password
            })
        },
        checking(){
            this.termChecked = !this.termChecked
        },
        wrongPassword(){
          this.errorMessage = 'passowrd and confirm password should be the same'
        }
    },
    components:{
        brand,
    },
    computed:{
        ableSubmit(){
            if(this.userName!=''
                && this.email!=''
                &&this.password!=''
                &&this.confirmPass!=''
                &&!this.checkPasswrod
                &&this.termChecked
            ){
                return true
            }
            else return false
            
        },
        checkPasswrod(){
            if(this.password==this.confirmPass){
              this.wrongPassword()
              return false
            }
            else{
              return true
            } 
        }
    }
};
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
  width: 50%;
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
.btn:hover{
    color: white;
    text-shadow: 0 0 10px #03bcf4,
        0 0 20px #03bcf4,
        0 0 40px #03bcf4 
}
input {
  border: solid 2px;
}

.sign-up {
  margin-top: 20px;
  margin-bottom: 40px;
}
.heading {
  font-size: 2.5rem;
}
.error{
    color: red;
    font-size: 0.9em;
    margin-bottom: 5px;
}
@media only screen and (max-width: 1300px) {
  .heading {
    font-size: 30px;
  }
  .signbox-text {
    font-size: 15px;
  }
  .top {
    padding: 10px 40px;
  }
  .left-text {
    font-size: 15px;
  }
  .signbox {
    width: 40%;
  }
}
@media only screen and (max-width: 980px) {
  .signbox {
    width: 50%;
  }
}
@media only screen and (max-width: 790px) {
  .signbox {
    width: 60%;
  }
}
@media only screen and (max-width: 590px) {
  .signbox {
    width: 80%;
  }
}
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css");
@import url("https://cdn.rawgit.com/afeld/bootstrap-toc/v1.0.1/dist/bootstrap-toc.min.css");
</style>
