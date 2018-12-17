<template lang="html">
  <div class="">
       div拖拽、拉伸测试
 <div  v-domDrag>
    <div class="box-drag"  style="height:300px ;width:300px;border:1px solid gray;position:absolute" >
    <div class="box-header" style="background:#dddee2;line-height:50px;">	header	</div>
    </div>
 </div>
    <div class="" style="height:300px;" >

    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="css">
/* 拖拽、拉伸页面 cursor */

.dom-cursor-left-top {
  cursor: nw-resize;
  position: absolute;
  width: 12px;
  height: 12px;
  left: 0px;
  top: 0px;
  z-index: 2;
}

.dom-cursor-right-top {
  cursor: ne-resize;
  position: absolute;
  width: 12px;
  height: 12px;
  right: 0px;
  top: 0px;
  z-index: 2;
}

.dom-cursor-right-bottom {
  cursor: nw-resize;
  position: absolute;
  width: 12px;
  height: 12px;
  right: 0px;
  bottom: 0px;
  z-index: 2;
}

.dom-cursor-left-bottom {
  cursor: sw-resize;
  position: absolute;
  width: 12px;
  height: 12px;
  left: 0px;
  bottom: 0px;
  z-index: 2;
}

.dom-cursor-top {
  cursor: n-resize;
  position: absolute;
  width: 100%;
  height: 12px;
  right: 0px;
  top: 0px;
}

.dom-cursor-right {
  cursor: e-resize;
  position: absolute;
  width: 12px;
  height: 100%;
  right: 0px;
  top: 0px;
}

.dom-cursor-bottom {
  cursor: n-resize;
  position: absolute;
  width: 100%;
  height: 12px;
  left: 0px;
  bottom: 0px;
}

.dom-cursor-left {
  cursor: e-resize;
  position: absolute;
  width: 12px;
  height: 100%;
  left: 0px;
  top: 0px;
}

/* 拖拽、拉伸页面 cursor */
</style>
