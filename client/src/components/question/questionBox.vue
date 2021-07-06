<template v-html="html">
    <div>
        <div class="questionbox">
            <span class="question">{{question.question}}</span>
            <div class="feature">
                <div class="edit">
                    <button class="empty-btn" @click="editQuestion()">
                        <i class="fas fa-edit"></i>
                    </button>
                    
                </div>
                <div class="delete">
                    <button class="empty-btn">
                        <i class="fas fa-trash-alt" @click="deleteQuestion()"></i>
                    </button>
                    
                </div>
                
            </div>
        </div>

        <truefale v-if="truefale" @getClick="truefale=false" @sendEdit="sendEdit" :questionEdit="question"></truefale>
        <multiple v-if="multiple" @getClick="multiple=false" @sendEdit="sendEdit" :questionEdit="question"></multiple>
    </div>
    
    
</template>
<script>
import truefale from '../question/trueFales.vue'
import multiple from '../question/mutipleChioce.vue'

export default {
    props:["question"],
    components:{
        multiple,
        truefale,
    },
    data() {
        return {
            id:this.question.id,
            multiple:'',
            truefale:''
        }
    },
    methods: {
        deleteQuestion(){
            let respone = confirm("Do you really want to delete question : " + this.question.question)
            if(respone){
                this.$emit("deleteQuestion",this.question.id)
            }
        },
        editQuestion(){
            const type =  this.question.type
            if(type=="multiple") this.multiple = true
            if(type=="truefalse") this.truefale = true
        },
        sendEdit(value){
            this.$emit("editQuestion",value);
        }
    },
}
</script>
<style scoped>
    .questionbox{
        text-align: left;
        width: 100%;
        border-radius: 10px;
        border: #767676 0.5px solid;
        padding: 15px 15px 15px 20px;
        background: #202124;
        margin-top: 20px;
    }
    .questionbox:hover{
        box-shadow: 0 0 10px #03bcf4,
        0 0 20px #03bcf4,
        0 0 40px #03bcf4 ;
    }
    .question{
        display: inline-block;
        width: 60%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .feature{
        float: right;
        display: flex;
    }
    .edit{
        margin-right: 10px;
    }
    a:hover{
        text-shadow: none;
        color: white;
        text-decoration: none;
    }
    .empty-btn{
        background: none;
        outline: none;
        border: none;
        color: white;
    }
    .empty-btn:hover{
        text-shadow: 0 0 10px #03bcf4,
        0 0 20px #03bcf4,
        0 0 40px #03bcf4 ;
    }
    
</style>