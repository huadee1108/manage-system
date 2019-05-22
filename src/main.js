import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './http'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

axios.defaults.baseURL = 'http://mockjs.com/api' // 设置默认请求的url
Vue.prototype.axios = axios

Vue.config.productionTip = false

// 引入mockjs
require('./mock.js')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
