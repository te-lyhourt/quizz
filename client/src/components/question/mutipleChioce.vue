<template v-html="html">
  <div>
    <form class="box popUp" id="popUp" :class="{ active: isActive }" @submit.prevent="saveQuestion" >
      <div class="top">
          <button class="x" data-close-button @click="getClick" >&times;</button>
      </div>
      <div class="mid">
        <p style="font-size:1.25rem;">Question</p>
        <input
          v-model="question"
          class="long-box"
          name="question"
          required
          placeholder="Add Quision"
        />
        <br />
      </div>
      <div class="bottom">
        <p style="font-size:1.25rem; float:left">Answer</p>
        <div class="row">
          <div class="answerCol col">
            <div class="right_answer">
              <div class="right_answerText">
                <span >Correct Answer:</span> 
              </div>

              <label class="switch">
                
                <input type="checkbox" @click="rightAnswer(1)" class="checkbox">
                <span class="slider round"></span>
              </label>
            </div>
            <span ref="answer1" class="answer" role="textbox" contenteditable required="required" @keyup="setAnswer(1)"></span>
          </div>
          <div class="answerCol col">
            <div class="right_answer">
              <div class="right_answerText">
                <span >Correct Answer:</span> 
              </div>
              
              <label class="switch">
                
                <input type="checkbox" @click="rightAnswer(2)" class="checkbox">
                <span class="slider round" ></span>
              </label>
            </div>
            <span ref="answer2" class="answer" role="textbox" contenteditable required="required" @keyup="setAnswer(2)"></span>
            
        
          </div>
        </div>
        <div class="row">
          <div class="answerCol col">
            <div class="right_answer">
              <div class="right_answerText">
                <span >Correct Answer:</span> 
              </div>

              <label class="switch">
                
                <input type="checkbox" @click="rightAnswer(3)" class="checkbox">
                <span class="slider round"></span>
              </label>
            </div>
            <span ref="answer3" class="answer optional" role="textbox" contenteditable  @keyup="setAnswer(3)"></span>
          </div>
          <div class="answerCol col">
            <div class="right_answer">
              <div class="right_answerText">
                <span >Correct Answer:</span> 
              </div>
              
              <label class="switch">
                
                <input type="checkbox" @click="rightAnswer(4)" class="checkbox" >
                <span class="slider round"></span>
              </label>
            </div>
            <span ref="answer4" class="answer optional" role="textbox" contenteditable  @keyup="setAnswer(4)"></span>
          </div>
        </div>
        
      </div>
      <button class="btn btn-dark button-text done"  type="submit">Done</button>
      <p class="error" > {{error}} </p>

    </form>
    <div id="overlay" :class="{ active: isActive }"></div>
  </div>
</template>
<script>


export default {
  el : '#popUp',
  props:["id","questionTitle"],

  data() {
    return {
      error:'',
      isActive: true,
      type:'multiple',
      question:'',

      choice1 : '',
      choice2 : '',
      choice3 : '',
      choice4 : '',
      answer :'',
    };
  },
  methods: {
    getClick(){
      this.isActive = false;
      this.$emit('getClick')
    },
    saveQuestion(){

      const choice=[]

      if(this.choice1!=''){
        choice.push(this.choice1)
      }
      if(this.choice2!=''){
        choice.push(this.choice2)
      }
      if(this.choice3!=''){
        choice.push(this.choice3)
      }
      if(this.choice4!=''){
        choice.push(this.choice4)
      }
      if(choice.length<=1){
        this.error = "error: must create at least 2 answer"

      }
      if(this.answer===''){
        this.error = "error: must choice right answer"

      }
      var save = false;

      if(choice.length>1 && this.question!=='' &&this.answer!=='' ){
        if(this.answer==1 && this.choice1!==''){
          
          save = true
        }
        if(this.answer==2 && this.choice2!==''){
          
          save = true
        }
        if(this.answer==3 && this.choice3!==''){
          
          save = true
        }
        if(this.answer==4 && this.choice4!==''){
          
          save = true
        }
        else this.error = "error: right answer choice but no content"
      
      }

      if(save){
        
        const question = {
          question : this.question,
          choice1:this.choice1,
          choice2:this.choice2,
          choice3:this.choice3,
          choice4:this.choice4,
          answer:this.answer,
          type:this.type,
          id:''
        }

        this.$emit("questoinSent",question)
        this.getClick()
      }
      
    },

    setAnswer(answer){

      if(answer==1){
        const span = this.$refs.answer1.innerHTML;        
        
        this.choice1 = span;
      }
      if(answer==2){
        const span = this.$refs.answer2.innerHTML;
        
        this.choice2 = span;
      }
      if(answer==3){
        const span = this.$refs.answer1.innerHTML;
        
        this.choice3 = span;
      }
      if(answer==4){
        const span = this.$refs.answer4.innerHTML;
        
        this.choice4 = span;
      }
    },
    rightAnswer(answer){
      const rightanswers = this.$el.querySelectorAll(".checkbox");
      
      const check = rightanswers[answer-1].checked
      
      if(check){
        this.answer = answer
        this.disableCheckBox()
      }
      if(!check){
        this.answer = ''
        this.enableCheckBox()
      }
      
    },
    
    disableCheckBox(){
      const answers = this.$el.querySelectorAll(".checkbox");
      answers.forEach(answer=>{
        if(answer.checked!=true){
          answer.disabled = true ;
        }
      })
    },
    enableCheckBox(){
      const answers = this.$el.querySelectorAll(".checkbox");

      answers.forEach(answer=>{
        if(answer.disabled == true){
  
          answer.disabled = false ;

        }
      })
    }
  },
  computed:{

    
  }
};
</script>

<style scoped>
.box {
  margin: 60px auto 20px;
  text-align: center;
  width: 80%;
  padding: 20px 70px 30px;
  background-color: #353535;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  min-width: 480px;
  max-width: 850px;
}
.error{
  color: red;
  margin-top: 20px;
  font-size: 1.25rem;
  
}
.done{
  margin-top: 20px;
  border:  solid #767676 0.90px;
}
.top {
  margin-bottom: 20px;
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
  text-align: center;
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

.answerCol{
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

input:disabled + .slider{
  background-color: black;
  box-shadow: black;
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
  color: white;
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
#popUp {
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  transform: scale(0);
  transition: 200ms ease-in-out;
  z-index: 10;
}

#popUp.active {
  transform: translate(-50%, -50%) scale(1);
}
#overlay {
  transition: 200ms ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(0, 0, 0, 0.5);
  pointer-events: none;
  opacity: 0;
}
#overlay.active {
  opacity: 1;
  pointer-events: all;
}
.x{
  float:right;
  color: white;
  background: transparent;
  border: none;
  font-size: 1.5rem;
}

@media (max-width: 490px) {

  .answerCol{
    width: 100px;
    font-size: 16px;
  }
}
</style>
