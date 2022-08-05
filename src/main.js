import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入ui库
import dataV from '@jiaminghi/data-view'
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import './assets/theme/elementui-style/theme/index.css';
Vue.use(dataV)
Vue.use(ElementUI)

// Import Axios
import Axios from 'axios'
// step2：把axios挂载到vue的原型中，在vue中每个组件都可以使用axios发送请求,
// 不需要每次都 import一下 axios了，直接使用 $axios 即可
Vue.prototype.$axios = Axios

import http from '@/http/httpRequest.js'
import agri from '@/http/agriRequset.js'
// 全局挂载 http（axios）,使用的时候直接使用 this.$http 即可。
Vue.prototype.$http=http
Vue.prototype.$agri=agri
// 引入vue-awesome
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons/index.js'
// 全局注册图标
Vue.component('icon', Icon)

import './assets/scss/style.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')