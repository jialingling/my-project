<template lang="html">
  <div class="">
    <div class="demo-hover demo-ul t_c">
    <ul class="fllil">
        <li>
            <a href="javascript:;">html</a>
            <ul>
                <li><a href="#">div</a></li>
                <li><a href="#">h1</a></li>
            </ul>
        </li>
        <li>
            <a href="javascript:;">js</a>
            <ul>
                <li><a href="#">string</a></li>
                <li><a href="#">array</a></li>
                <li><a href="#">object</a></li>
                <li><a href="#">number</a></li>
            </ul>
        </li>
        <li>
            <a href="javascript:;">css3</a>
            <ul>
                <li><a href="#">transition</a></li>
                <li><a href="#">animation</a></li>
            </ul>
        </li>
        <li>
            <a href="javascript:;">框架</a>
            <ul>
                <li><a href="#">vue</a></li>
                <li><a href="#">react</a></li>
            </ul>
        </li>
    </ul>
    <div class="clear"></div>
</div>
<div class="demo-hover demo-ul ul-transition t_c">
    <ul class="fllil">
        <li>
            <a href="javascript:;">html</a>
            <ul>
                <li><a href="#">div</a></li>
                <li><a href="#">h1</a></li>
            </ul>
        </li>
        <li>
            <a href="javascript:;">js</a>
            <ul>
                <li><a href="#">string</a></li>
                <li><a href="#">array</a></li>
                <li><a href="#">object</a></li>
                <li><a href="#">number</a></li>
            </ul>
        </li>
        <li>
            <a href="javascript:;">css3</a>
            <ul>
                <li><a href="#">transition</a></li>
                <li><a href="#">animation</a></li>
            </ul>
        </li>
        <li>
            <a href="javascript:;">框架</a>
            <ul>
                <li><a href="#">vue</a></li>
                <li><a href="#">react</a></li>
            </ul>
        </li>
    </ul>
    <div class="clear"></div>


    <div  class="reflect-1">
      <img src="http://img.xingxio.com/u/content/res/11/201803/191830111519704036(1).jpg" alt="">
    </div>
    <div class="">
      <img src="http://img.xingxio.com/u/content/res/11/201803/191830111519704036(1).jpg" alt="" class="reflect-2">
    </div>
    <div class="">
      <img src="http://img.xingxio.com/u/content/res/11/201803/191830111519704036(1).jpg" alt="" class="reflect-3">
    </div>
</div>

  </div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped >
.demo-ul{margin-bottom: 300px;}
    .demo-ul li{
        padding: 0 10px;
        width: 100px;
        background: #f90;
        position: relative;
    }
    .demo-ul li a{
        display: block;
        height: 40px;
        line-height: 40px;
        text-align: center;
    }
    .demo-ul li ul{
        position: absolute;
        width: 100%;
        top: 40px;
        left: 0;
        transform: scaleY(0);
        overflow: hidden;
    }
    .ul-transition ul{
        transform-origin: 0 0;
        transition: all .5s;
    }
    .demo-ul li:hover ul{
        transform: scaleY(1);
    }
    .demo-ul li ul li{
        float: none;
        background: #0099ff;

}
.reflect-1{
  height: 200px;
  margin: 20px;
  border:2px solid blue;
}
.reflect-1 img{
  margin-top: 100px;
  width: 100px;
  height: 100px;
  -webkit-box-reflect: below 0 url(http://cdn.w3cplus.com/sites/default/files/blogs/2014/1405/css-masking.png);
  box-reflect: below 0 url(http://cdn.w3cplus.com/sites/default/files/blogs/2014/1405/css-masking.png);

}
</style>
