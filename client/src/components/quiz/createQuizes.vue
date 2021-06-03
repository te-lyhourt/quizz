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
      </div>
      <div class="bottom">
        <p>Quesions</p>
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
    return {
      questionBoard:"",
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
    questionBox
  },
  methods: {
    saveQuiz(){

    }
  },
}
</script>

<style scoped>
  .box {
    margin: 60px auto;
    text-align: center;
    width: 38%;
    padding: 30px 70px;
    background-color: #353535;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
  }
  
  .long-box{
    border-radius: 5px;
    resize: none;
    background: #202124;
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

</style>