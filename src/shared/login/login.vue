<template>
  <div class="login__container">
      <template v-if="mode==='auth'">
          <el-modal v-model="mode" :value="'auth'" :title="'Вход в ваш аккаунт'" @closeModal="closeModal">
              <el-input v-model="auth.email"
                         :placeholder="'Введите email'"
                         :iconRight="false"
                         :bottomText="false"
                         :text-value="'Email'">
              </el-input>
              <el-input v-model="auth.password"
                         :placeholder="'Введите пароль'"
                         :bottomText="false"
                         :text-value="'Пароль'">
              </el-input>
              <div>
                  <div class="el-modal__footer">
                      <div class="el-modal__footer_link">
                          <div class="__col1 __text_small __color_gray __margin_right_5">У вас нет аккаунта? </div>
                          <el-link class="" @click="mode='reg'; error=''">Зарегистрируйтесь</el-link>
                      </div>
                      <el-button class="login__button __color_white" :icon="false" :type="'text+icon'" @click="login">Войти</el-button>
                  </div>
                  <div v-if="error" class="el-modal__footer_error __text_small __color_bittersweet">{{error}}</div>
              </div>
          </el-modal>
      </template>

      <template v-if="mode==='reg'">
          <el-modal :value="mode" :title="'Регистрация'" @closeModal="closeModal">
              <el-input v-model="reg.email"
                         :placeholder="'Введите email'"
                         :iconRight="false"
                         :bottomText="false"
                         :text-value="'Email'">
              </el-input>
              <el-input v-model="reg.password"
                         :placeholder="'Введите пароль'"
                         :bottomText="false"
                         :text-value="'Пароль'">

              </el-input>
              <el-input v-model="reg.passwordRepeat"
                         :placeholder="'Введите пароль'"
                         :bottomText="false"
                         :text-value="'Пароль еще раз'">

              </el-input>
              <div>
                  <div class="el-modal__footer">
                      <div class="el-modal__footer_link">
                          <div class="__text_small __color_gray">У вас уже есть аккаунт?</div>
                          <el-link @click="mode='auth'; error=''">Войдите</el-link>
                      </div>
                      <el-button class="ui__modal__color_white" :icon="false" :type="'text+icon'" @click="registration">
                          Зарегистрироваться</el-button>
                  </div>
                  <div v-if="error" class="el-modal__footer_error __text_small __color_bittersweet">{{error}}</div>
              </div>
          </el-modal>
      </template>


      <div v-if="user.email">
          <div class="login__user" @click="modalUser=!modalUser">
              <div class="login__user_email __color_white __text_small">{{user.email}}</div>
              <div class="login__user_avatar"></div>
          </div>
          <div v-if="modalUser" class="login__select">
              <div class="login__rectangle_up"></div>
              <el-link class="login__select_link" @click="exitAccount">Выйти</el-link>
          </div>
      </div>
      <el-button  v-else class="__color_white" size="normal" :icon="true" img="login" @click="mode='auth'">Вход</el-button>

  </div>
</template>

<style scoped>
    .login__user{
        display: flex;
        gap:12px;
    }
    .login__user_email{
        display: flex;
        text-align: center;
        align-items: center;
    }
    .login__user_avatar{
        background-image: url("@/assets/avatar/standart_avatar.png");
        background-repeat: no-repeat;
        width: 56px;
        height: 56px;
    }

    .login__select--hidden {
        display: none;
    }

    .login__select{
        position: fixed;
        margin-top: 20px;
        right: 160px;
        border-radius: 12px;
        padding: 40px;
        background: #1B2F46;
    }
    .login__rectangle_up {
        content: '';
        position: absolute;
        right: 15px; top: -20px;
        border: 10px solid transparent;
        border-bottom: 10px solid #1B2F46;
    }

    @media screen and (max-width: 1366px) {
        .login__select{
            right: 75px;
        }
        .login__select::after {
            right: 15px; top: -35px; /* Положение треугольника */
        }
    }

    @media screen and (max-width: 768px) {
        .login__select{
            right: 35px;
        }
        .login__select::after {
            right: 15px; top: -35px; /* Положение треугольника */
        }
    }

    @media screen and (max-width: 360px) {
        .login__select{
            right: 15px;
            padding: 20px;
        }
        .login__select::after {
            right: 15px; top: -25px; /* Положение треугольника */
            border: 15px solid transparent;
            border-bottom: 15px solid #1B2F46;
        }
        .login__button{
            max-width: 100%;
            width: 360px;
        }
    }


</style>



<script>
import {defineComponent} from 'vue'
import {api} from "@/api";

export default defineComponent({
    name: "LoginBlock",
    data(){
        return{
            user:{
                id: '',
                email: '',
            },
            mode:'',
            auth:{
                email:'',
                password:'',
            },
            reg:{
                email:'',
                password: '',
                passwordRepeat: '',
            },
            error: '',
            modalUser:false,
        }
    },
    mounted() {
        this.getUserData();

    },
    methods:{
        async registration(){
            this.error = '';
            const success = await api.reg.registration(this.reg.email,this.reg.password,this.reg.passwordRepeat)
            if (success === true){
                await this.$router.push('/profile');
            }
            else{
                this.error = success;
            }
        },
        async login (){
            const success = await api.auth.login(this.auth.email, this.auth.password);
            if (success === true) {
                await this.$router.push('/profile');
                location.reload();
            } else {
                this.error = success;
            }
        },
        async getUserData (){
            const user = await api.auth.getUserData();
            if(user){
                this.user.id = user.id;
                this.user.email = user.email;
            }
            else{
                const currentURL = window.location.pathname;
                if (currentURL === '/profile') {
                    await this.$router.push('/');
                }
            }
        },
        async exitAccount (){
            const user = await api.auth.exitAccount();
            if (user){
                await this.$router.push('/');
                location.reload();
            }
        },
        closeModal(){
            this.mode ='';
        }
    }
})
</script>