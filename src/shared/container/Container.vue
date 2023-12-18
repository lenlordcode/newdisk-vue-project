<template>
  <div class="container"><slot></slot></div>
</template>

<style scoped>
  .container{
      display: block;
      padding: 0 160px;
      margin: 0 auto;
      background-color: #0A1F38;
  }

  @media screen and (max-width: 1366px) {
      .container{

          padding: 0 80px;
          margin: 0 auto;
          background-color: #0A1F38;
          overflow-y: hidden;

      }
  }

  @media screen and (max-width: 768px) {
      .container{
          padding: 0 40px;
          margin: 0 auto;
          background-color: #0A1F38;
      }
  }

  @media screen and (max-width: 360px) {
      .container{
          padding: 0 20px;
          margin: 0 auto;
          background-color: #0A1F38;
      }
  }

</style>


<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "ContainerBlock"
})
</script>