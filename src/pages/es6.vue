<template lang="html">
  <div class="">
    es6解构赋值


  </div>
</template>

<script>
export default {
  created() {
    function conslog(str) {
      console.log(str)
    }
    // destructuring
    let dog = {
      type: 'animal',
      many: 2
    }
    let {
      type,
      many
    } = dog
    console.log(type, many) //animal 2
    //default
    //      function animal(type){
    //     type = type || 'cat'
    //     console.log(type)
    // }
    // animal()  //cat
    function animal(type = 'cat') {
      console.log(type)
    }
    animal() //cat
    // rest
    function animals(...types) {
      console.log(types)
    }
    animals('cat', 'dog', 'fish'); //["cat", "dog", "fish"]

    /*et const*/
    {
      for (let i = 1; i < 3; i++) {
        console.log('let声明的:::' + i);
      }
      // console.log(i);//i is not defined
      let a = 1;
      // let a = 2;
    } {
      const PI = 3.1415926;
      const k = {}
      // PI=ss;"PI" is read-only
      k.b = 3;
      console.log(PI, k);
    }

    /*-----------------------解构赋值start----------------------------*/
    conslog('解构赋值部分----------------------------------------------------'); {
      let a, b;
      [a, b] = [9, 0];
      console.log(a, b);
    } {
      let a, b, rest;
      [a, b, ...rest] = [1, 2, 3, 4, 5, 6];
      console.log(a, b, rest);
    }
    // ??为什么用括号包起来
    {
      let a, b;
      ({
        a,
        b
      } = {
        a: 11,
        b: 22
      });
      console.log(a, b)
    }
    // 默认值要放最后,待完善
    {
      let a, b, c, rest;
      [a, b, c = 3] = [1, 2];
      console.log(a, b, c);
    } {
      let a = 'a';
      let b = 'b';
      [a, b] = [b, a];
      console.log(a, b);
    } {
      function f() {
        return [1, 2]
      }
      let a, b;
      [a, b] = f();
      console.log(a, b);
    } {
      function f() {
        return [1, 2, 3, 4, 5];
      }
      let a, b, c;
      [a, , b, ...c] = f();
      // [a, , ...b, c] = f();//??报错
      console.log(a, b, c); //1,3,[4,5]
    } {
      let o = {
        p: 42,
        q: true
      };
      let {
        p,
        q
      } = o;
      console.log(p, q); //42 true
    } {
      let {
        a = 1, b = 2, c
      } = {
        a: 20,
        c: 30
      };
      console.log(a, b, c); //20,2,30
    } {
      let metaData = {
        title: 'title111',
        content: [{
          title: 'contentTitle',
          desc: 'content1Desc',
        }]
      }
      let {
        title: title,
        content: [{
          title: testTitle,
          // desc: 'ss'//??报错
        }]
      } = metaData;
      console.log(title, testTitle); //title111 contentTitle
    }
    /*-----------------------解构赋值end----------------------------*/
    /*-----------------------Array start----------------------------*/
    {

    }
    /*复制数组*/
    {
      const fruits = ['a', 'b', 'c', 'd'];
      const shallowCopy = fruits.slice(); // this is how to make a copy
      console.log(shallowCopy); //  ['a', 'b','c','d']
    }
    /*删除数组指定索引元素*/
    {
      const fruits = ['a', 'b', 'c', 'd'];
      const removedItem = fruits.splice(1, 2); // this is how to remove an item
      console.log(fruits); // ['a','d']
      console.log(removedItem); // ['b','c']
    }
    /*创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型*/
    {
      let empty = Array.of();
      console.log('empty', empty);
      console.log(Array.of(7)); // [7]
      console.log(Array.of(1, 2, 3)); // [1, 2, 3]
      // 对比
      console.log(Array(7)); // [ , , , , , , ]这是指一个有7个空位的数组(7) [empty × 7]，而不是由7个undefined组成的数组）。
      console.log(Array(1, 2, 3)); // [1, 2, 3]
    } {
      // 数组合并去重
      // https://segmentfault.com/a/1190000004581945
      function combine() {
        let arr = [].concat.apply([], arguments); //没有去重复的新数组
        return Array.from(new Set(arr));
      }
      var m = [1, 2, 2],
        n = [2, 3, 3];
      console.log(combine(m, n)); // [1, 2, 3]
    } {
      let p = document.querySelectorAll('p');
      let pArr = Array.from(p);
      pArr.forEach(function(item) {
        console.log(item.textContent);
      });
      console.log(
        Array.from([1, 3, 5], (item) => item * 2)
      );
    }
    /*-----------------------Array end----------------------------*/

    /*-----------------------es6 API start----------------------------*/
    {
      //二进制0b开头
      //八进制0O开头
      //十六进制0x开头
      console.log('二制表示0B:', 0B1100110); //102
      console.log('八制表示0O:', 0O767); //503
    }
    /*-----------------------es6 API end----------------------------*/
    {
      /*判断被传入的参数值是否为一个有限数值*/
      console.log('15', Number.isFinite(15)); //true
      console.log('NaN', Number.isFinite(NaN)); //false
      console.log('1/0', Number.isFinite('true' / 0)); //false

      /*用来确定一个值是否为NaN*/
      console.log('NaN', Number.isNaN(NaN)); //true
      console.log('0', Number.isNaN(0)); //false
      isNaN(undefined); // true
      isNaN({}); // true
      isNaN(true); // false
      isNaN(null); // false
      isNaN(37); // false
      // strings
      isNaN("37"); // false: 可以被转换成数值37
      // dates
      console.log(isNaN(new Date())); // false
      console.log(isNaN(new Date().toString())); // / 转换成数值失败，true

      /*确定传递的值是否为整数*/
      console.log('25', Number.isInteger(25)); //true
      console.log('25.0', Number.isInteger(25.0)); //true
      console.log('25.1', Number.isInteger(25.1)); //false
      console.log('25字符串', Number.isInteger('25')); //false

      /*判断传入的参数值是否是一个“安全整数”,安全整数范围为 -(253 - 1)到 253 - 1 之间的整数，包含 -(253 - 1)和 253 - 1。*/
      {
        console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
        console.log('10', Number.isSafeInteger(10)); //true
        console.log('a', Number.isSafeInteger('a')); //false
      }
      /*将数字的小数部分去掉，只保留整数部分。 向下取整,四舍五入,向上取整  Math.floor()、Math.ceil()、Math.round() */
      {
        console.log(4.1, Math.trunc(4.1)); //4
        console.log(4.9, Math.trunc(4.9)); //9
      }
      /*函数返回一个数字的符号, 指示数字是正数，负数还是零,此函数共有5种返回值, 分别是 1, -1, 0, -0, NaN. 代表的各是正数, 负数, 正零, 负零, NaN。*/
      {
        console.log('-5', Math.sign(-5)); //-1
        console.log('0', Math.sign(0)); //0
        console.log('5', Math.sign(5)); //1
        console.log('50', Math.sign('50')); //1
        console.log('foo', Math.sign('foo')); //NaN
      }
      /*返回任意数字的立方根*/
      {
        console.log('-1', Math.cbrt(-1)); //-1
        console.log('8', Math.cbrt(8)); //2
      }
    }
  },
  methods: {

  },
}
</script>

<style lang="css">
</style>
