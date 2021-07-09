<template v-html="html">

  <div col-lg-3 col-md-12 id="text">
    
      <div class="card box-container ">
        <a @click="goCreateQuiz" >
          <img class="card-img-top" src="../../assets/brand.png" alt="" />
          <div class="card-body">
            <h5 class=".card-title">{{quiz.title}}</h5>
            <h5 class="deadline" :class="{ red: late }" >due: {{deadline}}</h5>
          </div>
        </a>
        <div class="botton-btn">
          <button class="btn btn-dark button-text delete" @click="deleteQuestion" v-if="Delete">
            delete 
          </button>
          <button class="btn btn-dark button-text getlink" @click="getcode">
            get code
          </button>
        </div>
      </div>
  </div>

</template>
<script>
import router from '../../router/router'
export default {

  props:["quiz","userID","location"],
  mounted() {
    this.duedate();
    this.disableDelete()
  },
  data() {
    return {
      deadline:'',
      late:false,
      Delete:true
    }
  },
  methods: {

    deleteQuestion(){
      let respone = confirm("Do you really want to delete quiz : " + this.quiz.title)
      if(respone){
        this.$emit("deleteQuiz",this.quiz._id)
      }
    },
    getcode(){
      let respone = confirm("Do you want to get PIN code for ur quiz : " + this.quiz.title)
      if(respone){
        this.$emit("getPINCode",this.quiz.pin)
      }
    },
    duedate(){
      var current = new Date()
      var duedate = new Date(`${this.quiz.dueDate}`)
      var deadline = (duedate - current)/(3600*24*1000)

      if(deadline==1){
        this.deadline = "tommorow"
      }
      else if(Math.floor(deadline)==0){
        this.deadline = "due today"
        
      }
      else if(deadline<0){
        this.late = true
        this.deadline = "already expired"
      }
      else if(deadline>1){
        this.deadline =  duedate.getDate() + "-" +(duedate.getMonth()+1) + "-" + duedate.getFullYear();
      }
    },
    disableDelete(){
      
      if(this.location == "quizpage"){
        this.Delete = false
      }
    },
    goCreateQuiz(){
      
      if(this.location=="homepage"){
        localStorage.setItem('quiz', JSON.stringify(this.quiz));
        router.push({path:`/quizdetail/${this.quiz._id}`})
      }
      if(this.location=="quizpage"){
        router.push({path:`/startquiz/${this.quiz._id}/${this.userID}`})
      }
      
    },
  },
};
</script>
<style scoped>
.red{
  color: red;
}
.card{
  background-color: transparent ;
}
.card-img-top{
  border-radius: 20px 20px 0 0;
}

.box-container {
  width: 200px;
  border: solid #787878 ;
  text-align: center;
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  border-radius: 20px;
}

.box-container:hover{
  box-shadow: 0 0 10px #03bcf4,
        0 0 20px #03bcf4,
        0 0 40px #03bcf4 ;
  text-shadow: 0 0 10px #03bcf4,
        0 0 20px #03bcf4,
        0 0 40px #03bcf4 ;
}

.card-title {
  display: inline-block;
  width: 80%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
#text{
  text-decoration: none;
  color: white;
}
#text:hover{
  color: white;
}
.botton-btn{
  margin: 10px;
  display: flex;
  flex-direction: column;
  
}
.button-text{
  margin: 10px 0 0;
}
.delete:hover{
  background: linear-gradient(32deg, rgba(238,29,29,1) 0%,
        rgba(224,11,11,1)100%);
}
.getlink:hover{
  background: linear-gradient(32deg, rgba(11,223,36) 0%,
        rgba(41,232,111)100%);
}
</style>
