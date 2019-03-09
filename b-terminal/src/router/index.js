import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/page/home'

// const login = r => require.ensure([], () => r(require('@/page/login')), 'login');

Vue.use(Router)
import Children from '@/router/children'


export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
    children: Children
    // {
    //   path: pathType.PATH_MAIN,
    //   redirect: pathType.PATH_FIRST_SHOW,
    //   component: main,
    //   children: children
    // },
  }]
})