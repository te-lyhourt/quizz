<template v-html="html">
    <div>
         <div class="box">
             <div id="end">
                <h1 style="font-size:5rem;">Thank you!</h1>
                <h1>
                    <br>your score is:
                </h1>
                <h1 class="finalScore">
                    {{score}}
                </h1>
                <a href="/" class="btn btn-dark start-btn">Go home <i class="fas fa-home"></i></a>


                

             </div>
         </div>
    </div>
</template>
<script>
export default {
    mounted() {
        this.getScore()
    },

    data() {
        return {
            score:''
        }
    },
    methods: {
        getScore(){
            this.score =  localStorage.getItem('mostRecentScore');
        }
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