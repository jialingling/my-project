<template lang="html">
  <!--  -->
  <div class="">
    js
    <div class="" id="test-dom">
      原始dom
    </div>
    <img id='img1' src="../assets/selected-green.png" data-realsrc='http://img.xingxio.com/u/content/res/11/201711/081145441509935432(1).jpg?imageView2/1/w/200/h/112/q/300' alt="">
<div class="" id='list'>
<input type="text" id='testInput' name="" value="">
</div>
  </div>

</template>

<script>
export default {
  created() {
    /*=== 和 == ;强制类型转换*/
    var obj = {
      // a: undefined
    };
    if (obj.a == null) {
      // 判断对象属性是否存在
      // 相当于obj.a===null||obj.a===undefined
    }
    // 不可以直接判断一个未定义的变量是否为null if(test==null){}
    console.log(obj.a == null); //trueijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj8
    console.log(undefined == null); //true
    console.log(100 == '100'); //true
    console.log('' == 0); //true
    console.log('' == false); //true
    console.log(null == undefined); //true
    console.log(null == ''); //false

    /*js按存储方式分变量类型：值类型、引用类型*/
    //值类型
    var a = 100;
    var b = a;
    a = 200;
    console.log(b); //100
    //引用类型：对象、数组、函数
    var a = {
      age: 20
    };
    var b = a;
    b.age = 21;
    console.log(a.age); //21

    /*typeof运算符:有以下几种类型*/
    console.log(typeof undefined); //undefined
    console.log(typeof 'abs'); //abs
    console.log(typeof 123); //number
    console.log(typeof true); //boolean
    /*typeof无法判断是否为数组,通过 [] instanceof Array判断*/
    console.log(typeof {}); //object
    console.log(typeof []); //object
    console.log(typeof null); //object
    console.log(typeof console.log); //function
    /*逻辑运算符*/
    console.log(10 && 0); //0
    console.log('' || 'abc'); //'abc'
    //判断一个变量会被当做true还是false
    var a = 100;
    console.log(!!a); //true

    // js内置函数：数据封装类对象
    //Object
    // Array
    // Boolean
    //Number
    // String
    // Function
    // Date
    // RegExp
    // Error

    /*构造函数-扩展*/
    var a = {}; //var a= new Object()
    var a = []; //var a=new Array()
    function Foo() {} //var Foo=new Function()
    //使用instanceof 判断一个函数是否是一个变量的构造函数
    console.log(a instanceof Array); //true判断一个变量是否为数组
    console.log(a instanceof Object); //true判断一个变量是否为对象

    /*所有的引用类型（数组、对象、函数）都具有对象特性，即可自由扩展属性（“null”除外）*/
    var obj = {};
    obj.a = 100;
    var arr = [];
    arr.a = 100;

    function fn() {}
    fn.a = 100;
    /*------原型、原型链start------------------------------------------------------------------------------------------*/
    /*所有的引用类型都有一个_proto_(隐示原型)属性，属性值是一个普通的对象*/
    console.log('所有的引用类型都有一个_proto_(隐示原型)属性，属性值是一个普通的对象')
    console.log(obj.__proto__); //===Object.prototype
    console.log(obj.prototype); //没有定义，所以是undefined
    console.log(Object.prototype); //？？普通的对象，Object自有的一些方法,比如toString()
    console.log(Object.prototype.toString); //？？普通的对象，Object自有的一些方法

    console.log(obj.__proto__.__proto__); //===Object.prototype.__proto__  ===null
    console.log(arr.__proto__);
    console.log(fn.__proto__);

    /*所有的函数都有一个prototype（显示原型）属性，属性值是一个普通的对象*/
    console.log('所有的函数都有一个prototype（显示原型）属性，属性值是一个普通的对象')
    console.log(fn.prototype);
    console.log(fn.prototype === fn.__proto__); //false
    console.log(Function.prototype === fn.__proto__); //true

    /*所有的引用类型（数组、对象、函数），__proto__属性值指向他的构造函数的"prototype"属性值*/
    console.log(arr.__proto__ === Array.prototype); //true
    console.log(Array.prototype); //？？普通的对象,含有Array自有的一些方法，比如forEach()？
    console.log(Array.prototype.prototype); //undefined
    console.log(Array.prototype.__proto__ === Object.prototype); //true
    console.log(Array.prototype.__proto__.__proto__); //===Object.prototype.__proto__===null
    console.log(Array.prototype.forEach); //ƒ forEach() { [native code] }
    console.log(Array.prototype.forEach.toString()); //function forEach() { [native code] }
    console.log(obj.__proto__ === Object.prototype); //true

    /*描述new一个对象的过程*/
    /*
    // 创建一个新对象
    // this指向这个新对象
    // 执行代码,对this赋值
    //程序默认返回this(一般不手动写)
    */
    function Student(name, age) {
      this.name - name;
      this.age = age;
      this.class = 'class-1';
      // return this;
    }
    var f = new Student('zhangsang,11')
    console.log(f);

    /*当试图得到一个对象的某个属性时，如果这个对象本身没有这个属性，你们会去他的__proto__（即他的构造函数的prototype）中去找*/
    // 构造函数
    function Foo(name, age) {
      this.name = name;
    }
    Foo.prototype.alertName = function() {
      console.log(this.alertName);
    }
    // 创建实例
    var f = new Foo('zhangsan');
    f.printName = function() {
      console.log(this.name);
    }
    f.printName();
    f.alertName();
    f.toString(); //要去f.__proto__.__proto__中找）
    // 循环对象自身的属性
    var item;
    for (item in f) {
      // 高级浏览器已经在 for in 中屏蔽了来自原型的属性,f的来自原型的alertName属性会被屏蔽(测试谷歌浏览器没有屏蔽该属性)
      //为了保证程序的健壮性,加上这个判断
      if (f.hasOwnProperty(item)) {
        console.log('f 实例的属性有::' + item);
      }
    }
    console.log(f instanceof Foo); //true 判断逻辑:f的__proto__一层层往上,能否对应到Foo.prototype;=
    console.log(f instanceof Object); //true 判断逻辑:f的__proto__一层层往上,能否对应到Object.prototype;

    /*原型链继承的例子*/
    function Animal() {
      this.eat = () => {
        console.log('animal eat');
      }
      // this.eat = function() {
      //   console.log('animal eat');
      // }
    }

    function Dog() {
      this.bark = () => {
        console.log('dog bark');
      }
    }
    Dog.prototype = new Animal();
    var hashiqi = new Dog();
    hashiqi.eat();

    // 原型链继承例子
    function Elem(id) {
      this.elem = document.getElementById(id);
      // 可以构造函数中定义,也可以在原型中定义
      // this.html = function(val) {
      //   var elem = this.elem;
      //   if (val) {
      //     elem.innerHTML = val;
      //   } else {
      //     return this; //链式操作
      //   }
      // }
    }
    Elem.prototype.html = function(val) {
      var elem = this.elem;
      if (val) {
        elem.innerHTML = val;
      } else {
        return this; //链式操作
      }
    }
    Elem.prototype.on = function(type, fn) {
      var elem = this.elem;
      elem.addEventListener(type, fn);
      return this;
    }
    console.log(Elem)
    console.log(Elem.prototype); //??Elem.prototype.constructor==Elem
    console.log(Elem.prototype.constructor); //??Elem.prototype.constructor==Elem
    console.log(Elem.prototype.constructor == Elem) //true
    //   注意使用this.$nextTick
    this.$nextTick(function() {
      var div1 = new Elem('test-dom');
      div1.html('<div>this is add by func</div');
      div1.on('click', function() {
        alert('clciked')
      })
      console.log(div1.elem.innerHTML);
    })
    /*------原型、原型链end------------------------------------------------------------------------------------------*/
    /*-------作用域链、闭包start------------------------------------------------------------------------------------------*/
    /**/
    /*如何理解作用域：
      自由变量
      作用域链。即自由变量的查找
      闭包的两个场景：作为函数值，作为参数传递*/

    /*
    无块级作用域，分函数作用域，全局作用域
      */
    if (true) {
      var testVarScope1 = "testVarScope1";
    }
    console.log(testVarScope1); //testVarScope;变量泄露
    var testVarScope2 = "testVarScope2";

    function testVarScope2fuc() {
      var testVarScope2 = 'testVarScope2InFuc';
      console.log('testVarScope2fuc', testVarScope2); //testVarScope2InFuc;函数内有定义变量，取函数内，若没有往上查询，即取全局变量的值testVarScope2
    }
    testVarScope2fuc();
    console.log('global', testVarScope2); //testVarScope2;

    /*
    作用域链初步理解
    */
    var scopedChain_a = 100;

    function scopedChainFuc1() {
      var scopedChain_b = 200;

      function scopedChainFuc2() {
        var scopedChain_c = 300;
        console.log(scopedChain_a); //100 自由变量
        console.log(scopedChain_b); //200 自由变量
        console.log(scopedChain_c); //300
      }
      scopedChainFuc2();
    }

    scopedChainFuc1();
    /*闭包的两个场景
     */
    /*
 闭包初步理解
 */
    /*
    返回一个函数（函数作为返回值）
    */
    function closureFuc_0() {
      var closure_a = 'closure_a';
      return function() {
        console.log(closure_a); //自由变量，父作用域中寻找
      }
    }
    // userTestClosureBase得到一个函数
    var useClosureFuc_0 = closureFuc_0();
    var closure_a = 'closure_a_global';
    useClosureFuc_0(); //closure_a
    /*
作为参数传递
    */
    function closureFuc_1() {
      var closure_b = 'closureFuc_1';
      return function() {
        console.log(closure_b); //自由变量，父作用域中寻找
      }
    }
    // var useClosureFuc_1=closureFuc_1();
    function closureFuc_2(fn) {
      var closure_b = 'closureFuc_2';
      console.log('closureFuc_2中使用闭包，打印出参数closureFuc_1闭包中的变量closureFuc_1');
      fn(); //closureFuc_1
    }
    closureFuc_2(closureFuc_1());
    /*
    普通函数与闭包对比
    */
    //普通函数
    function testNormalFuc(num) {
      var arr = [];
      arr.push(num)
      console.log(arr);
    }
    testNormalFuc(100); //[100]
    testNormalFuc(200); //[200]
    // 闭包
    function testClosure() {
      var _arr = []; //arr数据不会被外部修改
      return function(num) {
        _arr.push(num)
        console.log(_arr);
      }
    }
    // 错误使用方式
    testClosure(100); //这种方式没执行，因为这样只是声明的函数
    /*
 闭包使用方式一：立即执行，里面的变量test数组每次都被重新初始化
   */
    testClosure()('第一次'); //？？立即执行方法 ["第一次"]
    testClosure()('第二次'); //？？立即执行方法 ["第二次"]
    /*
  闭包使用方式二：通过函数表达式声明变量，里面的变量test数组只初始化一次
    */
    var testClosureFuc = testClosure();
    testClosureFuc(100); //[100]
    testClosureFuc(200); //[100,200]

    /*作用域链、闭包应用*/
    /*应用一：封装变量，收敛权限*/
    // isFirstLoad()之外无法修改_list的值
    function isFirstLoad() {
      var _list = [];
      return function(id) {
        if (_list.indexOf(id) != -1) {
          return false
        } else {
          _list.push(id)
          return true;
        }
      }
    }
    var firstLoad = isFirstLoad();
    console.log(firstLoad(10)); //true
    console.log(firstLoad(10)); //false
    console.log(firstLoad(20)); //true
    /*应用二： */
    /*
    非闭包存在问题demo
    */
    var domList = [];
    for (var i = 0; i < 10; i++) {
      var dom = document.createElement('a');
      dom.innerHTML = i + '<br>';
      dom.addEventListener('click', function(e) {
        e.preventDefault();
        alert(i); //i在所在方法内没定义，叫自由变量，要往上一级去声明它的作用域中去找；因为只有点击才会执行该方法，此时循环已经执行完，i的值已经是10了;;(var带来的不合理场景就是用来计数的循环变量泄露为全局变量)
      })
      document.body.appendChild(dom);
    }
    for (let i = 0; i < 10; i++) {
      var dom = document.createElement('a');
      dom.innerHTML = i + '<br>';
      dom.addEventListener('click', function(e) {
        e.preventDefault();
        alert('let声明：' + i); //let则实际上为JavaScript新增了块级作用域。用它所声明的变量，只在let命令所在的代码块内有效。
      })
      document.body.appendChild(dom);
    }
    /*
    使用闭包解决问题
    */
    for (var i = 0; i < 10; i++) {
      /*    // 自执行函数，不用调用，只要定义完成，立即执行的函数
          (function(i){

          })(i)*/
      (function(i) {
        var dom = document.createElement('a');
        dom.innerHTML = i + '<br>';
        dom.addEventListener('click', function(e) {
          e.preventDefault();
          alert(i); //i在所在方法内没定义，叫自由变量，要往上一级去声明它的作用域中去找；因为定义之后马上执行，所以往上一级去声明它的作用域中去找，找到函数参数i
        })
        document.body.appendChild(dom);
      })(i);
    }

    // 执行上下文
    // 范围：一段<script>或者一个函数
    // 全局（一段script):提取出变量定义，函数声明
    // 函数：提取出变量定义，函数声明，this,argumenets
    /*注意：函数声明和函数表达式的区别*/
    // 函数声明，在afn还未调用之前，afn已经提前声明了
    afn();

    function afn() {
      console.log('afn');
    }
    // bfn(); //此时TypeError: bfn is not a function"；因为bfn是函数表达式，此时只是声明了bfn=undefined。
    var bfn = function() {
      console.log('bfn');
    }
    console.log(vara); //undefined;不会报错vara is not defined，因为变量vara已经先声明了
    var vara = 1;
    cfn('执行上下文测试');

    function cfn(name) {
      console.log(this);
      console.log('参数')
      console.log(arguments);
      age = 30; //不会报错 age is not defined，因为变量age已经先声明了
      console.log(name, age);
      var age; //变量申明提升
    }

    /*
    this要在执行时才能确认值，定义时无法确认
    */
    var obja = {
      name: 'A',
      fn: function() {
        console.log(this);
        // console.log(this.name);//afn1()中this中没有name
      }
    }
    obja.fn(); //this===obja
    obja.fn.call({
      name: 'B'
    }); //this==={name:'B'}
    var afn1 = obja.fn;
    afn1(); //this===undefined  ??
    /*
    this使用场景：
    构造函数
    对象属性
    普通函数
    call/apply/bind
    */
    function Foo2(name) {
      // this = {};
      this.name = name;
      return this;
    }
    var f = new Foo2('zs');

    function fn_this() {
      console.log(this);
    }
    fn_this();
    // call apply bind
    function fn1_this(name, age) {
      console.log(this);
      console.log(name);
    }
    fn1_this.call({
      x: 100
    }, 'call_zhangsan', 22);

    fn1_this.apply({
      y: 100
    }, ['apply_zhangsan', 22]);

    function fn2_this(name, age) {
      console.log(this);
      console.log(name);
    }
    fn2_this.bind({
      z: 100
    })('bind_zhangsan', 22)

    /*------- 作用域链、闭包end----------------------------------------------------------------------------*/
    /*
    img加载
    */
    console.log('start');
    var img = document.createElement('img');
    img.onload = function() {
      console.log('loaded');
    }
    img.src = 'http://img.xingxio.com/u/content/res/11/201803/191830111519704036(1).jpg?imageView2/1/w/200/h/112/q/300';
    console.log('end');
    /*
    date
    */
    console.log(Date.now()); //获取当前时间毫秒数
    var dt = new Date();
    console.log(dt.getTime()); //获取毫秒数
    console.log(dt.getFullYear()); //年
    console.log(dt.getMonth());
    console.log(dt.getDate());
    console.log(dt.getHours());
    console.log(dt.getMinutes());
    console.log(dt.getSeconds());
    // 获取0000-00-00格式的日期
    function formateDate(dt) {
      if (!dt) {
        dt = new Date();
      }
      var year = dt.getFullYear();
      var month = dt.getMonth() + 1;
      var date = dt.getDate();
      if (month < 10) {
        // 强制类型转换
        month = '0' + month;
      }
      if (date < 10) {
        date = '0' + date;
      }
      return year + '-' + month + '-' + date;
    }
    var dt = new Date();
    var formateDate = formateDate(dt);
    console.log(formateDate)
    /*
    random
    Array.slice(begin,end) :会提取原数组中索引从 begin 到 end 的所有元素（包含begin，但不包含end）;只是对原数组的浅拷贝，原数组不改变
    类似 String.slice(beginSlice[, endSlice])
    */
    // 获取随机数，要求是固定长度的字符串格式
    var random = Math.random();
    random = random + '0000000000';
    var randomNum = random.slice(0, 10);
    console.log(randomNum); //0.44956491

    /*
    遍历
    */
    var arr = [1, 2, 3, 4];
    var arr2 = arr.map((item, index) => {
      return `<b>${item}</b>`
    })
    console.log(arr2); //(4) ["<b>1</b>", "<b>2</b>", "<b>3</b>", "<b>4</b>"]
    // 实现一个能遍历对象和数组的forEach函数
    function commonforEach(obj, fn) {
      var key;
      if (obj instanceof Array) {
        obj.forEach((item, index) => {
          fn(index, item);
        })
      } else {
        for (key in obj) {
          fn(key, obj[key]);
        }
      }
    }
    var arr1 = [11, 22, 33, 44];
    commonforEach(arr1, (index, item) => {
      console.log(index, item);
    })
    var obj1 = {
      x: 'xx',
      y: 'yy'
    };
    commonforEach(obj1, (index, item) => {
      console.log(index, item);
    })
    // 循环对象自身的属性

    /*
    性能优化
    */
    window.addEventListener('load', () => {
      // 页面的全部资源（图片、视频等）加载完才会执行
    })
    window.addEventListener('DOMContentLoaded', () => {
      //DOM渲染完即可执行，此时图片、视频可能还没加载完
    })
    /*
    懒加载
    */
    this.$nextTick(() => {
      var img1 = document.getElementById('img1');
      img1.src = img1.getAttribute('data-realsrc');
    })
    /*
    缓存DOM查询
    */
    // 未缓存dom
    var i;
    for (i = 0; i < document.getElementsByTagName('p').length; i++) {
      console.log(i)
    }
    // 缓存dom
    var pList = document.getElementsByTagName('p');
    for (var i = 0; i < pList.length; i++) {
      console.log(i)
    }
    /*
    合并DOM操作
    */
    // 插入10个li标签
    this.$nextTick(() => {
      var listNode = document.getElementById('list');
      var frag = document.createDocumentFragment();
      var x, li;
      for (x = 0; x < 10; x++) {
        li = document.createElement('li');
        li.innerHTML = "list item" + x;
        frag.appendChild(li);
      }
      listNode.appendChild(frag);
    })
    /*
事件节流
    */
    // 插入10个li标签
    this.$nextTick(() => {
      var textArea = document.getElementById('testInput');
      var timeoutId;
      textArea.addEventListener('keyup', () => {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
          console.log('输入完毕');
        }, 100)
      })
    })
  }
}
</script>

<style lang="css">
</style>
