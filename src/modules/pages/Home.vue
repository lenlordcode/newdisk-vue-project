<template>
    <div class="home__container">
        <div class="home__text_container">
            <div class="home__text">
                <div class="home__text_title __h1 __color_white">Мои<br/>заметки</div>
                <div class="home__text_subtitle __h3 __color_gray">Не забывай о важном, храни его в облаке.</div>
            </div>
        </div>

        <div class="home__background"></div>
    </div>
</template>

<style>
    .home__container{
        display: flex;
        justify-content: space-between;
        height: auto;
    }
    .home__text_container{
        display: flex;
        height: 750px;
        align-items: center;
    }
    .home__text{
        flex-direction: column;
        align-items: flex-start;
    }
    .home__text_title{
        display: block;
    }
    .home__text_subtitle{
        display: block;
        width: 350px;
    }

    .home__background{
        background-image: url("@/assets/background/background.svg");
        background-repeat: no-repeat;
        background-size: 897px 864px;
        width: 897px;
        height: 864px;
    }


    @media screen and (max-width: 1366px) {
        .home__text_container{
            display: flex;
            height: 490px;
            align-items: center;
            border-right: 90px;
        }

        .home__text_title{
            display: block;
        }
        .home__text_subtitle{
            display: block;
        }
        .home__background{
            background-image: url("@/assets/background/background.svg");
            background-size: 627px 579px;
            width: 627px;
            height: 579px;
        }
    }

    @media screen and (max-width: 768px) {
        .home__container{
            display: block;
            height: auto;
            padding-top: 40px;
        }

        .home__text_container{
            display: flex;
            justify-content: center;
            height: 324px;
            text-align: center;
            margin-right: 0;
        }

        .home__text_title{
            display: block;
            margin-bottom: 20px;
        }

        .home__text_subtitle{
            width: 500px;
        }

        .home__background{
            margin-left: 70px;
            background-image: url("@/assets/test.png");
            background-size: 560px 518px;
            width: auto;
            height: 518px;
        }
    }


    @media screen and (max-width: 360px) {
        .home__container{
            min-width: 320px;
            display: block;
            height: auto;
            padding-top: 20px;
        }

        .home__text_container{
            display: flex;
            justify-content: center;
            height: 250px;
            text-align: center;
            margin-right: 0;
        }

        .home__text_title{
            display: block;
            margin-bottom: 20px;
        }

        .home__text_subtitle{
            width: 300px;
        }

        .home__background{
            background-image: url("@/assets/test.png");
            margin-left: 20px;
            width: auto;
            height: 289px;
            bottom: 1px;
            background-size: 298px 289px;
        }
    }



</style>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "HomePage",
    components: {},
    data(){
        return{
            test:'',
        }
    }
})
</script>