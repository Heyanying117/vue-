import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible/flexible'
Vue.config.productionTip = false

new Vue({
  el: '#app',
 
  render: h => h(App),  // <App/>
  router//配置路由
})