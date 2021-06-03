<template v-html="html">
  <div class="box">
      <navbar :username="userName" :login="logIn" ></navbar>
      <div class="content">
        <div class="left">
          <sidebar></sidebar>
        </div>
        <div class="right">
          <div class="top">
            <span class="title">
                My Quizes
            </span>
            <a href="/createquiz"><button class="btn btn-dark button-text">Create quiz</button></a>
          </div>
          <div class="quiz row">
            <quiz-box></quiz-box>
            <quiz-box></quiz-box>
            <quiz-box></quiz-box>
            <quiz-box></quiz-box>
            <quiz-box></quiz-box>
          </div>
        </div>
        
      </div>
  </div>
</template>
<script>
import Navbar from '../navbar.vue';
import Sidebar from '../sidebar.vue';
import axios from 'axios'
import QuizBox from './quizBox.vue';

export default {
  data() {
    return {
      logIn:'',
      userName:'',
    }
  },
  async mounted() {
    const response = await axios.get('http://localhost:8080/homepage');
    console.log(response)
    if(response.data.login){
      this.logIn = true;

      this.userName = response.data.userName;
    }
    else{
      this.logIn = false;
    }
  },
  components: {
    QuizBox,
    Sidebar,
    Navbar,
  },

};
</script>
<style scoped>

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
a{
  margin-top: 10px;
  border-radius: 0 0 30px;
  float: right;
  margin-right: 150px;
}
.btn.button-text{
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
  margin-top: 120px;
  margin-left: 70px;
}
@media only screen and (max-width: 992px){
  .title{
    display: block;
  }
  .right{
    display: flex;
    flex-direction: column;
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
}
</style>
