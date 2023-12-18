<template>
    <div class="container">
        <div class="el-textarea__title">
            <div class="el-textarea__title-text __text_small __color_gray">{{textValue}}</div>
        </div>
        <div class="el-textarea__container">
            <textarea class="__text_small"
                      :value="value"
                      :placeholder="placeholder"
                      :maxlength="number? maxlength : ''"
                      @input="$emit('input', $event.target.value)">
            </textarea>
        </div>
        <div v-if="bottomText" class="el-textarea__bottom-text">
            <div v-if="valdation" class="el-textarea__report">{{textError}}</div>
            <div v-if="number" class="el-textarea__amount __text_small __color_bittersweet">{{getTextCount()}}/{{ maxlength }}</div>
        </div>
    </div>
</template>

<style scoped>
    .container{
        display: flex;
        width: auto;
        height: 352px;
        padding: 0;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 8px;
    }

    .el-textarea__container{
        display: flex;
        padding: 16px;
        align-items: flex-start;
        gap: 0;
        flex: 1 0 0;
        align-self: stretch;
        border-radius: 36px;
        background: #FFFFFF;
        color: #9DA5AF;
    }

    .el-textarea__container textarea{
        width: 100%;
        height: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        border: 0;
        outline: none;
        resize: none;
    }

    .el-textarea__title{
        display: flex;
        padding: 0 24px;
        justify-content: center;
        align-items: flex-start;
        gap: 8px;
        align-self: stretch;
        height: auto;
    }

    .el-textarea__title-text{
        flex: 1 0 0;
        overflow: hidden;
        color: #9DA5AF;
        text-overflow: ellipsis;
    }


    .el-textarea__bottom-text{
        display: flex;
        padding: 0 24px;
        justify-content: flex-end;
        align-items: center;
        gap: 8px;
        align-self: stretch;
    }

    .el-textarea__report{
        flex: 1 0 0;
        overflow: hidden;
        color: #FF7461;
        text-overflow: ellipsis;
    }

    .el-textarea__amount{
        overflow: hidden;
        color: #9DA5AF;
        text-align: right;
        text-overflow: ellipsis;
    }


    .el-textarea__container:hover{
        outline: 2px solid #B1C909;
    }

    .el-textarea__container:focus{
        border: 2px solid #B1C909;
        color: red;
    }


    @media screen and (max-width: 1366px) {
        .container{
            display: flex;
            width: auto;
            height: 240px;
        }
    }

    @media screen and (max-width: 360px) {
        .container{
            display: flex;
            width: auto;
            height: 240px;
        }
    }


</style>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "ELTextArea",
    props: {
        value: {
            type: String,
            default: '',
        },
        placeholder:{
            type: String,
            default: '',
        },
        bottomText:{
            type:Boolean,
            default:true
        },
        valdation:{
            type:Boolean,
            default:true
        },
        number:{
            type:Boolean,
            default:true
        },
        textValue:{
            type:String,
            default:'Введите значение'
        },
        textError:{
            type:String,
            default: 'Ошибка'
        },
        maxlength:{
            type:Number,
            default: 500,
        }
    },
    computed:{
        getTextCount(){
            return this.value.length;
        },
    }
})
</script>