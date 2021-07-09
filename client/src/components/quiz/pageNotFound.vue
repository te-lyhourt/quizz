<template v-html="html">
    <div>
         <div class="box">
             <div id="end">
                 <h1 style="font-size: 25vmin;">404</h1>
                <h1 style="font-size:8vmin;margin-bottom:40px;">Sorry ,the page you are looking for is not expist !!!</h1>
                <a href="/" class="btn btn-dark start-btn">Go home <i class="fas fa-home"></i></a>
             </div>
         </div>
    </div>
</template>
<script>
export default {
    mounted() {
        document.title="404 not found"
    },
}
</script>
<style scoped>
    .box {
        margin: 30px auto;
        width: 50%;
        padding: 50px 70px 0;
        min-width: 480px;
        text-align: center;
    }
    .finalScore{
        font-size: 5rem;
        margin: 20px 0 50px;
    }

    .btn-dark{
        margin: 20px 0;
        width: 60%;
        font-size: 1.5rem;
    }


</style>