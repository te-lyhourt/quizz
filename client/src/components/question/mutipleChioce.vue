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
        <input class="long-box" name="title" required="required" maxlength="20" placeholder="Add Quision" /> <br/>
      </div>
      <div class="bottom">
        <!-- contenteditable -->
        <div class="answer"  >
            
        </div>
        <div class="answer">
            
        </div>
        <div class="answer">
            
        </div>
        <div class="answer">
            
        </div>
        
        
      </div>
      <board v-if="questionBoard" v-on:getClick="questionBoard=false"></board>
    </div>

  </div>
</template>
<script>
import brand from '../brand';
import board from '../question/questionBoard'
export default {
  data() {
    return {
      questionBoard:"",
    }
  },
  components:{
    brand,
    board
  },
  methods: {
    bringeQuestionBoard(){

    }
  },
}
</script>

<style scopd>
  
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
  .mid{
    margin-top: 10px;
    text-align: left;
  }
  .long-box {
    width: 100%;
    margin-bottom: 20px;
    color: #767676;
    font-size: 1rem;
  }

  a{
    color: white;
    
  }
  a:hover{
    text-shadow: 0 0 10px #03bcf4,
        0 0 20px #03bcf4,
        0 0 40px #03bcf4 ;
    color: white;
    text-decoration: none;
  }
  .bottom{
    display: flex;
    flex-direction: column;
  }
  .row{
    width: 100%;
    display: flex;
  }
  /* .answer{
    background-color: red;
    width: 120px;
    height: 30px;
  }
  .answer[contenteditable]:empty::before{
    
    content: "Give a answer";
  } */
  @media screen {
    
  }
</style>