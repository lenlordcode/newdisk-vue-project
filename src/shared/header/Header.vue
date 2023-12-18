<template>
  <header class="header">
    <container>
        <div class="header__container">
            <div class="header__logo"></div>
            <LoginBlock></LoginBlock>
        </div>
    </container>
  </header>
</template>

<style scoped>
    .header{
        padding: 40px 0;
    }

    .header__logo{
        background-image: url("@/assets/logo/logo.png");
        background-repeat: no-repeat;
        width: 218px;
        height: 50px;
    }

    .header__container{
        padding: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }


    @media screen and (max-width: 1366px) {
        .header{
            padding: 20px 0;
        }

    }

    @media screen and (max-width: 766px) {
        .header{
            padding: 20px 0;
        }
    }

    @media screen and (max-width: 360px) {
        .header{
            padding: 20px 0;
        }
        .header__logo{
            background-image: url("@/assets/logo/logo.png");
            background-size: 154px 36px;
            background-repeat: no-repeat;
        }
    }


</style>

<script>
import {defineComponent} from 'vue'
import Container from "@/shared/container/Container.vue";
import LoginBlock from "@/shared/login/login.vue";

export default defineComponent({
    name: "HeaderBlock",
    components: {LoginBlock, Container},
})
</script>