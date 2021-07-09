<template >
    <div class="box">
        <div>
            <a @click="cancle()" class="cancel" style="font-size:1.25rem">Back</a>
        </div>
        
        <div class="top" >
          
            <span class="title">
                Quiz title:  {{quiz.title}}
            </span>
            <button class="btn btn-dark button-text createQuiz" @click="goCreateQuiz()" >edit quiz</button>
            
        </div>
        <div class="middle">
            <span class="title">Description: </span>
            <p class="description">{{quiz.description}}</p>
        </div>
        <div class="bottom">
            <span class="title">participant: </span>
            <p class=" description right"  v-if="havePaticipian" > total participant: {{total}} </p>
            <div >
              <usertable v-if="havePaticipian"></usertable>
              <p class="description" v-else  > No one join the quiz yet</p>
            </div>
        </div>


  </div>
</template>
<script>
import router from "../../router/router"

import usertable from '../user/usertbale.vue'
export default {
    components: { 
      usertable,
    },
    mounted() {
      document.title="quiz detail"
      const oldQuiz = JSON.parse(localStorage.getItem('quiz'))
      if(oldQuiz!=null){
        this.quiz = oldQuiz
        this.participant = this.quiz.participant
        this.total = this.participant.length
      }
    },
    data() {
        return {
          quiz:'',
          participant:'',
          total:'',
        }
    },
    methods: {
        goCreateQuiz(){
          router.push({path:`/createquiz/${this.userID}`})
        },
        cancle(){
            router.push({path:'/'})
        }
    },
    computed:{
      havePaticipian(){
        
        if(this.participant.length>0) return true
        else return false

      }
    }
}
</script>
<style scoped>
.cancel{
    float: left;
    color: white;
}
.cancel:hover{
    text-decoration: none;
    color: white;
    text-shadow: 0 0 10px #03bcf4,
        0 0 20px #03bcf4,
        0 0 40px #03bcf4 ;
}
.title{
  font-size: 4.5vmin;
  margin-left: 30px;
  margin-bottom: 40px;
}
.box {
    margin: 60px auto ;
    width: 75%;
    padding: 30px 70px;
    background-color: #353535;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    min-width: 480px;
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
.top{
  margin-top: 20px;

}
.createQuiz{
  float: right;
  margin-right: 50px;
}

.description{
  margin: 30px 0 50px ;
  margin-left: 120px;
  font-size: 2.5vmin;
    
}
.right{
  float:right;
  margin-right: 50px;
}
.middle{
  margin-top: 30px;
}
@media only screen and (max-width: 992px){
  .top , .middle ,.bottom{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .title{
    display: inline-block;
  }

  .createQuiz{
    width: 75%;
    margin-right: 0;
  }
  .description{
    font-size: 3vmin;
    margin-left: 30px;
  }
  .right{
    float: none;
    margin-right: 0;
  };
}  
</style>