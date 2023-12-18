<template>
    <div class="el-input__container">
        <div class="el-input__title">
            <div class="el-input__title-text __text_small __color_gray">{{ textValue }}</div>
        </div>
        <div class="el-input__block">
            <div class="el-input__sub_block">
                <input class="__text_small"
                       :value="value"
                       :placeholder="placeholder"
                       :type="typeText"
                       :maxlength="number? maxlength : ''"
                       @input="$emit('input', $event.target.value)">
            </div>
            <img v-if="iconRight" class="el-input__icon" :src="imgVisibility" @click="setVisibilityText()">
        </div>
        <div v-if="bottomText" class="el-input__bottom_text">
            <div v-if="valdation" class="el-input__report __text_small __color_bittersweet">{{textError}}</div>
            <div v-if="number" class="el-input__amount">{{getTextCount()}}/{{maxlength}}</div>
        </div>
    </div>
</template>

<style scoped>
    .el-input__container{
        display: flex;
        width: 100%;
        height: 100%;
        padding: 0;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 8px;
        margin: 20px 0;
    }

    @media screen and (max-width: 360px) {
        .el-input__container{
            margin: 0;
        }
    }

    .el-input__title{
        display: flex;
        padding: 0 24px;
        justify-content: center;
        align-items: flex-start;
        gap: 8px;
        align-self: stretch;
        height: auto;
    }

    .el-input__title-text{
        flex: 1 0 0;
        overflow: hidden;
        color: #9DA5AF;
        text-overflow: ellipsis;
    }

    .el-input__block{
        display: flex;
        height: 72px;
        padding: 0 16px;
        align-items: center;
        gap: 0;
        align-self: stretch;
        border-radius: 36px;
        background: #FFF;

    }

    .el-input__sub_block{
        display: flex;
        padding: 0 12px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 8px;
        flex: 1 0 0;
        align-self: stretch;
        border-radius: 0;
        color: #9DA5AF;
    }

    .el-input__sub_block input{
        height: 27px;
        align-self: stretch;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        border-color: #FFFFFF;
        outline: 0;
        border: 0;
    }

    @media screen and (max-width: 360px){
        .el-input__sub_block input{
            width: 180px;
        }
    }


    .el-input__bottom_text{
        display: flex;
        padding: 0 24px;
        justify-content: flex-end;
        align-items: center;
        gap: 8px;
        align-self: stretch;
    }

    .el-input__report{
        flex: 1 0 0;
        overflow: hidden;
        color: #FF7461;
        text-overflow: ellipsis;
    }

    .el-input__amount{
        overflow: hidden;
        color: #9DA5AF;
        text-align: right;
        text-overflow: ellipsis;
    }


    .el-input__block:hover{
        outline: 2px solid #B1C909;
    }

    .el-input__block:active{
        outline: 2px solid #B1C909;
        color: #0A1F38;
    }



</style>

<script>
import {defineComponent} from 'vue'
import imgPasswordOn from '@/assets/icon/on-password.png'
import imgPasswordOff from '@/assets/icon/off-password.png'


export default defineComponent({
    name: "ELInput",
    props: {
        value: {
            type: String,
            default: '',
        },
        placeholder:{
            type: String,
            default: '',
        },
        type:{
            type:String,
            default:'text',
        },
        iconRight:{
            type:Boolean,
            default:true
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
            type: Boolean,
            default: true,
        },
        textValue:{
            type:String,
            default:'Введите значение',
        },
        textError:{
            type:String,
            default:'Сообщение об ошибке',
        },
        src:{
            type:String,
            default:"@/assets/icon/on-password.png",
        },
        maxlength:{
            type:Number,
            default: 100,
        }
    },
    data(){
        return{
            textVisibility:false,
            typeText: this.iconRight ? 'password' : '',
            imgVisibility: imgPasswordOff,
            amountText:0,
        }
    },
    computed:{
        getTextCount(){
            return this.value.length;
        },
    },
    methods: {
        setVisibilityText (){
            this.textVisibility = !this.textVisibility;
            if (this.textVisibility) {
                this.imgVisibility = imgPasswordOn;
                this.typeText = 'text'
            } else{
                this.imgVisibility = imgPasswordOff;
                this.typeText = 'password'
            }
        }
    }

})
</script>