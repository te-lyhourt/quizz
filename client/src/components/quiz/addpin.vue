<template v-html="html">
  <div>
    <div id="popUp" class="popUp" :class="{ active: isActive }">
        <div class="top">
          <button class="x" data-close-button @click="getClick" >&times;</button>
        </div>
        
        <div class="bottom">
          <h4 class="text">Please fill in PIN code of quiz:</h4>
          <input type="text" v-model="pin" class="addPIN" maxlength="12">
          <p class="error" v-if="wrongPIN">{{errorMessage}}</p>
          <p class="error right" v-if="rightPIN">join quiz successfully,reload page...</p>
          <button @click="sendPIN" class="btn btn-dark button-text" :disabled= disable >Ok</button>
        </div>
    </div>

    <div id="overlay" :class="{ active: isActive }"></div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
    props:["quizlist","userID"],
    data(){
        return{
            isActive: true,
            pin:'',
            wrongPIN:false,
            rightPIN:false,
            errorMessage:'',
            disable:false
        }
        
    },
    methods: {

        getClick(){
          this.isActive = false;
          this.$emit('getClick')
        },
        sendPIN(){
          this.errorMessage = ''
          this.wrongPIN = false
          if(this.pin.length>11 || this.pin.length<11){
            this.wrongPIN = true
            this.errorMessage = "PIN is invalid "
          }
          else if(this.pin.length===11){
            const quizlist = this.quizlist
            //find quiz in list

            for(let i =0 ; i < quizlist.length ; i++) {
              if(quizlist[i].pin === this.pin){
                this.errorMessage = "Quiz is already in the list"
                this.wrongPIN = true
                break
              }
            }
            //not found 
            if(!this.wrongPIN) this.getQuiz()
          }
        },
        async getQuiz(){
          this.disable = true
          this.join=false
          const getQuiz = await axios.get('http://localhost:8080/'+this.userID+'/getQuizByPIN/'+this.pin)
          console.log(getQuiz)
          if(getQuiz.data.found){
            this.rightPIN = true
            setTimeout(function(){
                location.reload()
            }, 2000);
            
          }
          else{
            this.wrongPIN = true
            this.errorMessage = getQuiz.data.errorMessage
          }
        },
    },
};
</script>
<style scoped>
#popUp {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: 200ms ease-in-out;
  border: solid black;
  border-radius: 10px;
  background-color: white;
  color: black;
  z-index: 10;
  width: 300px;
  max-width: 80%;
  padding: 10px 15px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
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

  background: transparent;
  border: none;
  font-size: 1.5rem;
}
.bottom{
  text-align: center;
  display: inline-grid;
}

.btn.button-text{
  font-size: 1.25rem;
  color: white;
  background: black;
  width: 80px;
  margin: 20px auto 0;
}
.btn.button-text:hover{
  text-shadow: 0 0 10px #03bcf4,
        0 0 20px #03bcf4,
        0 0 40px #03bcf4;
  box-shadow: 0 0 10px #03bcf4,
        0 0 20px #03bcf4,
        0 0 40px #03bcf4 ;
}
.addPIN{
    width: 60%;
    margin: 10px auto 0;
    border: solid black ;
    border-radius: 3px;
}
.text{
  font-size: 3.75vmin;
  margin: 20px 0 ;
}
.error{
  color: red;
  margin-top: 20px;
  font-size: 2.7vmin;
}
.right{
  color: green;

}
@media screen and (max-width: 600px) {
    .error {
      font-size: 4vmin;
    }
    .text{
      font-size: 5vmin;
      margin: 20px 0 ;
    }
}
</style>