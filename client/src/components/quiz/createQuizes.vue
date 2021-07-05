<template v-html="html">
  <div>
    <brand></brand>
    <div class="box" >
      <div class="top">
        <a href="/" class="cancel" style="font-size:1.25rem">Cancel</a>
        <span style="font-size:1.5rem">Create Quiz</span>
        <button class="save empty-btn" type="submit" style="font-size:1.25rem" @click="saveQuiz()">Save</button>
      </div>
      <div class="mid">
        <p>Title</p>
         <input class="long-box" name="title" required maxlength="20" placeholder="Add Title" 
         v-model="quiz.title"/> <br/>
        <p>Description</p>
        <textarea class="long-box" name="description" maxlength="280" rows="3" placeholder="Add Decription"
        v-model="quiz.description"/> <br/>
        
        <p>Due Date</p>
        
        <input  
        v-model="quiz.dueDate" 
        class="form-control long-box date"
        placeholder="Add Due Date"
        type="text" 
        onfocus="(this.type='datetime-local')"
        :min="min"
        :max="max"
        required
        @change="checkTime"
        >
        <span class="validity" ></span>
        
      </div>
      <div class="bottom">
        <div  class="question-top">
          Quesions
          <button class="btn btn-dark addQuestion" type="button" @click="questionBoard=true" >Add quesion</button>
          
        </div>
        <div style="text-align:center;">
          <!-- this error will pop up when user saving the quiz without adding question -->
          <p class="error" v-if="noQuestion">{{error}}</p>
        </div>
        
        <div class="question-area"  >
          <div v-if="noQuestion">No question added yet</div>
          <div v-if="!noQuestion">
            <questionBox  v-for="quistion in quiz.questions" :key="quistion.id" :question="quistion" 
            @deleteQuestion="deleteQuestion"
            @editQuestion="editQuestion"></questionBox>
          </div>
          
        </div>
      </div>
      <board v-if="questionBoard" v-on:getClick="questionBoard=false" @choose="CheckType"></board>
      
      <truefale v-if="truefale" @getClick="truefale=false" @questoinSent="saveQuestion"></truefale>
      <multiple v-if="multiple" @getClick="multiple=false" @questoinSent="saveQuestion"></multiple>
    </div>
    <pop-up v-if="popUp" v-on:getClick="goHome" :text = message></pop-up>
  </div>
</template>
<script>
import brand from '../brand';
import board from '../question/questionBoard'
import questionBox from '../question/questionBox'
import multiple from '../question/mutipleChioce.vue'
import truefale from '../question/trueFales.vue'
import axios from 'axios'
import router from '../../router/router'
import PopUp from '../popUp.vue'
export default {
  
  mounted() {
    const id = window.location.pathname.split('/')[2].split('%22')[1]
    this.quiz.creater = id

    const oldQuiz = JSON.parse(localStorage.getItem('quiz'))
    if(oldQuiz!=null){
      const oldQuestion = oldQuiz.questions
      for(let i =0 ; i<oldQuestion.length ; i++){
        delete oldQuestion[i]._id;
        oldQuestion[i].id = i+1
      }
      this.quiz.questions = oldQuestion
      this.createdDate = oldQuiz.createdDate
      this.quiz.title = oldQuiz.title
      this.quiz.dueDate = new Date(`${oldQuiz.dueDate}`)
      this.quiz.creater = oldQuiz.creater
      this.quiz.description = oldQuiz.description
    }
    

    // this.quiz.editQuiz = true
    // this.quiz.quizID = oldQuiz._id
    // this.quiz = oldQuiz
  },
  data() {
    const current = new Date();
    const currentDate = current.getFullYear() +'-'+ this.addZero(current.getMonth()+1) +'-'+ this.addZero(current.getDate());
    const maxDate = current.getFullYear()+1 +'-'+ this.addZero(current.getMonth()+1)  +'-'+ this.addZero(current.getDate());
    

    const time = this.addZero(current.getHours()) + ":" + this.addZero(current.getMinutes());
    const mintime = this.addZero(current.getHours()+1) + ":" + this.addZero(current.getMinutes());

    let dateTime = currentDate +'T'+ time+":"+this.addZero(current.getSeconds());
    const maxdateTime = maxDate+'T'+time;
    const mindateTime = currentDate +'T' +mintime;
    const oldQuiz = JSON.parse(localStorage.getItem('quiz'))
    if(oldQuiz!=null){
      dateTime = oldQuiz.createdDate
    }
    return {
      questionBoard:"",
      multiple:"",
      truefale:"",
      max: maxdateTime,
      error:'',
      min:mindateTime,
      popUp:'',
      message:'',
      saveError:'',
      quiz:{
        questions:[],
        dueDate: '',
        createdDate: dateTime,
        title:'',
        description:'',
        creater:'',
      }
      
    }
  },

  components:{
    brand,
    board,
    questionBox,
    multiple,
    truefale,
    PopUp
  },
  methods: {
    saveQuiz(){
      const questions = this.quiz.questions
      if(questions.length==0){
        this.error = "must add question before save"
      }
      else{
        console.log(this.quiz)
        axios.post('http://localhost:8080/addQuiz',
        {
          quiz : this.quiz,
        })
        .then( (result) => {
          console.log(result.data.error)
          if(result.data.error){
            this.saveError = true
            this.popUp = true;
            this.message = "save failed !!";
          }
            
          else if(!result.data.error){

            this.popUp = true;
            this.saveError = false;
            this.message = "successfully save !!";
          }
        },(error) => {
          console.log(error);
        })
      }
      
    },
    goHome(){
      if(!this.saveError){
        router.push({name:"homepage"})
      }else{
        this.popUp = false
      }
    },
    CheckType(value){
      this.questionBoard=false

      if(value=="truefale") this.truefale = true;
      if(value=="multiple") this.multiple = true;
    },

    saveQuestion(value){
      // console.log(value)
      let id = this.quiz.questions.length+1;
      value.id = id
      this.quiz.questions.push(value)

    },
    addZero(input){
      if(input<10){
        input = "0"+input
      }
      return input;
    },
    deleteQuestion(value){
      var questions = this.quiz.questions;
      //splice out the delete question
      questions.splice(value-1,1)

      //change question id after delete element
      for(let i =0;i<questions.length;i++){
        questions[i].id = i+1
      }
    },
    editQuestion(value){
      let  question = this.quiz.questions
      for(let i=0;i <question.length;i++){
        if(question[i].id == value.id){
          question[i] = value
          break
        }
      }
    }
  },
  computed:{
    noQuestion(){
      // return true if there is not question yet in quiz.questions
      if( this.quiz.questions.length === 0) return true
      //else return false
      else return false
    }
  }
}
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker3.min.css");
  p{
    font-size: 1.15rem;
  }
  .box {
    margin: 60px auto ;
    text-align: center;
    width: 50%;
    padding: 30px 70px;
    background-color: #353535;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    min-width: 480px;
  }
  
  .long-box{
    border-radius: 5px;
    resize: none;
    background: white;
    width: 100%;
    margin-bottom: 20px;
    font-size: 1rem;
  }
  .top{
    margin-bottom: 30px;
  }
  .cancel{
    float: left;
  }
  .save{
    float: right;
   
  }
  .empty-btn{
    background: none;
    outline: none;
    border: none;
    color: white;
  }
  .save:hover,.cancel:hover{
    text-shadow: 0 0 10px #03bcf4,
        0 0 20px #03bcf4,
        0 0 40px #03bcf4 ;
    color: white;
    text-decoration: none;
  }
  .mid{
    margin-top: 10px;
    text-align: left;
  }


  a{
    color: white;
  }
  
  .bottom{
    text-align: left;
  }
  .question-area{
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .empty{
    color: gray;
    margin-left: 10px;
  }
  .addQuestion{
    margin-top: 20px;
    float:right;
    border: solid #767676 0.90px;
    
  }
  .addQuestion:hover{
    text-shadow: 0 0 10px #03bcf4,
        0 0 20px #03bcf4,
        0 0 40px #03bcf4 
  }
  .date{
    margin-right: 20px;
    margin-bottom: 20px;
    display: block;
  }
  span::before{
    display: none;
  }
  input:not(:placeholder-shown):invalid+span:after {
    content: 'Dua date is empty or smaller than 1 hour ✖';
    color: red;
    font-size: 0.95rem;
    padding-left: 5px;
  }

  input:not(:placeholder-shown):valid+span:after{
    display: inline;
    content: "\2714";
    font-weight: 900;
    color: green;
    padding-left: 5px;
  }
  input:not(:placeholder-shown):valid.date{
    display: inline;
    width: 85%;
  }
  .question-top{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 0;
    font-size: 1.15rem;

  }
  .error{
    color: red;
    margin-top: 20px;
    font-size: 1.25rem;
  }
  @media screen and (max-width: 480px) {
    .text {
      font-size: 16px;
    }
  }
</style>