<template v-html="html">
  <div class="box">
      <navbar  :login="logIn" ></navbar>
      <div class="content">
        <div class="left">
          <sidebar v-if="logIn" :location="location"></sidebar>
        </div>
        
        <div class="right" v-if="logIn">
          
            <span class="title">
                Quizes finished 
            </span>
            <button class="btn btn-dark button-text createQuiz" @click="join = true" >Join quiz</button>
           
          <div class="quiz row" v-if="quizs">
            <quiz-box  v-for="quiz in quizlist" :key="quiz._id" :quiz="quiz" :userID="userID" 
            @deleteQuiz="deleteQuiz"
            @getPINCode = "getPINCode"
            >
            </quiz-box>
            
          </div>
          <div class="no-quiz-text" v-else>
            
            <p>You not yet attend any quiz yet</p>

            <p>join quiz</p>
          </div>
        </div>

      </div>
      <pop-up v-if="popUp" @getClick="goHome" :text = message></pop-up>
      <addpin v-if="join" @getClick="goHome" :quizlist = quizlist :userID="userID"></addpin>
  </div>
</template>
<script>
import Navbar from '../navbar.vue';
import Sidebar from '../sidebar.vue';
import axios from 'axios'
import QuizBox from './quizBox.vue';
// import router from '../../router/router'
import PopUp from '../popUp.vue'
import addpin from './addpin.vue'
export default {
  data() {
    return {
      logIn:true,
      userName:'',
      userID:'',
      userType:'',
      quizlist:'',
      quizs:false,
      popUp:false,
      join:false,
      message:'',
      location:"quizpage"
    }
  },
  mounted() {
    const id = window.location.pathname.split('/')[2].split('%22')[1]
    this.userID = id
    this.getQuiz()
  },
  methods: {
    async getQuiz(){
      const response = await axios.get('http://localhost:8080/quizpage/'+this.userID)
      console.log(response)
      if(response.data.quizs){
        this.quizs =true
        this.quizlist = response.data.quizlist
      }
    },

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
    PopUp,
    addpin
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

  .createQuiz{
    width: 75%;
    margin-right: 0;
  }
}
</style>