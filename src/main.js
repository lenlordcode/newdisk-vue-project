import Vue from 'vue'
import './style.css'
import App from './App.vue'
import router from './router.js';
import components from "@/components/components.js";

Vue.config.productionTip = false
Vue.use(components);

new Vue({
  render: h => h(App),
  router,
  components
}).$mount('#app')


