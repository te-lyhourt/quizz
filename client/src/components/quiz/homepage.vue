<template v-html="html">
  <div class="box">
      <navbar :login="logIn" ></navbar>
      <div class="content">
        <div class="left">
          <sidebar v-if="logIn" :location="location" :userID="userID"></sidebar>
        </div>
        
        <div class="right" v-if="logIn">
          
            <span class="title">
                My Quizes 
            </span>
            <button class="btn btn-dark button-text createQuiz" @click="goCreateQuiz()" >Create quiz</button>
           
          <div class="quiz row" v-if="quizs">
            <quiz-box  v-for="quiz in quizlist" :key="quiz._id" :quiz="quiz" :userID="userID" :location="location"
            @deleteQuiz="deleteQuiz"
            @getPINCode = "getPINCode"
            >
            </quiz-box>
            
          </div>
          <div class="no-quiz-text" v-else>
            
            <p>There is no quiz created yet.</p>

            <p>create some quiz</p>
          </div>
        </div>

        <div class="right" style="text-align: center;" v-else>
          <h1 class="welcome">
            Welcome To Quizz! <i class="fas fa-pen "></i>
          </h1>
          <p class="welcome-text">logIn or signUp to continue</p>
          <a href="/logIn" class="btn-link"><button class="btn btn-dark button-text welcom-btn" >LogIn</button></a>
          <a href="/signUp" class="btn-link"><button class="btn btn-dark button-text welcom-btn" >SignUp</button></a>
          
        </div>
        

      </div>
      <pop-up v-if="popUp" v-on:getClick="goHome" :text = message></pop-up>
  </div>
</template>
<script>
import Navbar from '../navbar.vue';
import Sidebar from '../sidebar.vue';
import axios from 'axios'
import QuizBox from './quizBox.vue';
import router from '../../router/router'
import PopUp from '../popUp.vue' 
export default {
  data() {
    return {
      logIn:'',
      userName:'',
      userID:'',
      userType:'',
      quizlist:'',
      quizs:false,
      popUp:false,
      message:'',
      location:"homepage"
    }
  },
  async mounted() {
    document.title="Home page"
    this.checkUser();
    localStorage.removeItem('quiz')

  },
  methods: {
    async deleteQuiz(value){
      const response = await axios.get(`http://localhost:8080/homepage/deletequiz/${value}`)
      if(response.data.delete){
        this.popUp = true;
        this.message = "successfull delete !!";
      }else{
        this.popUp = true;
        this.message = "successfull failed !!";
      }
    },
    getWithExpiry() {
      const itemStr = localStorage.getItem("logIN")
      // if the item doesn't exist, return null
      if (!itemStr) {
        return null
      }
      const item = JSON.parse(itemStr)
      const now = new Date()
      // compare the expiry time of the item with the current time
      if (now.getTime() > item.expiry) {
        // If the item is expired, delete the item from storage
        // and return null
        localStorage.removeItem("logIN")
        return null
      }
      return item.value
    },
    //check if user is already log in
    async checkUser(){
      //check logIN
      const LogIN = this.getWithExpiry()
      if(LogIN) this.logIn = true
      //get data
      const response = await axios.get('http://localhost:8080/homepage')
     
      if(response.data.login){
        const user = response.data.user;
        // console.log(user)
        this.userName = user.userName;
        this.userID = user.userID;
        this.userType = user.userType;
        if(response.data.quizs){
          this.quizs = true
          const quizlist = response.data.quizlist
          // console.log(quizlist)
          this.quizlist = quizlist
        }
      }
      else{
        this.logIn = false;
      }
    },

    goCreateQuiz(){
      if(this.logIn){
        localStorage.removeItem('quiz')
        router.push({path:`/createquiz/${this.userID}`})
      }
      else{
        router.push({name:"logIn"})
      }
    },
    getPINCode(value){
      this.popUp = true
      this.message = 'you PIN code is: ' +value
    },
    goHome(){
      location.reload();
    },

  },
  components: {
    QuizBox,
    Sidebar,
    Navbar,
    PopUp
  },

};
</script>
<style scoped>
.no-quiz-text{
  margin-top: 50px;
  font-size: 3vmin;
  margin-left: 30px;
}
.title{
  font-size: 2rem;
  margin-left: 30px;
  margin-bottom: 40px;
}
.box{
  
  display: flex;
  flex-direction: column;
  height: 100%;
}
.content{
  margin: 0 0 0 0;
  display: flex;
  height: 100%;
}
.quiz{
  display: flex;
  flex-direction: row;
}
.left{
  
  background: #11101d;
  float: right;
}

.btn.button-text{
  border-radius: 10px;
  font-size: 1.25rem;
  color: white;
  background: black;
  resize: none;
}
.btn.button-text:hover{
  text-shadow: 0 0 10px #03bcf4,
        0 0 20px #03bcf4,
        0 0 40px #03bcf4 ;
}
.right{
  width: 91%;
  margin-top: 120px;
  margin-left: 120px;
}
.createQuiz{
  float: right;
  margin-right: 150px;
}
.fa-pen{
  font-size: 9vmin;
}
.welcome{
  margin-top: 6%;
  font-size: 11vmin;
}
.welcome-text{
  margin: 3% 0;
  font-size: 4.5vmin;
}
.btn.welcom-btn{
  font-size: 5vmin;
  width: 220px;
  
  margin: 20px auto;
}
.btn-link{
  display: block;
}
@media only screen and (max-width: 992px){
  .no-quiz-text{
    font-size: 3vmax;
  }
  .title{
    display: inline-block;
  }
  .right{

    margin-left: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  a{
    float: none;
    margin: 0;
    margin-top: 40px;
    margin-left: 30px;
  }
  .quiz.row{
    margin: 15px 60px 0 60px;
  }
  .welcom-btn{
    width: 75%;
    margin-top: 20px;
  }
  .createQuiz{
    width: 75%;
    margin-right: 0;
  }
}
</style>
