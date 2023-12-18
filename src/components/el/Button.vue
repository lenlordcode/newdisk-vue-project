<template>
        <button class="el-button"
                :type="type"
                :class="['el-button__' + size]"
                @click="$emit('click')">
                <div v-if="icon">
                    <img v-if="img==='login'" src="@/assets/icon/login.png">
                    <img v-else-if="img==='close'" src="@/assets/icon/close.png">
                    <img v-else-if="img==='add'" src="@/assets/icon/add.png">
                </div>
            <div v-if="size==='normal'" class="__text_normal">
                <slot></slot>
            </div>
        </button>
</template>

<style>
    .el-button{
        height: 56px;
        padding: 0px 24px;
        justify-content: center;
        align-items: center;
        gap: 12px;
        flex-shrink: 0;
        border-radius: 32px;
        border: 0;
        background-color: #B1C909;
        box-shadow: 0 15px 46px -10px rgba(0, 0, 0, 0.60);
    }

    .el-button__normal{
        display: inline-flex;
    }

    .el-button__normal:hover{
        background-color: #97AB0D;
    }

    .el-button__normal:active{
        background-color: #819400;
    }

    .el-button__normal:disabled{
        background-color: #9DA5AF;
    }


    .el-button__small{
        display: flex;
        width: 56px;
    }

    .el-button__small:hover{
        background-color: #97AB0D;
    }
    .el-button__small:active{
        background-color: #819400;
    }
    .el-button__small:disabled{
        background-color: #9DA5AF;
    }

</style>

<script>



import {defineComponent} from 'vue'

export default defineComponent({
    name: "ELButton",
    emits: ['click'],
    props:{
        size:{
            type:String,
            default: 'normal'
        },
        type:{
            type:String,
            default:'text-icon'
        },
        icon:{
            type:Boolean,
            default: false,
        },
        fillColor:{
            type:Boolean,
            default: true,
        },
        img:{
            type:String,
            default:''
        },
        href:{
            type:String,
            default: '',
        }
    },
    computed:{
        // iconLink () {
        //     return `@/assets/icon/${this.img}.png`
        // }
    },
})
</script>