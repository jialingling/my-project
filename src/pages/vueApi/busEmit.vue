<template lang="html">
  <div class="">
    <button type="button" name="button" @click="busEmit">bus.$emit发送数据( '111')</button>
  </div>
</template>

<script>
import Bus from './bus'
export default {
  mounted() {
    Bus.$on('receiveBusData', (e) => {
      alert('当前组件Bus.$on接收到数据' + e.data_a)
    })
  },
  methods: {
    busEmit() {
      Bus.$emit("receiveBusData", {
        "data_a": '111'
      });
    }
  }
}
</script>

<style lang="css">
</style>
