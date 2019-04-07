// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vuex from 'vuex'
import $ from 'jquery'
import './common/dom/jquery.min.js'
import './common/dom/jquery.qrcode.min.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);
import VueWorker from 'vue-worker';
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
Vue.use(VueWorker);
import {
  globalObj
} from './common'
Vue.config.productionTip = false
Vue.prototype.$global = globalObj; //全局常量、全局方法
import store from './vuex'
import Vuex from 'vuex'

Vue.use(Vuex)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {
    App
  },
  template: '<App/>'
})