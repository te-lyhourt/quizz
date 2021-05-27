<template v-html="html">
  <div class="box">
      <homepage></homepage>
      <div class="content">
        <div class="left">
          <sidebar></sidebar>
        </div>
        <div>
          <h2 class="title">
              Quiz
          </h2>
          <div class="quiz row">
            <quiz-box></quiz-box>
            <quiz-box></quiz-box>
            <quiz-box></quiz-box>
            <quiz-box></quiz-box>
            <quiz-box></quiz-box>
          </div>
        </div>
        
      </div>
  </div>
</template>
<script>
import Homepage from '../homepage.vue';
import Sidebar from '../sidebar.vue';

import QuizBox from './quizBox.vue';

export default {
  components: {
    Homepage,
    QuizBox,
    Sidebar,
  },
};
</script>
<style scoped>
.title{
  margin-top: 30px;
}
.box{
  display: flex;
  flex-direction: column;
  height: 100%;
}
.content{
  margin: 0 0 0 0;
  display: flex;
  height: 100%;
}
.quiz{
  display: flex;
  flex-direction: row;
}
.left{
  margin-right: 40px;
  background: #11101d;
}
</style>
