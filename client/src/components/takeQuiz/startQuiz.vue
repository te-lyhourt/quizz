<template v-html="html">
    <div >
        
        <div class="box">
            
            <h1>Are you aready?</h1>
            <h2 id="end-text" ></h2>
            <from class="end-form-container" >
                <button class=" btn btn-dark start-btn" id="saveScoreBtn" @click="startQuiz()" >
                    Start !
                </button>
            </from>
            
        </div>
        
    </div>
</template>
<script>

import router from '../../router/router'
export default {
    mounted() {
        document.title = "Start Quiz";
        const quizID = window.location.pathname.split('/')[2]
        const userID = window.location.pathname.split('/')[3]
        this.userID = userID
        this.quizID = quizID
    },
    data() {
        return {
            quizID:'',
            userID:'',
        }
    },
    methods: {

        startQuiz(){
            router.push({path:`/takequiz/${this.quizID}/${this.userID}`})
        }
    },
}
</script>
<style scoped>

    .box{

        margin-top: 100px;
        box-sizing: border-box;
        text-align: center;
        font-size: 62.5%;
        min-width: 480px;
        padding: 50px 70px 0;
    }


    h1{
        font-size: 5.4rem;
        margin-top: 3rem;
        margin-bottom: 2rem;
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
    
    #end-text{
        font-size:1.5rem;
        margin: 40px 0 30px;
    }

    .end-form-container{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .username{
        margin: 30px 0 50px;
        font-size: 1.5rem;
        border-radius: 8px;
        min-width: 500px;
    }
    input{
        padding: 0 10px;
        outline: none;
    }
</style>