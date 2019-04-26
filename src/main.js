// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Header from './components/Header/Header'
import store from './store'

Vue.config.productionTip = false
Vue.component('Header',Header)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 配置路由器
  // components: { App },
  render: h => h(App),
  store,
})
