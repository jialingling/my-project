<template>
<div class="hello index-page">

  <!-- js基础 -->
  <div>jsBasic</div>
  <span @click="to('/jsBasic')" class="tab">/jsBasic </span>
  <!-- h5 -->
  <div>h5 workers </div>
  <span @click="to('/workers')" class="tab">/workers </span>

  <!-- 组件封装 -->
  <div>es6</div>
  <span @click="to('/es6')" class="tab">/es6 </span>
  <!-- 组件封装 -->
  <div>组件</div>
  <span @click="to('/calendarIndex')" class="tab">/calendar  </span>
  <span @click="to('/domDrag')" class="tab">/domDrag (待完善) </span>
  <span @click="to('/radioTree')" class="tab">/radioTree  </span>
  <!-- vue框架 -->
  <div>vue</div>
  <span @click="to('/list1Position')" class="tab"> /list1Position </span>
  <span @click="to('/busEmit')" class="tab"> /busEmit </span>
  <!-- js封装 -->
  <div>js</div>
  <span @click="to('/commonUtils')" class="tab"> /commonUtils </span>
  <!-- 插件 -->
  <div>插件</div>
  <span @click="to('/vue-occupy')" class="tab"> /vue-occupy </span>
  <!-- 文件操作 -->
  <div>文件操作,差报表导出</div>
  <span @click="to('/downFile')" class="tab"> /downFile </span>
  <div class="" style="font-size:12px;">
    B端架子（路由，导航栏），树结构， 列表弹窗布局处理
    <br> excel导出，版本控制，echart，联动二级选项卡
  </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },

  created() {
    this.$worker.run((arg) => {
        return `Hello, ${arg}!`
      }, ['World'])
      .then(result => {
        console.log(result)
      })
      .catch(e => {
        console.error(e)
      })
    // 通过this.$worker.run这个方法，跑起一个worker，
    // worker是在另外的线程里面跑的，所以可以在run的第一个参数函数里面执行一个非常大计算的操作
    // run方法像Promise一样提供.then和.catch，then的参数就是run第一个参数函数的返回值
    this.worker = this.$worker.run(n => n + 10, [2])
      .then(res => console.log(res))
      .catch(e => console.log(e))
    this.worker = this.$worker.create([{
        message: 'pull-data',
        func(data) {

          return data
        },
      },
      {
        message: 'run-task',
        func(id) {
          //...
        },
      }
    ])
    let data = []
    this.worker.postMessage('pull-data', [data])
      .then(res => console.log(res))

    this.myWorker = this.$worker.create([{
        message: 'message1',
        func: (arg) => {
          return arg
        }
      },
      {
        message: 'message2',
        func: () => 'Output 2'
      }
    ])

    this.myWorker.postMessage('message1', ['Booppp!'])
      .then(result => {
        console.log(result + 'kkk')
      })
  },
  destroyed() {
    // 通过赋值null的方式，释放掉worker引用，这样就可以关闭worker，这是作者在github上说的
    this.worker = null
  },
  methods: {
    to(path) {
      this.$router.push(path)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab {
  color: #42b983;
  display: inline-block;
  width: 100px;

}

.tab:hover {
  text-decoration: underline;

}

.index-page {
  margin: 20px;
}
</style>
