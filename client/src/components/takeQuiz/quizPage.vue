<template v-html="html">
    <div class="box">
        <div id="game" class="flex-colum justify-center">
            <div id="hud">
                <div class="hud-item">
                    <p id="progressText" class="hud-prefix">
                        Question
                    </p>
                    <div id="progressBar">
                        <div id="progressBarFull">

                        </div>
                    </div>
                </div>
                <div class="hub-item">
                    <p class="hud-prefix">
                        Score
                    </p>
                    <h1 class="hud-main-text" id="score">
                        0
                    </h1>
                </div>
            </div>
            <h4 id="question">What is the answer of this question</h4>
            <div class="choice-container">
                <p class="choice-prefix">A</p>
                <p class="choice-text" data-namer="1">Choice</p>
            </div>
            <div class="choice-container">
                <p class="choice-prefix">B</p>
                <p class="choice-text" data-namer="2">Choice 2</p>
            </div>
            <div class="choice-container">
                <p class="choice-prefix">C</p>
                <p class="choice-text" data-namer="3">Choice 3</p>
            </div>
            <div class="choice-container">
                <p class="choice-prefix">D</p>
                <p class="choice-text" data-namer="4">Choice 4</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    mounted() {
        document.title = "Quiz Page";
        const plugin1 = document.createElement("script");
        plugin1.setAttribute(
            "src",
            "./game.js"
        );
        plugin1.async = true;
        document.head.appendChild(plugin1);
    },
}
</script>
<style scoped>

    .box {
        margin: 0 auto;
        width: 50%;
        padding: 50px 70px 0;
        min-width: 480px;
    }
    .flex-colum{
        display: flex;
        flex-direction: column;
    }
    .flex-center{
        justify-content: center;
        align-items: center;
    }
    .justify-center{
        justify-content: center;
    }
    .hidden{
        display: none;
    }
    .text-center{
        text-align: center;
    }
    #question{
        margin: 60px 0 30px;
    }
    .choice-container{
        display: flex;
        margin-bottom: 0.8rem;
        border-radius: 10px;
        font-size: 1.25rem;
        border: #767676 0.5px solid;
        background: #202124;
    }
    .choice-container:hover{
        text-shadow: 0 0 10px #03bcf4;
        box-shadow: 0 0 10px #03bcf4,
        0 0 20px #03bcf4,
        0 0 40px #03bcf4 ;
        transform: scale(1.02);
        transition: transform 100ms;
    }
    .choice-prefix{
        padding: 20px 25px;
        margin-bottom: 0;
    }
    .choice-text{
        padding: 20px;
        width: 100%;
        margin-bottom: 0;
    }
    .correct{
        background: linear-gradient(32deg, rgba(11,223,36) 0%,
        rgba(41,232,111)100%);
    }
    .incorrect{
        background: linear-gradient(32deg, rgba(238,29,29,1) 0%,
        rgba(224,11,11,1)100%);
    }
    /* head up display */
    #hud{
        display: flex;
        justify-content: space-between;
    }
    .hud-prefix{
        
        font-size: 1.35rem;
    }
    .hub-main-text{
        text-align: center;
    }
    #progressBar{
        width:10rem;
        height: 1.5rem;
        border: 2px solid rgb(11,223,36);
        margin-top: 2rem;
        border-radius: 50px;
        overflow: hidden;
    }
    #progressBarFull{
        height: 100%;
        background:rgb(11,223,36) ;
        width: 0%;
    }
    @media screen and(max-width:768px){
        .choice-container{
            min-width: 40rem;
        }
        
    }
</style>