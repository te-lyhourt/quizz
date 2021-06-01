<template v-html="html">
    <a href="">
        <div class="questionbox">
            <span class="question">{{question}}</span>
            
            <span class="type">
                type: {{type}}
            </span>
        </div>
    </a>
    
</template>
<script>
export default {
    props:["question","type"]
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
    .type{
        float: right;
        margin-right: 5px;
    }
    a:hover{
        text-shadow: none;
        color: white;
        text-decoration: none;
    }
</style>