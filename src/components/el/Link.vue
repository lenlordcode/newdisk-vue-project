<template>
    <a v-if="href" class="el-link __text_small_bold" @click="$emit('click')" :href="href"><slot></slot></a>
    <a v-else class="el-link __text_small_bold" @click="$emit('click')"><slot></slot></a>
</template>

<style scoped>
  .el-link{
      color: #B1C909;
      display: inline-flex;
      padding: 0;
      justify-content: center;
      align-items: flex-start;
      text-decoration: none
  }

  .el-link:hover{
      color: #FFFFFF;
  }
</style>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "ELLink",
    props:{
        href:{
            type: String,
            default: '',
        }
    }
})
</script>