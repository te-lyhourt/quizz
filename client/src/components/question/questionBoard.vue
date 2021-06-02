<template v-html="html">
  <div>
    <div id="popUp" class="popUp" :class="{ active: isActive }">
        <div class="top">
          <div class="title">
            <span >Add question</span>
          </div>
          <div>
            <button class="x" data-close-button @click="getClick" >&times;</button>
          </div>
          
        </div>
        
        <div class="bottom">
          <div class="multiple-question question-box">
            <a href="/createquiz/multiple">
              <i class="fas fa-border-all fa-lg"></i>
              Multiple Quesion
            </a>
          </div>
          <div class="truefalse-question question-box">
            <a href="">
              <div class="truebox">
                <i class="fas fa-columns fa-lg"></i>
                True or False
              </div>
              
            </a>
          </div>
        </div>
    </div>

    <div id="overlay" :class="{ active: isActive }"></div>
  </div>
</template>
<script>
export default {
    props:['text'],
    data(){
        return{
            isActive: true
        }
        
    },
    methods: {
      getClick(){
        this.isActive = false;
        this.$emit('getClick')
      }
        
    },
};
</script>
<style scoped>
*{
  color: white;
}
#popUp {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: 200ms ease-in-out;
  border: solid #767676 0.75px;
  border-radius: 10px;
  background-color: #353535;
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
.top{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}
.title{
  font-size: 1.25rem;
  margin-top: 10px;
  margin-left: 70px;
}
.x{
  float:right;
  background: transparent;
  border: none;
  font-size: 1.5rem;
}
.bottom{
  text-align: center;
  display: flex;
  flex-direction: row;
  
}
.question-box{
  margin: 20px;
  border-radius: 10px;
  border: #767676 0.5px solid;
  padding: 5px;
  padding-top: 10px;
  width: 120px;
  background: #202124;
}
.question-box:hover{
      text-shadow: 0 0 10px #03bcf4,
        0 0 20px #03bcf4,
        0 0 40px #03bcf4 ;
}
.truebox{
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
a{
  text-decoration: none;
  color: white;
}
</style>