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
            <span ref="answer2" class="answer" >True</span>
          </div>
          <div class="answerCol col">
            <div class="right_answer">
              <div class="right_answerText">
                <span >Correct Answer:</span> 
              </div>
              
              <label class="switch">
                <input type="checkbox" @click="rightAnswer(2)" class="checkbox">
                <span class="slider round"  ></span>
              </label>
            </div>
            <span ref="answer2" class="answer" >False</span>
          </div>
        </div>
        <button class="btn btn-dark button-text done"  type="submit">Done</button>
        <p class="error" > {{error}} </p>
      </div>
      
    </form>
    <div id="overlay" :class="{ active: isActive }"></div>
  </div>
</template>
<script>


export default {

  el : '#popUp',
  props:["questionEdit"],
  mounted() {
    
    if(typeof  this.questionEdit !== 'undefined'){
      const edit = this.questionEdit
      //set question
      this.question = edit.question
      //index of right answer
      const index = edit.answer
      //get all check
      const rightanswers = this.$el.querySelectorAll(".checkbox");
      //set the right answer to check
      rightanswers[index-1].checked = true
      this.rightAnswer(index)
      //set question id
      this.questionId = edit.id
    }
  },
  data() {
    return {
      questionId:'',
      edit:false,
      error:'',
      isActive: true,
      type:'truefalse',
      question:'',
      answer :'',
    };
  },
  methods: {
    getClick(){
      this.isActive = false;
      this.$emit('getClick')
    },
    saveQuestion(){
      
      if(this.answer===''){
        this.error = "error: must choice right answer"
      }
      var save = false;

      if(this.question!=='' &&this.answer!=='' ){
        save = true
      }


      if(save){
        
        const question = {
          question : this.question,
          choice1:'true',
          choice2:'false',
          answer:this.answer,
          type: this.type,
          id:''
        }
        //for create question
        if(typeof  this.questionEdit === 'undefined'){
          this.$emit("questoinSent",question)
        }
        //for edit question
        if(typeof  this.questionEdit !== 'undefined'){
          question.id = this.questionId
          this.$emit("sendEdit",question)
        }
        this.getClick()
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
