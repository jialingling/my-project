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
  <!-- js封装 -->
  <div>js</div>
  <span @click="to('/commonUtils')" class="tab"> /commonUtils </span>

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
