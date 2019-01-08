// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import $ from 'jquery'
import './common/dom/jquery.min.js'
import './common/dom/jquery.qrcode.min.js'
import {
  LoadingPlugin,
} from 'vux'
Vue.use(LoadingPlugin)
import {
  ToastPlugin
} from 'vux'
Vue.use(ToastPlugin)
import App from './App'
import router from './router'
import domDrag from './common/dom/domDrag.js'
import VueOccupy from 'vue-occupy'

Vue.use(VueOccupy)
import {
  globalObj
} from './common'
Vue.config.productionTip = false
Vue.prototype.$global = globalObj; //全局常量、全局方法

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})