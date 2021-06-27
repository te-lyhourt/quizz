<template v-html="html">
    <div class="box">
        <div id="game" class="flex-colum justify-center">
            <div id="hud">
                <div class="hud-item">
                    <p id="progressText" ref="progressText" class="hud-prefix">
                        Question {{questionCounter}} of 4
                    </p>
                    <div id="progressBar">
                        <div id="progressBarFull" ref="progressBarFull">

                        </div>
                    </div>
                </div>
                <div class="hub-item">
                    <p class="hud-prefix">
                        Score
                    </p>
                    <h1 class="hud-main-text" id="score" ref="score">
                        0
                    </h1>
                </div>
            </div>
            <h4 id="question" ref="question">What is the answer of this question</h4>
            <div class="choice-container"  >
                <p class="choice-prefix">A</p>
                <p class="choice-text" data-number="1" ref="choices" @click="choices($event)">Choice</p>
            </div>
            <div class="choice-container" >
                <p class="choice-prefix">B</p>
                <p class="choice-text" data-number="2" ref="choices" @click="choices($event)">Choice 2</p>
            </div>
            <div class="choice-container"  >
                <p class="choice-prefix">C</p>
                <p class="choice-text" data-number="3" ref="choices" @click="choices($event)">Choice 3</p>
            </div>
            <div class="choice-container"  >
                <p class="choice-prefix">D</p>
                <p class="choice-text" data-number="4" ref="choices" @click="choices($event)">Choice 4</p>
            </div>
        </div>
    </div>
</template>
<script>

// const question = document.querySelector('#question');

// const progressText = document.querySelector('#progressText');
// const scoreText = document.querySelector('#score');
// const progressBarFull = document.querySelector('#progressBarFull');


export default {
    el : '#game',
    data() {
        return {
            currentQuestion : {},
            acceptingAnswer : true,
            score : 0,
            questionCounter : 0,
            availableQuestion : [],
            questions : [
                {
                    question : 'what is 2 + 2 ?',
                    choice1 : '2',
                    choice2 : '4',
                    choice3 : '17',
                    choice4 : '21',
                    answer :2,
                },
                {
                    question : 'what is 2 + 4 ?',
                    choice1 : '22',
                    choice2 : '6',
                    choice3 : '17',
                    choice4 : '21',
                    answer :2,
                },
                {
                    question : 'what is 100% - 4% ?',
                    choice1 : '2aa',
                    choice2 : '96%',
                    choice3 : 'aaa',
                    choice4 : '21',
                    answer :2,
                },  
                {
                    question : 'what is 23 + 2 ?',
                    choice1 : '2',
                    choice2 : '25',
                    choice3 : '17',
                    choice4 : '21',
                    answer :2,
                },
            ]
        }
    },
    mounted() {
        document.title = "Quiz Page";
        this.startGame()
    },
    methods: {
        startGame() {
            this.questionCounter = 0
            this.score = 0
            this.availableQuestion = [...this.questions]
            this.getNewQuestion()
        },
        getNewQuestion () {
            const MAX_QUESTION = 4

            if(this.availableQuestion.length === 0 || this.questionCounter > MAX_QUESTION){
                localStorage.setItem('mostRecentScore',this.score);

                return window.location('/end.html');
            }
            this.questionCounter++

            this.$refs.progressBarFull.style.width = (this.questionCounter/MAX_QUESTION)*100 + "%" 

            const questionIndex = Math.floor(Math.random() * this.availableQuestion.length)
            this.currentQuestion = this.availableQuestion[questionIndex]
            this.$refs.question.innerText = this.currentQuestion.question
            const choices = Array.from(this.$el.querySelectorAll('.choice-text'));
            choices.forEach(choice =>{
                const number = choice.dataset['number']
                choice.innerText = this.currentQuestion['choice'+number]
            })

            this.availableQuestion.splice(questionIndex,1)
            this.acceptingAnswer = true
        },
        incrementScore(num){
            this.score +=num
            this.$refs.score.innerText = this.score

        },
        choices($event){
            
            const SCORE_POINS = 100
            if(!this.acceptingAnswer) return 
            this.acceptingAnswer = false
            const selectedChoice = $event.target
            const selectedAnswer = selectedChoice.dataset['number']

            let classToApply = selectedAnswer == this.currentQuestion.answer ? 'correct':
            'incorrect'

            if(classToApply === 'correct'){
                this.incrementScore(SCORE_POINS)
            }

            selectedChoice.parentElement.classList.add(classToApply)

            setTimeout(()=>{
                selectedChoice.parentElement.classList.remove(classToApply)
                this.getNewQuestion()
            },1000)
        }
        
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