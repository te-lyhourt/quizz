<template v-html="html">
  <div col-lg-3 col-md-12>
    <a @click="goCreateQuiz" class="text">
      <div class="card box-container ">
        <img class="card-img-top" src="../../assets/brand.png" alt="" />
        <div class="card-body">
          <h5 class=".card-title">{{quiz.title}}</h5>
          <h5 >due: {{deadline}}</h5>
          
        </div>
      </div>
    </a>
  </div>
</template>
<script>
import router from '../../router/router'
export default {
  props:["quiz","userID"],
  mounted() {
    this.duedate()
  },
  data() {
    return {
      deadline:'',
    }
  },
  methods: {
    duedate(){
      var current = new Date()
      var duedate = new Date(`${this.quiz.dueDate}`)
      var deadline = duedate-current/(3600*24*1000)
      if(deadline==1){
        this.deadline = "tommorow"
      }
      else if(deadline<0){
        this.deadline = "already expired"
      }
      else if(deadline>1){
        this.deadline =  duedate.getDate() + "-" +(duedate.getMonth()+1) + "-" + duedate.getFullYear();
      }
    },

    goCreateQuiz(){
      console.log(this.quiz)
      localStorage.setItem('quiz',JSON.stringify(this.quiz));
      router.push({path:`/createquiz/${this.userID}`})
    },
  },
};
</script>
<style scoped>
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
.text{
  text-decoration: none;
  color: white;
}
.text:hover{
  color: white;
}
</style>
