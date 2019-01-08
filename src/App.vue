<template>
<div id="app">

  <router-view/>
</div>
</template>

<script>
import Bus from './pages/vueApi/bus'
export default {
  name: 'App',
  mounted() {
    Bus.$on('receiveBusData', (e) => {
      alert('App.vue页面Bus.$on接收到组件数据' + e.data_a)
    })
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
