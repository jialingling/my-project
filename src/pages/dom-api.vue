<template lang="html">
  <div class="">
    domApi
    <div class="myclass">
      myclassDom1
    </div>
    <div class="myclass">
      myclassDom2
    </div>
    <div class="alert">
        myalert
    </div>
    <div class="div3">
      this is div3
    </div>
  </div>
</template>

<script>
export default {
  created() {

  },
  mounted() {
    {
      let el1 = document.createElement('div');
      let el2 = document.createElement('input');
      let node = document.createTextNode('HelloWorld');
    }; {
      // 返回当前文档中第一个类名为 "myclass" 的元素
      let el1 = document.querySelector(".myclass");
      console.log('document.querySelector(".myclass")', el1)
      // 返回一个文档中所有的class为"note"或者 "alert"的div元素
      let els1 = document.querySelectorAll("div.myclass, div.alert,div.div3");
      console.log(' document.querySelectorAll("div.myclass, div.alert,div.div3")', els1)
      // 获取元素
      let el2 = document.getElementById('xxx');
      let els2 = document.getElementsByClassName('highlight');
      let els3 = document.getElementsByTagName('div');
      console.log('document.getElementsByTagName("div")', els3)
      // https://www.cnblogs.com/liuxianan/p/javascript-dom-api.html
      // https://harttle.land/2015/10/01/javascript-dom-api.html

    } {

    }
  }
}
</script>

<style lang="css">
</style>
