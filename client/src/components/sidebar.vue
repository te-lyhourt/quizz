<template v-html="html">
  <div class="sidebar">
      <ul class="nav_list">
          
        <li>
          <a @click="goHome()" class="homepage">
            <i class='bx bxs-message-rounded-add'></i>
            <span class="links_name">Create quiz</span>
          </a>
          <span class="tooltip">Create quiz</span>
        </li>

        <li>
          <a @click="takeQuiz()" class="quizpage">
           <i class='bx bxs-message-rounded-edit'></i>
            <span class="links_name">Take quiz</span>
          </a>
          <span class="tooltip">Take quiz</span>
        </li>
        
      </ul>
    </div>
</template>
<script>
import router from '../router/router'
export default {
  el:".sidebar",
  props:["location","userID"],
  components:{
  
  },
  mounted() {
    if(this.location!=undefined){
      if(this.location=="homepage") this.$el.querySelector(".homepage").classList.add("active");
      else if(this.location=="quizpage") this.$el.querySelector(".quizpage").classList.add("active");
    }
  },
  methods: {
    goHome(){
      router.push({name:"homepage"})
    },
    takeQuiz(){
      router.push({path:`/quizpage/${this.userID}`})

    }
  },
};
</script>
<style scoped>


* {
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
}

::selection {
  color: #fff;
  background: #11101d;
}
.sidebar {
  position: fixed;
  width: 78px;
  top:96px;
  bottom: 0;
  background: #11101d;
  padding: 6px 14px;
  z-index: 99;
  transition: all 0.5s ease;
  float:left;
  min-width:20px;
}
.sidebar.active {
  width: 240px;

}

.sidebar #btn {

  color: #fff;
  top: 6px;
  left: 50%;
  font-size: 30px;
  height: 50px;
  width: 50px;
  text-align: center;
  line-height: 50px;
}

.sidebar.active #btn {
  left: 90%;
}
.sidebar ul {
  margin-top: 20px;
}
.sidebar ul li {
  position: relative;
  height: 50px;
  width: 100%;
  list-style: none;
  line-height: 50px;
  margin: 20px 0;
}
.sidebar ul li .tooltip {
  
  left: 125px;
  top: 0;
  transform: translate(-50%, -50%);
  border-radius: 6px;
  height: 35px;
  width: 120px;
  background: #fff;
  line-height: 35px;
  text-align: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  transition: 0s;
  opacity: 0;
  pointer-events: none;
  display: block;
  color: black;
}
.sidebar.active ul li .tooltip {
  display: none;
}
.sidebar ul li:hover .tooltip {
  transition: all 0.5s ease;
  opacity: 1;
  top: 50%;
}
.sidebar ul li a {
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  border-radius: 12px;
  white-space: nowrap;
  transition: all 0.4s ease;
}
.sidebar ul li a:hover {
  color: #11101d;
  background: #fff;
}
.sidebar ul li a.active{
  color: #11101d;
  background: #fff;
}
.sidebar ul li i {
  font-size: 30px;
  font-weight: 400;
  height: 50px;
  min-width: 50px;
  border-radius: 12px;
  line-height: 50px;
  text-align: center;
}
.sidebar .links_name {
  font-size: 15px;
  font-weight: 400;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
}
.sidebar.active .links_name {
  transition: 0s;
  opacity: 1;
  pointer-events: auto;
}

</style>
