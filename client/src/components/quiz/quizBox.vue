<template v-html="html">
  <div col-lg-3 col-md-12>
    <a href="#" class="text">
      <div class="card box-container ">
        <img class="card-img-top" src="../../assets/brand.png" alt="" />
        <div class="card-body">
          <h5 class=".card-title">Quiz Name</h5>
          <h5 >date</h5>
          
        </div>
      </div>
    </a>
  </div>
</template>
<script>
export default {};
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
