<template lang="html">
  <div class="">
    <ComponentVModel v-model="testValue2" :pStr='pStr'></ComponentVModel>
    <div class="" ref='dom1'>
      '这是dom1'
    </div>
    <div class="" ref='showDom1'>

    </div>
    <button type="button" name="button" @click="getDom1">dom1内容</button>
  </div>
</template>
<script>
// import ComponentVModel from './compoment-v-model'
import ComponentVModel from './compoment-v-model'
export default {
  components: {
    ComponentVModel,
  },
  created() {
    console.log(this.$router);
    console.log('this.$route.fullPath============' + this.$route.fullPath);
    console.log('this.$route.name============' + this.$route.name);
    console.log('this.$route.hash============' + this.$route.hash);


  },
  methods: {
    getDom1() {
      this.$refs.showDom1.innerText = `通过this.$refs.showDom1获取到dom1的内容${this.$refs.dom1.innerText}`;
    }
  },
  data() {
    return {
      testValue2: '222',
      pStr: '父组件数据pStr'
    }
  },
}
</script>

<style lang="css">
</style>
