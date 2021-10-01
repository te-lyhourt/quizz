<template v-html="html">
    <div class="container">
        <a class="brand" href="/">
          Quizz!
          <i class="fas fa-pen"></i>
        </a>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .container{
        text-align: center;
        padding-top: 50px;
        margin: 0;
    }
   .brand
    {
        font-size: 3rem;
        font-weight: 700;
        color: white;
    }
    
    .brand:hover{
        text-decoration: none;
        color: white;
        text-shadow: 0 0 10px #03bcf4,
        0 0 20px #03bcf4,
        0 0 40px #03bcf4 
    } 
</style>