<template>
  <div id="app">
    <div id="nav">
        <Header></Header>
    </div>
      <Container><router-view :key="$route.fullPath"/></Container>
  </div>
</template>

<style scoped>
</style>

<script setup>
import Header from "@/shared/header/Header.vue";
import Container from "@/shared/container/Container.vue";

</script>