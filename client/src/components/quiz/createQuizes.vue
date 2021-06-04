<template v-html="html">
  <div>
    <brand></brand>
    <div class="box">
      <div class="top">
        <a href="" class="cancel" style="font-size:1.25rem">Cancel</a>
        <span style="font-size:1.5rem">Create Quiz</span>
        <a href="" class="save" style="font-size:1.25rem">Save</a>
      </div>
      <div class="mid">
        <p>Title</p>
         <input class="long-box" name="title" required="required" maxlength="20" placeholder="Add Title" /> <br/>
        <p>Description</p>
        <textarea class="long-box" name="description" required="required" maxlength="280" rows="3" placeholder="Add Decription"/> <br/>
        
        <p>Due Date</p>
        
        <input  
        v-model="dueDate" 
        class="form-control long-box date"
        placeholder="Add Due Date"
        type="text" 
        onfocus="(this.type='datetime-local')"
        :min="min"
        :max="max"
        required
        @change="checkTime"
        ><span class="validity"></span>
        
      </div>
      <div class="bottom">
        <p style="margin-top:20px;">Quesions</p>
        <!-- <p class="empty">No quesion yet</p> -->
        <div class="question-area">
          <questionBox :question="'1+2sadadas,mdnsa,;dmsa,dmsa,ldmnsa;lkjsa;dlkjsad;lsajk;ldksa;ldk;salkd;lsadk;saldk;alsdk;lsadkd;lsakd;laskd;lsak;ldsak;lsak;ldsak;ldsakd;lsak;dlk'" :type="'multiple'"></questionBox>
          <questionBox :question="'1+2'" :type="'true/fale'"></questionBox>
        </div>
        
        <button class="btn btn-dark addQuestion" type="button" @click="questionBoard=true" >Add quesion</button>
      </div>
      <board v-if="questionBoard" v-on:getClick="questionBoard=false"></board>
    </div>

  </div>
</template>
<script>
import brand from '../brand';
import board from '../question/questionBoard'
import questionBox from '../question/questionBox'

export default {
  
  data() {
    const current = new Date();
    const currentDate = current.getFullYear() +'-'+ this.addZero(current.getMonth()+1) +'-'+ this.addZero(current.getDate());
    const maxDate = current.getFullYear()+1 +'-'+ this.addZero(current.getMonth()+1)  +'-'+ this.addZero(current.getDate());
    const time = this.addZero(current.getHours()) + ":" + this.addZero(current.getMinutes());

    const dateTime = currentDate +'T'+ time;
    const maxdateTime = maxDate+'T'+time;
    
    return {
      questionBoard:"",
      dueDate: '',
      min: dateTime,
      max: maxdateTime,
      quiz:[
        {
          question:'',
          answer:[],
          rightAnswer:'',
        }
      ]
    }
  },

  components:{
    brand,
    board,
    questionBox,

  },
  methods: {
    // checkTime(){
    //   const minArray = this.min.split("T");
    //   const dueDate = this.dueDate.split("T");
      
    //   alert(this.min+' '+this.dueDate);
    // },
    saveQuiz(){

    },
    addZero(input){
      if(input<10){
        input = "0"+input
      }
      return input;
    },

  
  },
  computed:{
    
  }
}
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/css/bootstrap-datepicker3.min.css");
  p{
    font-size: 1.15rem;
  }
  .box {
    margin: 60px auto;
    text-align: center;
    width: 50%;
    padding: 30px 70px;
    background-color: #353535;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
  }
  
  .long-box{
    border-radius: 5px;
    resize: none;
    background: white;
    color: #767676;
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
  .long-box {
    width: 100%;
    margin-bottom: 20px;
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
    margin-bottom: 0;
    display: inline;
    width: 93%;
  }

  input:not(:placeholder-shown):invalid+span:after {
    content: 'Dua date is empty or smaller than current date ✖';
    color: red;
    font-size: 0.95rem;
    padding-left: 5px;
  }

  input:not(:placeholder-shown):valid+span:after {
    display: inline;
    content: '✓';
    font-weight: 900;
    color: green;
    padding-left: 5px;
  }

</style>