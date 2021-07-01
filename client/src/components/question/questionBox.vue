<template v-html="html">
    <div>
        <div class="questionbox">
            <span class="question">{{question.question}}</span>
            <div class="feature">
                <div class="edit">
                    <button class="empty-btn" @click="edit()">
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

        
    </div>
    
    
</template>
<script>
export default {
    props:["question"],
    data() {
        return {
            id:this.question.id,

        }
    },
    methods: {
        deleteQuestion(){
            this.$emit("deleteQuestion",this.question.id)
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