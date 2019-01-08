<template lang="html">
  <div class="">
       list2测试
    <div class=""  style="height:600px;display:flex;flex-direction:column;align-center:flex-start;justify-content:center;border:1px solid gray;" @click="$router.push('/list1Position')">
 
     <div>因为在路由配置的index.js中使用 scrollBehavior(to, from, savedPosition) ,路由切换不保存滚动位置。	</div>	
 <div> 点击转至格子内区域，跳转'/list1Position'</div>
    </div>
    <div class="" >
 
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="css">
</style>
