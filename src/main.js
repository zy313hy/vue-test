// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Header from './components/Header/Header'
import StoreHeader from './components/storeHeader/StoreHeader'
import store from './store'
import Star from './components/stars/Stars'
import  './mock/mock'
import {Button} from 'mint-ui'
import Mint from 'mint-ui'
Vue.config.productionTip = false
//全局组件
Vue.use(Mint)
Vue.component('StoreHeader',StoreHeader)
Vue.component('Header',Header)
Vue.component('Star',Star)
Vue.component('Button.name',Button)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 配置路由器
  // components: { App },
  render: h => h(App),
  store,
})
