import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
// 组件封装
import calendarIndex from '@/pages/calendar-index'


import domDrag from '@/pages/dom-drag'
import radioTree from '@/pages/radio-tree'

// vue框架
import list1Position from '@/pages/vueApi/list1Position'
import list2Position from '@/pages/vueApi/list2Position'
import busEmit from '@/pages/vueApi/busEmit'
//js封装
import commonUtils from '@/pages/commonUtils'
// 文件操作
import downFile from '@/pages/fileApi/downFile'

//插件
import vueOccupyDemo from '@/pages/plugins/vue-occupy-demo'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // 组件封装
    {
      path: '/calendarIndex',
      component: calendarIndex
    },
    {
      path: '/domDrag',
      component: domDrag
    }, {
      path: '/radioTree',
      component: radioTree
    },
    // vue框架
    {
      path: '/list1Position',
      component: list1Position
    },
    {
      path: '/list2Position',
      component: list2Position,
      meta: {
        keepAlive: true //  需要缓存
      }
    },
    {
      path: '/busEmit',
      component: busEmit
    },
    //js封装
    {
      path: '/commonUtils',
      component: commonUtils
    },
    //vue-occupy
    {
      path: '/vue-occupy',
      component: vueOccupyDemo
    },
    // 文件操作
    {
      path: '/downFile',
      component: downFile
    },

  ],
  scrollBehavior(to, from, savedPosition) {
    // console.log(to)
    // console.log(to.hash)
    // if (to.meta.keepAlive) {
    //   return {
    //     x: 100,
    //     y: 200
    //   }
    // }
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})