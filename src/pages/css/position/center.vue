<template lang="html">
  <div class=""style="width:100%;">

<div class="" style="position:relative;   height:100px;width:100px;border:1px solid red;">
  <div class="" style="position:absolute;top:50%;transform:translateY(-50%)">
  position:absolute;top:50%;transform:translateY(-50%)
  position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)
  </div>
</div>

<div class="" style="border:1px solid red;">
  <div class=""  style="position:absolute;">
    测试absolute
  </div>
</div>

    <div class="red"  >水平居中</div>
    <br/>
     <div class="border-red" style="text-align:center">
       若是行内元素, 给其父元素设置 text-align:center,即可实现行内元素水平居中
     </div>


        <div class="border-red" style=" width:100px; margin:0 auto; ">
                 若是已经知道div块级元素宽度, 该div块级设置<br>
                width:100px; margin:0 auto即可让div块级水平居中
        </div>

        <div class="border-red" style=" width:100%; text-align:center; ">
        <h2> 父元素设置text-align:center
          子元素设置 display:inline-block;
        </h2> 
          <p>
                <img   src="https://user-gold-cdn.xitu.io/2017/2/20/9ed006298676f7dea7794ed96d7544cf?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt="">
</p>
        </div>


      <div class="border-red" style=" position:relative;top:140px; ">
        <div class="" style="position:absolute;left:50%;  transform:translate(-50%,0);
              ">
        <span class="red">position:absolute;设置left、right;相对最近一级；脱离文档流</span>
        <br/>
        ??transform
        <br/>
         position:absolute;left:50%;transform:translate(-50%,0);
        <br/>
         ?水平垂直居中（相对整个页面）：
        <br/>
        position:fixed;top:50%; left:50%; transform:translateX(-50%) translateY(-50%);
        <br/>
        ?水平垂直居中（相对整个页面）：
        <br/>
        position:absolute;left:50%;top:50%;transform:translate(-50%,0);translateY(-50%)
        </div>
        <div class="">
         得到
        </div>
      </div>
      <div class="red" style=" margin-top:250px;">通过设置table-cell</div>
      <br/>
      <div class="border-red" style="  display:table;width:100%;height:400px;  ">
        <div class=""style="  display:table-cell;vertical-align:middle;   text-align: center; ">
          未知的div宽高:<br>
       1、需要给这个div再包一个div，设置：<br>
        display: table;  width: 100%;height: 100%;<br>
        2、对该div设置：<br>
          display:table-cell;vertical-align:middle; text-align: center;
        <!--   子元素:display:table-cell;vertical-align:middle(设置垂直居中);  text-align: center;（设置水平居中）-->
        </div>
      </div>
      <div class="border-red" style="width:600px;height:300px;display:table-cell;vertical-align:middle;text-align:center; ">
      已知div宽高:<br>
      width:300px;height:300px;<br>
      直接对该div设置：<br>
      display:table-cell;vertical-align:middle; text-align: center;
      </div>
<div class="">
  可用 transform , 设置父元素相对定位(position:relative), 子元素如下css样式:
.son{
    position:absolute;
    top:50%;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
}
</div>
<div class="first">测试浮动123</div>
<div class="second">456</div>

  </div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
.first {
           width: 200px;
           height: 200px;
           border: 3px solid red;
           float: left;
       }
       .second {
           width: 200px;
           height: 100px;
           border: 3px solid blue;

       }

.border-red{
  border:1px solid red;
  margin: 15px;
}
.red{
  color:red;
}

</style>
