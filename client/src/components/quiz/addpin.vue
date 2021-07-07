<template v-html="html">
  <div>
    <div id="popUp" class="popUp" :class="{ active: isActive }">
        <div class="top">
          <button class="x" data-close-button @click="getClick" >&times;</button>
        </div>
        
        <div class="bottom">
          <h4>Please fill in PIN code of quiz:</h4>
          <input type="text" v-model="pin" class="addPIN" maxlength="12">
          <p class="error" v-if="noQuestion">{{error}}</p>
          <button @click="getClick" class="btn btn-dark button-text">Ok</button>
        </div>
    </div>

    <div id="overlay" :class="{ active: isActive }"></div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            isActive: true,
            pin:'',
            wrongPIN:false,
        }
        
    },
    methods: {

        getClick(){
          this.isActive = false;
          this.$emit('getClick')
        }
    },
    computed:{
        pinlength(){
            if(pin.length>11) this.wrongPIN = true
        }
    }
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
    margin: 0 auto;
    border: solid black ;
    border-radius: 3px;
}
</style>