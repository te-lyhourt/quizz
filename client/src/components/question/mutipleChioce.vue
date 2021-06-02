<template v-html="html">
  <div>
    <brand></brand>
    <div class="box">
      <div class="top">
        <a href="" class="cancel" style="font-size:1.25rem">Cancel</a>
        <span style="font-size:1.5rem">Create question</span>
        <a href="" class="save" style="font-size:1.25rem">Save</a>
      </div>
      <div class="mid">
        <p style="font-size:1.25rem;">Question</p>
        <input
          v-model="question"
          class="long-box"
          name="question"
          required="required"
          placeholder="Add Quision"
        />
        <br />
      </div>
      <div class="bottom">
        <p style="font-size:1.25rem; float:left">Answer</p>
        <div class="row">
          <div class="answer1 col">
            <div class="right_answer">
              <div class="right_answerText">
                <span >Correct Answer:</span> 
              </div>

              <label class="switch">
                
                <input type="checkbox" @click="answer1.correct=!answer1.correct">
                <span class="slider round"></span>
              </label>
            </div>
            <span ref="answer1" class="answer" role="textbox" contenteditable required="required" @keyup="setAnswer(1)"></span>
          </div>
          <div class="answer1 col">
            <div class="right_answer">
              <div class="right_answerText">
                <span >Correct Answer:</span> 
              </div>
              
              <label class="switch">
                
                <input type="checkbox">
                <span class="slider round" @click="answer2.correct=!answer2.correct"></span>
              </label>
            </div>
            <span ref="answer2" class="answer" role="textbox" contenteditable required="required" @keyup="setAnswer(2)"></span>
          </div>
        </div>
        <div class="row">
          <div class="answer1 col">
            <div class="right_answer">
              <div class="right_answerText">
                <span >Correct Answer:</span> 
              </div>

              <label class="switch">
                
                <input type="checkbox" @click="answer3.correct=!answer3.correct">
                <span class="slider round"></span>
              </label>
            </div>
            <span ref="answer3" class="answer optional" role="textbox" contenteditable  @keyup="setAnswer(3)"></span>
          </div>
          <div class="answer1 col">
            <div class="right_answer">
              <div class="right_answerText">
                <span >Correct Answer:</span> 
              </div>
              
              <label class="switch">
                
                <input type="checkbox">
                <span class="slider round" @click="answer4.correct=!answer4.correct"></span>
              </label>
            </div>
            <span ref="answer4" class="answer optional" role="textbox" contenteditable  @keyup="setAnswer(4)"></span>
          </div>
        </div>
        
      </div>
      
    </div>
  </div>
</template>
<script>
import brand from "../brand";

export default {
  data() {
    return {
      question:'',
      answer1:{
        answer:'',
        correct:false,
      },
      answer2:{
        answer:'',
        correct:false,
      },
      answer3:{
        answer:'',
        correct:false,
      },
      answer4:{
        answer:'',
        correct:false,
      },
    };
  },
  components: {
    brand,

  },
  methods: {
    setAnswer(answer){
      if(answer==1){
        const span = this.$refs.answer1.innerHTML;
        this.answer1.answer = span;
      }
      if(answer==2){
        const span = this.$refs.answer2.innerHTML;
        this.answer2.answer = span;
      }
      if(answer==3){
        const span = this.$refs.answer1.innerHTML;
        this.answer3.answer = span;
      }
      if(answer==4){
        const span = this.$refs.answer4.innerHTML;
        this.answer4.answer = span;
      }
    }
  },
  computed:{

    
  }
};
</script>

<style scoped>
.box {
  margin: 60px auto;
  text-align: center;
  width: 80%;
  padding: 30px 70px;
  background-color: #353535;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
}

.top {
  margin-bottom: 30px;
}
.cancel {
  float: left;
}
.save {
  float: right;
}
.mid {
  margin-top: 10px;
  text-align: left;
}
.long-box {
  width: 100%;
  margin-bottom: 20px;
  color: white;
  font-size: 1rem;
}

a {
  color: white;
}
a:hover {
  text-shadow: 0 0 10px #03bcf4, 0 0 20px #03bcf4, 0 0 40px #03bcf4;
  color: white;
  text-decoration: none;
}
.bottom {
  display: flex;
  flex-direction: column;
  text-align: left;
}
.row {
  display: flex;
}

.right_answer
{
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #353535;
  border-radius: 10px;
  padding: 0 20px;
  margin: 20px 0;
}

.right_answerText{
  margin-top: 5px;
  font-size: 1.15rem;
  float: right;
}

.answer1{
  display: flex;
  flex-direction: column;
  background-color: #202124;
  border: white;
  min-height: 120px;
  width: 50%;
  margin: 10px 20px 10px 0;
  border-radius: 10px;
  padding: 10px;
}

.switch {
  float: right;
  margin: 10px 10px 10px 0;
  position: relative;
  /* display: inline-block; */
  width: 50px;
  height: 25px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #66BF39;
}

input:focus + .slider {
  box-shadow: 0 0 1px #66BF39;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.long-box {
  border-radius: 5px;
  resize: none;
  background: #202124;
}
.answer{
  background: transparent;
  border: transparent;
  background-color: #202124;
  text-align: center;
  padding: 20px;
}
.answer:focus{
  outline: none;
}
.answer[contenteditable]:empty::before {
  content: "Add Answer";
  color: gray;
}
.answer.optional[contenteditable]:empty::before {
  content: "Add Answer(optional)";
  color: gray;
}
</style>
