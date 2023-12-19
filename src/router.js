import Vue from 'vue'
import Home from './modules/pages/Home.vue'
import VueRouter from "vue-router";
import Profile from "@/modules/pages/Profile.vue";

Vue.use(VueRouter)
export default new VueRouter({
  //mode: 'history',
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '*',
      component: () => import('@/modules/pages/404.vue')
    }
  ]
})


