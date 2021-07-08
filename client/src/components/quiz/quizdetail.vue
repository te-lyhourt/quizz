<template >
    <div class="box">
        <div>
            <a @click="cancle()" class="cancel" style="font-size:1.25rem">Back</a>
        </div>
        
        <div class="top" >
          
            <span class="title">
                Quiz title:  
            </span>
            <button class="btn btn-dark button-text createQuiz" @click="goCreateQuiz()" >edit quiz</button>
            <p class="description">{{quiz.title}}</p>
        </div>
        <div class="middle">
            <span class="title">Description: </span>
            <p class="description">{{quiz.description}}</p>
        </div>
        <div class="bottom">
            <span class="title">Practicipian: </span>
            <div >

                <usertable></usertable>
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
        const oldQuiz = JSON.parse(localStorage.getItem('quiz'))
        if(oldQuiz!=null){
          this.quiz = oldQuiz
        }
    },
    data() {
        return {
          quiz:'',
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
  margin-right: 10px;
}

.description{
  margin: 30px 0 50px;
  margin-left: 120px;
  font-size: 3vmin;
    
}

@media only screen and (max-width: 992px){

  .title{
    display: inline-block;
  }
  .top{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .createQuiz{
    width: 75%;
    margin-right: 0;
  }
  .description{
    margin: 25px 0 50px;
    font-size: 4vmin;
    margin-left: 120px;
  }
}  
</style>