<template lang="html">

</template>

<script>
import Bus from './bus'
export default {
  mounted() {
    Bus.$on('receiveBusData', (e) => {
      alert(e.data_a + '----' + e.data_b)
    })

  }
}
</script>

<style lang="css">
</style>
