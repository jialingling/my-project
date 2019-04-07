<template lang="html">
  <div class="">
    {{num}}
{{computePrice  }}
{{price}}
{{priceGetter}}
{{priceGetterParameter}}
  </div>
</template>

<script>
import {
  mapGetters,
  mapState,
  mapMutations,
  mapActions
} from 'vuex'



export default {
  computed: {
    ...mapGetters(['priceGetter', 'num', 'getUserInfo']),
    // ...mapState(['price', 'info']), //  // 映射 this.price 为 store.state.price
    ...mapState({
      price: state => state.mod1.price,
      info: state => state.mod2.info,

    }),
    computePrice() {
      return this.$store.state.price
    },
    priceGetterParameter() {
      return this.$store.getters.priceGetterParameter('getter传参')
    }


    // ...mapMutations({
    //   add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    // })
  },
  methods: {
    ...mapMutations({
        // addPrice: 'Add_PRICE', // 将 `this.Add_PRICE()` 映射为 `this.$store.commit('Add_PRICE')`
        testMutation: 'testMutation',
        setUserInfo: 'setUserInfo',
      }
      // // `mapMutations` 也支持载荷：
      // 'testMutation' // 将 `this.testMutation(num)` 映射为 `this.$store.commit('testMutation', num)`
    ),
    ...mapMutations(
      ['Add_PRICE', ]

    ),
    ...mapActions([
      'addPrice', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`

      // `mapActions` 也支持载荷：
      // 'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
    ]),
  },
  created() {
    console.log('初始化------执行前,num=', this.num)

    console.log(this.$store.state);
    this.$store.commit('Add_PRICE');

  },
  mounted() {
    this.$store.commit('testMutation', 10);
    this.addPrice();
    this.$store.dispatch('addPrice');
    console.log('promiseActionA执行前,num=', this.num)
    this.$store.dispatch('promiseActionA', 1000).then(() => {
      console.log('已经执行了promiseActionA,num=', this.num)
    })
    this.$store.dispatch('promiseActionB').then(() => {
      console.log('promiseActionB,num=', this.num)
    })
    this.$store.dispatch('setNumPayload', {
      num: 6000
    });
    console.log(this.getUserInfo);
    console.log(this.info)
    console.log(this.$store.state.mod2.info)
    this.$store.commit('setUserInfo', {
      name: '许敏群'
    });
    console.log(this.$store.state.mod2.info)
    console.log(this.$store.state.mod1.price)

    this.Add_PRICE();
    this.testMutation(9);
  }
}
</script>

<style lang="css">
</style>
