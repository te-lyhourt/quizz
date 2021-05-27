<template v-html="html">
  <div>
      <homepage></homepage>
      <div class="content">
          <h2>
              Quiz
          </h2>
          <quiz-box></quiz-box>
      </div>
  </div>
</template>
<script>
import Homepage from '../homepage.vue';

import QuizBox from './quizBox.vue';

export default {
  components: {
    Homepage,
    QuizBox,
  },
};
</script>
<style scoped>

.content{
    margin: 30px 30px 30px 10%;
}
</style>
