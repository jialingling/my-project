<template lang="html">
  <div class="">
    <div class="" @click='change'>
  'testValue':      {{testValue}}

    </div>
    <div class="" @click='change2'>
    ‘testValue2’:  {{testValue2}}
  </br>（testValue2为空，是因为自定义组件的V-model只能传一个，所有被后面的testValue覆盖了，没有传进去）
<!--testValue2为空，是因为V-model只能传一个，所有被后面的testValue覆盖了，没有传进去-->
    </div>
    {{myVal}}
    父组件数据：{{pStr}}
  </div>

</template>

<script>
export default {
  testValue: '',
  model: {
    prop: 'testValue2', //无效
    event: 'change2', //无效
    prop: 'testValue',
    event: 'change',

  },
  props: {
    testValue: String,
    testValue2: String,
    pStr: String,
  },
  data() {
    return {
      myVal: '子组件自己的数据',
    }
  },
  created() {
    console.log('子组件this.$route.matched============');
    console.log(this.$route.matched);

    console.log('this.$route.params.id==============' + this.$route.params.id);
    console.log('this.$route.query.id==============' + this.$route.query.id);

  },
  methods: {
    //序号，页数变化
    change() {
      this.$emit('change', '666');
    },
    change2() {
      this.$emit('change2', '6662');
    },

  }
}
</script>

<style lang="css">
</style>
