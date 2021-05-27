<template v-html="html">
  <div>
    <div class="card box-container" style="width: 15%;">
      <img class="card-img-top" src="../../assets/brand.png" alt="" />
      <div class="card-body">
        <h5 class="card-title">Quiz Name</h5>
        <h5 class="card-title">Quiz Name</h5>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.card .box-container {
  border: solid #787878 1px;
  text-align: center;
  margin: 30px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}
.card-body{
    background: #1F1F1F;
}
.card-title {
  display: inline-block;
  width: 80%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
