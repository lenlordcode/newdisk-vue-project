<template>
  <div class="el-note__container">
      <div class="el-note__head">
          <div class="el-note__head-title __h4 __color_white">{{title}}</div>
          <div class="el-note__head-block">
              <img class="el-note__head-block-corner" src="@/assets/note/corner.svg">
              <div class="el-note__head-block-rectangle"></div>
          </div>
      </div>
      <div class="el-note__line"></div>
      <div class="el-note__content __text_normal __color_white">{{content}}</div>
      <div class="el-note__footer">
          <el-button class="__color_white" style="box-shadow: none" img="close" :icon="true" @click="getButtonId">Удалить</el-button>
      </div>
  </div>

</template>

<style scoped>
  .el-note__container{
      display: flex;
      width: 100%;
      max-width: 480px;
      height: auto;
      padding: 0;
      flex-direction: column;
      flex-shrink: 0;
      border-radius: 12px;
      margin-bottom: 40px;
  }
  .el-note__head{
      display: flex;
      padding: 0;
      align-items: flex-start;
      gap: 0;
      align-self: stretch;
      border-radius: 0;
      border-right: 0 solid #97AB0D;
      border-bottom: 1px solid #97AB0D;
      border-left: 0 solid #97AB0D;
  }
  .el-note__head-title{
      display: inline-block;
      padding: 20px 56px 20px 28px;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
      flex: 1 0 0;
      border-top-left-radius: 12px;
      background: #B1C909;
      word-wrap: break-word;
      overflow: hidden;
  }
  .el-note__head-block{
      display: flex;
      padding: 0;
      flex-direction: column;
      align-items: flex-start;
      gap: 0;
      align-self: stretch;
      border-radius: 0;
  }
  .el-note__head-block-corner{
      width: 40px;
      height: 40px;
  }
  .el-note__head-block-rectangle{
      width: 40px;
      flex: 1 0 0;
      border-radius: 0;
      background: #B1C909;
  }
  .el-note__line{
      width: 100%;
      height: 1px;
      border-radius: 0;
      background: #A5BB0C;
  }
  .el-note__content{
      display: inline-block;
      width: auto;
      min-height: 128px;
      max-height: 1000px;
      padding: 20px 28px 28px 28px;
      align-self: stretch;
      border-radius: 0;
      background: #B1C909;
      word-wrap: break-word;
  }
  .el-note__footer{
      display: flex;
      padding: 8px;
      justify-content: flex-end;
      align-items: center;
      gap: 8px;
      align-self: stretch;
      background: #B1C909;
      border-radius: 0 0 12px 12px;
      box-shadow: 0px 15px 15px -10px rgba(0, 0, 0, 0.40);
  }

  @media screen and (max-width: 1366px) {
      .el-note__container{
          display: flex;
          width: 389px;
          height: auto;
          padding: 0;
          flex-direction: column;
          flex-shrink: 0;
          border-radius: 12px;
          margin-bottom: 40px;
      }

      .el-note__content{
          display: inline-block;
          width: auto;
          min-height: 128px;
          max-height: 1500px;
          padding: 20px 28px 28px 28px;
          align-self: stretch;
          border-radius: 0;
          background: #B1C909;
          word-wrap: break-word;
      }
  }

  @media screen and (max-width: 768px) {
      .el-note__container{
          display: flex;
          width: 688px;
          height: auto;
          padding: 0;
          flex-direction: column;
          flex-shrink: 0;
          border-radius: 12px;
          margin-bottom: 40px;
      }

      .el-note__content{
          display: inline-block;
          width: auto;
          min-height: 128px;
          max-height: 1000px;
          padding: 20px 28px 28px 28px;
          align-self: stretch;
          border-radius: 0;
          background: #B1C909;
          word-wrap: break-word;
      }
  }

  @media screen and (max-width: 360px) {
      .el-note__container{
          display: flex;
          width: 320px;
          height: auto;
          padding: 0;
          flex-direction: column;
          flex-shrink: 0;
          border-radius: 12px;
          margin-bottom: 40px;
      }

      .el-note__content{
          display: inline-block;
          width: auto;
          min-height: 128px;
          max-height: 2000px;
          padding: 20px 28px 28px 28px;
          align-self: stretch;
          border-radius: 0;
          background: #B1C909;
          word-wrap: break-word;
      }
  }


</style>

<script>
import {defineComponent} from 'vue'


export default defineComponent({
    name: "ELNote",
    props:{
        title:{
            type:String,
            default: '',
        },
        content:{
            type:String,
            default: '',
        },
        id:{
            type:Number,
            default: 0,
        }
    },
    methods:{
        getButtonId (){
            this.$emit('button-clicked', this.id);
        }
    }


})
</script>