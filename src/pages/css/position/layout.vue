<template lang="html">
  <div class="">
    <div class="red-bg"style=" padding-right:100px;">
      <div class="yellow-bg" style="position:relative;right:100px;height:200px;">
      关于 position:relative;right:100px;
      </div>
    </div>
    <div class="red-bg"style="  height:200px;margin-top:100px;display:flex;">
      <div class="yellow-bg" style="width:100px;height:200px;">
      flex
      </div>
      <div class="blue-bg" style="height:200px;flex:1">
     flex
      </div>
      <div class="red-bg" style="width:100px;height:200px;">
     flex
      </div>
    </div>
    <div class="red-border red"  style=" height:200px;margin-top:300px"  >
      <!-- <div class="red-border red"  :style="{height:pageHeight }" style="overflow:hidden;"> -->
      <div class="blue-border blue blue-bg" style="width:80px;float:left;height:100%;" >
        左浮动
      </div>
      <div class="blue-border blue red-bg" style="width:120px;float:right;height:100%;" >
        右浮动 {{pageHeight}}
      </div>
  <div class="yellow-bg" style="margin-left:80px;margin-right:120px;height:100%;">
    <!-- 加不加margin都可以？？ -->
    <!-- <div class="" style="margin-left:80px;margin-right:120px;"> -->
    <div class="">
    <span style="margin-left:-100px">测试负margin</span>  实现起来其实很简单，只需要将左边的元素左浮动，右边的元素右浮动，（中间的元素通过左右margin定位就行，设不设都没关系），不过要注意浮动元素放前面。
    </div>
  <img src="https://ask.qcloudimg.com/http-save/yehe-2170887/9ud5yrxzc0.jpeg?imageView2/2/w/1620" alt="" style="width:100px;">
  </div>
    </div>

<div class="blue-border" style="margin-top:30px;overflow:hidden">
  父元素设置overflow:hidden清除浮动
  <div class="blue-bg" style="float:left;width:100px;height:100px;">
    float:left 1
  </div>
  <div class="yellow-bg" style="float:left;width:100px;height:100px;">
    float:left 2
  </div>
  <div class="red-bg" style="float:left;width:100px;height:100px;">
    float:left 3
  </div>
</div>

  <div class="" style="margin-top:30px;padding-left:100px;padding-right: 100px;">
    <div class="red-bg" style=" width:100%;height:200px;position:relative;float: left; ">
      middle
    </div>
    <div class="yellow-bg" style="position:relative; width:100px;float:left;left:-100px;height:70px;margin-left:-100%;">

        width:100px;height:200px;
        float:left;margin-left:-100%;

    </div>
    <div class="blue-bg" style="position:relative; width:100px;height:70px;float:left;margin-left:-100px;right:-100px;">

 right

    </div>
  </div>

    <div class="" style="margin-top:530px;">
      <div class="header"></div>
    <div class="content">
  <div class="middle"></div>
  <div class="left"></div>
  <div class="right"></div>
</div>
<div class="footer"></div>
    </div>
  </div>

</template>

<script>
export default {
  computed: {
    pageHeight: function() {
      {
        return window.innerHeight + 'px';
      }
    }
  }
}
</script>

<style lang="css" scoped>
.red-border{
  border: 1px solid red;
}
.red{
  color: red;
}
.blue-border{
  border: 1px solid blue;
}
.blue{
  color: blue;
}
.blue-bg{
  background: blue;
}
.red-bg{
  background: red;
}
.yellow-bg{
  background: yellow;
}
/*圣杯布局*/
.header {
width: 100%;
height: 30px;
background: red;
}

.content {
overflow: hidden;
padding: 0 100px;
}

.footer {
width: 100%;
height: 30px;
background: red;
}

.middle {
position:relative;
width: 100%;
float: left;
height: 80px;
background: green;
}

.left {
position:relative;
width: 100px;
float: left;
left:-100px;
height: 80px;
margin-left: -100%;
background: yellow;
}

.right {
position:relative;
width: 100px;
float: left;
right:-100px;
height: 80px;
margin-left: -100px;
background: pink
}
</style>
