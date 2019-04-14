<template lang="html">
  <Modal

         title="Title"
         v-model="modal1"
         :styles="{top: '20px'}">
         <p>Content of dialog</p>
         <p>Content of dialog</p>
         <p>Content of dialog</p>
         <button type="button" name="button" @click="closeModal1">closeModal1</button>
     </Modal>
</template>

<script>
export default {
  props: {
    editItem: {
      type: Object

    },
    modal1: {
      type: Boolean

    }

  },
  data() {
    return {
      // modal1: true
    }
  },
  created() {
    console.log('this.editItem')

    console.log(this.editItem)
  },
  methods: {
    closeModal1() {
      this.$emit('closeModal1')
    }
  }
}
</script>

<style lang="css">
</style>
