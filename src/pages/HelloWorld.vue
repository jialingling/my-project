<template>
<div class="hello index-page">
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
