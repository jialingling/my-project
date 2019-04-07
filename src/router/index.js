import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'

// 原型，原型链，继承
import Obj from '@/pages/oo/obj'
import PrototypeChain from '@/pages/oo/prototype-chain'
import Inherit from '@/pages/oo/inherit'

// js基础
import JsBasic from '@/pages/js-basic'
import DomApi from '@/pages/dom-api'

// css

import Center from '@/pages/css/position/center'
import Layout from '@/pages/css/position/layout'
import Css3Demo from '@/pages/css/css3-demo'

// 组件封装
import es6 from '@/pages/es6'
//h5 workers
import workers from '@/pages/web-workers/workers-demo'

// 组件封装
import calendarIndex from '@/pages/calendar-index'


import domDrag from '@/pages/dom-drag'
import radioTree from '@/pages/radio-tree'

// vue框架
import list1Position from '@/pages/vueApi/list1Position'
import list2Position from '@/pages/vueApi/list2Position'
import busEmit from '@/pages/vueApi/busEmit'
import componentVModel from '@/pages/vueApi/v-model/parent-v-model'
import VuexDemo from '@/pages/vueApi/vuex-demo'
import FormDemo from '@/pages/vueApi/form-demo'

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
    // 原型，原型链，继承
    {
      path: '/obj',
      component: Obj
    },
    {
      path: '/prototypeChain',
      component: PrototypeChain
    },
    {
      path: '/inherit',
      component: Inherit
    },
    // Js基础
    {
      path: '/jsBasic',
      component: JsBasic
    },
    // dom 操作
    {
      path: '/domApi',
      component: DomApi
    },
    // css

    {
      path: '/center',
      component: Center
    },
    {
      path: '/layout',
      component: Layout
    },
    {
      path: '/css3Demo',
      component: Css3Demo
    },
    // h5 workers
    {
      path: '/workers',
      component: workers
    },

    // 组件封装
    {
      path: '/es6',
      component: es6
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
    {
      path: '/compoment-v-model/:id',
      component: componentVModel
    },
    {
      path: '/compoment-v-model',
      component: componentVModel
    },

    {
      path: '/toComponentVModelByName/:id',
      name: 'ComponentVModel',
      component: componentVModel
    },
    {
      path: '/VuexDemo',
      component: VuexDemo
    },
    {
      path: '/FormDemo',
      component: FormDemo
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