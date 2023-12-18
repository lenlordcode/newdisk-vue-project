<template>
    <div class="el-modal__container"
         :title="title">
        <div class="el-modal__background"></div>
        <div class="el-modal">
            <div class="el-modal__close">
                <el-button :icon="true" :size="'small'" :img="'close'" @click="closeModal" />
            </div>
            <div class="el-modal__elements">
                <div class="el-modal__title __h2 __color_white">{{title}}</div>
                <slot></slot>
            </div>
        </div>
    </div>

</template>

<style>

    .el-modal__container {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
    }

    .el-modal__background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .el-modal {
        max-width: 780px;
        width: 100%;
        height: auto;
        border-radius: 40px;
        background-color: #1B2F46;
        z-index: 1;
    }

  .el-modal__close{
      float: right;
      margin: 15px;
  }

  .el-modal__elements{
      padding: 80px;
  }

  .el-modal__title{
      margin-bottom: 40px;
  }

  .el-modal__footer{
      display: flex;
      justify-content: space-between;
      text-align: center;
      align-items: center;
      margin: 40px 0 20px;
  }

  .el-modal__footer_link{
      display: flex;
  }

  .el-modal__footer_error{
      padding: 8px 20px;
      border-radius: 24px;
      background: rgba(255, 116, 97, 0.10);
  }


    @media screen and (max-width: 1366px) {
        .el-modal {
            max-width: 610px;
            width: 100%;
            height: auto;
            border-radius: 40px;
            background-color: #1B2F46;
            z-index: 1;
        }

        .el-modal__title{
            margin-bottom: 20px;
        }

        .el-modal__elements{
            padding: 56px;
        }

        .el-modal__footer{
            display: flex;
            justify-content: space-between;
            text-align: center;
            align-items: center;
            margin: 40px 0 20px;
        }
        .el-modal__footer_link{
            text-align: left;
            display: block;
        }
    }

    @media screen and (max-width: 766px) {
        .el-modal {
            max-width: 610px;
            width: 100%;
            height: auto;
            border-radius: 40px;
            background-color: #1B2F46;
            z-index: 1;
        }

        .el-modal__title{
            margin-bottom: 20px;
            line-height: 1;
        }

        .el-modal__elements{
            padding: 56px;
        }

        .el-modal__footer{
            display: flex;
            justify-content: space-between;
            text-align: center;
            align-items: center;
            margin: 40px 0 20px;
        }
        .el-modal__footer_link{
            text-align: left;
            display: block;
        }
    }

    @media screen and (max-width: 360px) {
        .el-modal {
            max-width: 320px;
            width: 100%;
            height: auto;
            border-radius: 40px;
            background-color: #1B2F46;
            z-index: 1;
        }

        .el-modal__title{
            width: 320px;
            height: 50px;
            margin: 30px 0 28px;
            margin: v-bind(getMarginTitle);
        }

        .el-modal__close{
            margin: 0;
        }
        .el-modal__elements{
            padding: 16px 16px;
        }

        .el-modal__footer{
            display: block;
            text-align: center;
            align-items: center;
            margin: 28px 0 10px;
            color: red;
        }

        .el-modal__footer_link{
            display: block;
            width: 300px;
            text-align: center;
        }
    }


</style>


<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "UIModal",
    props:{
        value:{
            type:String,
            default:''
        },
        title:{
            type:String,
            default: ''
        },
    },
    data(){
        return{
            showModal: true,
        }
    },
    computed:{
        getMarginTitle(){
            if (this.title === 'Регистрация'){
                return '0 0 5px';
            }else if(this.title === 'Вход в ваш аккаунт'){
                return '30px 0 28px';
            }else{
                return '0';
            }
        }
    },
    methods:{
        closeModal: function (){
            this.$emit('closeModal');
            return '';
        }
    }
})
</script>