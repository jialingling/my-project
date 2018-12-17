import Vue from 'vue'
// import VConsole from 'vconsole'
// const vConsole = new VConsole()
import $ from 'jquery'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import 'mint-ui/lib/style.css';
import MintUI from 'mint-ui';
import VueLazyload from 'vue-lazyload'
import JsEncrypt from 'jsencrypt'
//实例化jsEncrypt对象
var jse = new JsEncrypt
//设置公钥
jse.setPublicKey(
  `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDlOJu6TyygqxfWT7eLtGDwajtN
FOb9I5XRb6khyfD1Yt3YiCgQWMNW649887VGJiGr/L5i2osbl8C9+WJTeucF+S76
xFxdU6jE0NQ+Z+zEdhUTooNRaY5nZiu5PgDB0ED/ZKBUSLKL7eibMxZtMlUDHjm4
gwQco1KRMDSmXSMkDwIDAQAB
-----END PUBLIC KEY-----`
);
jse.setPrivateKey(
  `-----BEGIN RSA PRIVATE KEY-----
MIICXQIBAAKBgQDlOJu6TyygqxfWT7eLtGDwajtNFOb9I5XRb6khyfD1Yt3YiCgQ
WMNW649887VGJiGr/L5i2osbl8C9+WJTeucF+S76xFxdU6jE0NQ+Z+zEdhUTooNR
aY5nZiu5PgDB0ED/ZKBUSLKL7eibMxZtMlUDHjm4gwQco1KRMDSmXSMkDwIDAQAB
AoGAfY9LpnuWK5Bs50UVep5c93SJdUi82u7yMx4iHFMc/Z2hfenfYEzu+57fI4fv
xTQ//5DbzRR/XKb8ulNv6+CHyPF31xk7YOBfkGI8qjLoq06V+FyBfDSwL8KbLyeH
m7KUZnLNQbk8yGLzB3iYKkRHlmUanQGaNMIJziWOkN+N9dECQQD0ONYRNZeuM8zd
8XJTSdcIX4a3gy3GGCJxOzv16XHxD03GW6UNLmfPwenKu+cdrQeaqEixrCejXdAF
z/7+BSMpAkEA8EaSOeP5Xr3ZrbiKzi6TGMwHMvC7HdJxaBJbVRfApFrE0/mPwmP5
rN7QwjrMY+0+AbXcm8mRQyQ1+IGEembsdwJBAN6az8Rv7QnD/YBvi52POIlRSSIM
V7SwWvSK4WSMnGb1ZBbhgdg57DXaspcwHsFV7hByQ5BvMtIduHcT14ECfcECQATe
aTgjFnqE/lQ22Rk0eGaYO80cc643BXVGafNfd9fcvwBMnk0iGX0XRsOozVt5Azil
psLBYuApa66NcVHJpCECQQDTjI2AQhFc1yRnCU/YgDnSpJVm1nASoRUnU8Jfm3Oz
uku7JUXcVpt08DFSceCEX9unCuMcT72rAQlLpdZir876
-----END RSA PRIVATE KEY-----`
)
import {
  fetch
} from './common/fetch/index.js'
import {
  globalObj
} from './common'
// import global from './common'
import {
  devLog,
  openLocation,
  validate,
} from './common/global/utils.js'
import wxApi from './common/global/wxApi.js'
import {
  server_base_url,
  server_base_dir,
  img_onerror_default,
  global_infos,
} from './common/config/config.js'
Vue.use(ElementUI);
Vue.use(MintUI);
// Vue.use(VueLazyload)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/web/weAdmin/static/img/default.png',
  loading: '/web/weAdmin/static/img/default.png',
  attempt: 1
})
Vue.prototype.$jsEncrypt = jse;
Vue.prototype.$axios = fetch; //axios请求
// Vue.use(global)
Vue.prototype.$global = globalObj; //全局常量、全局方法
Vue.prototype.devLog = devLog; //打印log
Vue.prototype.openLocation = openLocation; //微信地理位置导航
Vue.prototype.$validate = validate; //数据校验
Vue.prototype.$wxApi = wxApi; //微信jssdk
// wxApi.init(); //微信权限验证配置
Vue.prototype.$server_base_url = server_base_url; //服务器域名
Vue.prototype.$server_base_dir = server_base_dir; //文件目录
Vue.prototype.$img_onerror_default = img_onerror_default; //请求错误，显示默认图片
Vue.prototype.$global_infos = global_infos; //常量


/** axios请求*/
// import axios from 'axios'
// var instance = axios.create({
//   baseURL: domain,
//   timeout: 30000,
// });
// instance.defaults.withCredentials = true;
// Vue.prototype.$axios = instance
/** 全局样式*/
import './style/calendar.less'
import './style/date-picker.less'
import './style/index.less'
import './style/detail.less'
import './style/my.less'
import './style/ticket.less'
import './style/visa.less'
import './common/plugins/calendar.js'

import App from './App'
import router from './router'
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})