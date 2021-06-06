<template v-html="html">
    <div >
        
        <brand></brand>
        <div class="box">
            <h1>Are you aready?</h1>
            <a href="" class="btn btn-dark start-btn">Start</a>
        </div>
        
    </div>
</template>
<script>
import brand from '../brand.vue'

export default {
    mounted() {
        document.title = "Start Quiz";
    },
    components: { brand },
    
}
</script>
<style scoped>

    .box{
        margin-top: 100px;
        box-sizing: border-box;
        text-align: center;
        font-size: 62.5%;
        min-width: 480px;
    }
    h1{
        font-size: 5.4rem;
        margin-bottom: 5rem;
    }
    h2{
        font-size: 4.2rem;
        margin-bottom: 4rem;
    }
    .start-btn{
        font-size: 1.25rem;
        border: solid #767676 0.90px;
        padding: 1rem 0;
        width: 10rem;
        text-align: center;
        margin-bottom: 1rem;
        text-decoration: none;
        border-radius: 12px;
    }
    .start-btn:hover{
        text-shadow: 0 0 10px #03bcf4,
            0 0 20px #03bcf4,
            0 0 40px #03bcf4 ;
        transition: transform 150ms ;
        transform: scale(1.05);
    }

    .btn[disabled]:hover{
        cursor: not-allowed;
        box-shadow: none;
        text-shadow: none;
        transform: none;
    }
</style>