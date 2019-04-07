<template lang="html">
  <div class="">
    es6解构赋值
<p>
测试文本1
<div class="">
  p中的div
</div>
<span>文本span1</span>
</p>
<p>
测试文本2
<span>文本span2</span>
</p>
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
      console.log([1].concat([2], [9])); //[1,2,9];//不改变原来数组，返回一个所有数组合并的副本；
      function combine() {
        console.log('arguments===============')

        console.log(arguments)
        // let arr = Array.concat.apply([6666], arguments); //[???1, 2, 3, 9]没有去重复的新数组
        // let arr = [].concat.apply([6666], arguments); //[6666, 1, 2, 3, 9]没有去重复的新数组
        let arr = [].concat.apply([], arguments); //[1, 2, 3, 9]没有去重复的新数组

        return Array.from(new Set(arr));
      }
      var m = [1, 2, 2],
        n = [2, 3, 3],
        j = [9];
      console.log(combine(m, n, j)); // [1, 2, 3]
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
      /*原生数组方法*/
      /*
      slice()
      slice和concat这两个方法，仅适用于对不包含引用对象的一维数组的深拷贝
      返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。
      且原始数组不会被修改。
      语法
       arr.slice();
        // [0, end]

        arr.slice(begin);
        // [begin, end]

        arr.slice(begin, end);
        */
      // [begin, end)
      {
        let testArr = [11, 2, 3];
        console.log('[11, 2, 3].slice()', testArr.slice()); //[11, 2, 3] 相当于  [11, 22, 33].slice(0, 3)
        let arr2 = testArr.slice(0, 2);
        console.log('[11, 2, 3].slice(0, 2)', arr2); ///(2) [11, 2]
        console.log('[11, 2, 3].slice(0, 1)之后不会修改[11, 2, 3]', testArr)
      } {

      }
      /*将一组值，转换为数组;
      总是返回参数值组成的数组。如果没有参数，就返回一个空数组。

      Array.of()
      可以用来替代Array()或new Array();
      Array方法没有参数、一个参数、三个参数时，返回结果都不一样。
      只有当参数个数不少于 2 个时，Array()才会返回由参数组成的新数组。
      参数个数只有一个时，实际上是指定数组的长度。
*/
      {
        let arr = Array.of(1, 2, 3);
        console.log('arr', arr); //arr (3) [1, 2, 3]
        let arr2 = Array.of('1, 2, 3');
        console.log('arr2', arr2); //arr2 ["1, 2, 3"]
      } {
        function ArrayOf() {
          return [].slice.call(arguments);
        }
        console.log(ArrayOf(11, 2, 3))
      } {
        console.log('Array()', Array()); // []
        console.log('Array(3)', Array(3)); // [, , ,]
        console.log('Array(3, 11, 8)', Array(3, 11)) // [3, 11]}
      }
      /*
    将两类对象转为真正的数组：
    类似数组的对象（array-like object）
    和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）

     Array.from()
     */
      /* 实际应用中，
       常见的类似数组的对象是 DOM 操作返回的 NodeList 集合，
       以及函数内部的arguments对象。Array.from都可以将它们转为真正的数组。
       */
      {
        let arrayLike = {
          '0': 'a',
          '1': 'b',
          '2': 'c',
          length: 3
        };
        // ES5的写法
        let arr1 = [].slice.call(arrayLike);
        console.log('arr1', arr1) // ['a', 'b', 'c']
        // ES6的写法
        let arr2 = Array.from(arrayLike);
        console.log('arr2', arr2) // ['a', 'b', 'c']
      }

      {
        this.$nextTick(() => {
          let p = document.querySelectorAll('p');
          let pArr = Array.from(p);
          console.log(pArr);
          pArr.forEach((item) => {
            console.log('item.textContent.length', item.textContent.length);
            console.log('item.textContent', item.textContent);
          })
        })
      }

      {
        let str = 'test';
        // str[2] = 333;//Cannot assign to read only property '2' of string 'test'"
        console.log('字符串获取数据test[1]===', str[0])
        console.log('字符串获取数据test[2]===', str[2])

        console.log(Array.from('hello')); //(5) ["h", "e", "l", "l", "o"]
        console.log(Array.from({
          length: 3
        })); // [ undefined, undefined, undefined ]
        console.log(Array.from({
          length: 2
        }, () => 'jack')); // ['jack', 'jack']
      }
      /*
      fill方法
      使用给定值，填充一个数组。
      还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。
      */
      {
        console.log('fill-7', [1, 'a', undefined].fill(7)); //fill-7(3) [7, 7, 7]
        console.log('fill,pos', ['a', 'b', 'c'].fill(7, 1, 3)); //fill,pos (3) ["a", 7, 7]
        console.log(new Array(3).fill(7)); //[7, 7, 7]
      }
      //注意 如果填充的类型为对象，那么被赋值的是同一个内存地址的对象，而不是深拷贝对象。
      {
        let arr = new Array(3).fill({
          name: 'mike'
        });
        arr[0].name = 'mike2';
        console.log(arr);
        //[{name: "mike2"}, {name: "mike2"}, {name: "mike2"}]
        let arr2 = new Array(3).fill([]);
        arr2[0].push('666');
        console.log(arr2);
        //[[666], [666], [666]]
      }
      /*
      数组实例的 entries()，keys() 和 values()
      */
      {
        for (let index of ['a', 'b', 'c'].keys()) {
          console.log('keys', index)
        }
        // ???
        // // TypeError: ["a","b"].values is not a function
        // for (let elem of ['a', 'b'].values()) {
        //   console.log(elem);
        // }
        for (let [key, value] of ['a', 'b', 'c'].entries()) {
          console.log('key,value', key, value)
        }
      }
      /*
      copyWithin
      在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组
      Array.prototype.copyWithin(target, start = 0, end = this.length)
      */
      {
        let arr = [1, 2, 3, 4, 5];
        let result = arr.copyWithin(0, 3, 4);
        console.log('[1, 2, 3, 4, 5].copyWithin(0, 3, 4)', result); //4, 2, 3, 4, 5]

        console.log('[1, 2, 3, 4, 5].copyWithin(0, 3, 4)', arr); //4, 2, 3, 4, 5]
        // 将2号位到数组结束，复制到0号位
        let i32a = new Int32Array([1, 2, 3, 4, 5]);
        console.log('[1, 2, 3, 4, 5].copyWithin(0, 2)', i32a.copyWithin(0, 2));
        // Int32Array [3, 4, 5, 4, 5]
        // 将3号位复制到0号位  ???
        console.log([].copyWithin.call({
          length: 5,
          3: 1
        }, 0, 3));
        // {0: 1, 3: 1, length: 5}
      }
      /*
       find() 用于找出第一个符合条件的数组成员;如果没有符合条件的成员，则返回undefined。
      findIndex() 返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1
这两个方法都可以发现NaN，弥补了数组的indexOf方法的不足;
两个方法都可以接受第二个参数，用来绑定回调函数的this对象
       */
      {
        console.log([1, 2, 3, 4, 5, 6].find((item) => item > 3)); //4
        console.log([1, 2, 3, 4, 5, 6].findIndex((item) => item > 3)); //3
        //传 第二个参数，用来绑定回调函数的this对象
        function f(v) {
          return v > this.age;
        }
        let person = {
          name: 'Jhon',
          age: 20
        }
        console.log([10, 17, 19, 72].find(f, person));
      }
      /*
      includes()
      返回一个布尔值，表示某个数组是否包含给定的值，
      与字符串的includes方法类似
      第二个参数表示搜索的起始位置，默认为0
      */
      {
        console.log('[1, 2, 3].includes(1, 1)', [1, 2, 3].includes(1, 1)); // false
        console.log('[1, 2, 3].includes(3, -1)', [1, 2, 3].includes(3, -1)); // true
        console.log('includes NaN', [1, 2, NaN].includes(NaN)); //true

        console.log('expensive'.includes('pen')); //true;
        console.log('expensive'.includes('pen', 4)); //false;

      }
      /*-----------------------函数 start----------------------------*/
      {
        function test(x, y = 'world') {
          console.log('默认值', x, y)
        }
        test('hello');
        test('hello', 'myhello');
      } {
        let x = 'test';

        function test2(x, y = x) {
          console.log('作用域', x, y);
        }
        test2('kill');
      } {
        function test3(...arg) {
          for (let item of arg) {
            console.log('rest', item);
          }
        }
        test3(1, 3, 2, 'ere', 3);
      } {
        console.log('...[2, 4, 5]', ...[2, 4, 5]);
      } {
        let arrfuc1 = v => v * 2;
        let arrfuc2 = () => 666;
        console.log('arrfuc1 3*2', arrfuc1(3));
        console.log('arrfuc2', arrfuc2());
      }
      /*
      函数作为返回值
      */
      {
        function consoleLogFuc(str) {
          console.log('consoleLogFuc', str);
        }

        function testReturnFuc(str) {
          return consoleLogFuc(str)
        }
        testReturnFuc(123)
      }
      /*-----------------------函数 end----------------------------*/
      /*-----------------------对象扩展 start----------------------------*/
      {
        let o = 1;
        let k = 2;
        let es6obj = {
          o,
          k
        }
        console.log('es6obj', es6obj);

        let es5_method = {
          hello: function() {
            console.log('hello');
          }
        };
        let es6_method = {
          hello() {
            console.log('hello');
          }
        }
        console.log(es5_method.hello(), es6_method.hello()); //undefined undefined
        console.log(es5_method.hello, es6_method.hello); //ƒ hello() {} ƒ hello() {}

        /*
  属性表达式
        */
        let attr = 'ddd';
        let val = 666;
        let obj = {
          [attr]: val
        }
        console.log(obj); //{ddd: 666}
      }
      /*
      Object.is
      用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致。
      不同之处只有两个：一是+0不等于-0，二是NaN等于自身。
      */


      {
        console.log('字符串', Object.is('abc', 'abc'), 'abc' === 'abc');
        console.log('数组', Object.is([], []), [] === []);

        console.log(' +0 === -0 ', +0 === -0); //true
        console.log('NaN === NaN ', NaN === NaN); // false
        console.log('Object.is(+0, -0)', Object.is(+0, -0)); // false
        console.log('Object.is(NaN, NaN)', Object.is(NaN, NaN)); // true
      }
      /*
      Object.assign方法
      用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）
属性名为 Symbol 值的属性，也会被Object.assign拷贝
Object.assign方法的第一个参数是目标对象，后面的参数都是源对象
      */
      {
        const obj = {
          a: 1
        };
        console.log('浅拷贝', Object.assign(obj));
        console.log('Object.assign(obj)===obj浅拷贝', Object.assign(obj) === obj);
        console.log(Object.assign({
          a: 'aa',
        }, {
          [Symbol('c')]: 'cc'
        })); //{a: "aa", Symbol(c): "cc"}
      }
      // 同名属性替换
      {
        const target = {
          a: 1,
          b: 1
        };
        const source1 = {
          b: 2,
          c: 2
        };
        const source2 = {
          c: 3
        };
        console.log(Object.assign(target, source1, source2)); // {a:1, b:2, c:3}
        console.log(Object.assign([1, 2, 3], [4, 5])); // [4, 5, 3]
      }
      //Object.assign只能进行值的复制，如果要复制的值是一个取值函数，那么将求值后再复制。
      {
        const source1 = {
          get foo() {
            return 1
          }
        };
        const source2 = {
          b: 'bbb'
        }
        const target = {};
        const target2 = {};
        const arr = [{
            target: source1
          },
          {
            target2: source2
          }

        ]
        console.log(Object.assign(target, source1)); //  // { foo: 1 }
        console.log(Object.assign(target2, ...arr));
      }
      /*
      Object.keys()，Object.values()，Object.entries()
 属性名为数值的属性，是按照数值大小，从小到大遍历的
       */
      {
        var obj = {
          foo: 'bar',
          baz: 33
        }
        console.log('Object.keys(obj)', Object.keys(obj)); //(2) ["foo", "baz"]
      } {
        let {
          keys,
          values,
          entries
        } = Object;
        let obj = {
          a: 1,
          b: 2,
          c: 3
        };
        for (let key of keys(obj)) {
          console.log(key); // 'a', 'b', 'c' console.log(value); // 1, 2, 3
        }
        for (let value of values(obj)) {
          console.log(value); // 1, 2, 3
        }
        for (let [key, value] of entries(obj)) {
          console.log([key, value]); // ['a', 1], ['b', 2], ['c', 3]
        }
        const obj2 = {
          100: 'a',
          2: 'b',
          7: 'c'
        };
        console.log(Object.values(obj2)); // ["b", "c", "a"]
        console.log(Object.keys(obj2)); // ["2", "7", "100"]
        console.log(Object.entries(obj2)); // (3) [Array(2), Array(2), Array(2)]  ["2", "b"],["7", "c"],["100", "a"]
        // 属性名为数值的属性，是按照数值大小，从小到大遍历的，因此返回的顺序是b、c、a
        console.log(Object.entries(obj2)[1][1]); //c
      }
      /*
      Object.values只返回对象自身的可遍历属性;
      Object.create方法的第二个参数添加的对象属性（属性p），如果不显式声明，默认是不可遍历的，
      因为p的属性描述对象的enumerable默认是false，Object.values不会返回这个属性。
      只要把enumerable改成true，Object.values就会返回属性p的值。
      */
      {
        const obj = Object.create({}, {
          p: {
            value: 42
          }
        });
        console.log(obj); //{p: 42}
        console.log(Object.values(obj)); // []

        const obj2 = Object.create({}, {
          p: {
            value: 42,
            enumerable: true
          }
        });
        console.log(obj2); //{p: 42}
        console.log(Object.values(obj2)); // [42]
      }
      /*
      Object.values会过滤属性名为 Symbol 值的属性。
        */
      {
        console.log(Object.values({
          [Symbol()]: 123,
          foo: 'abc'
        })); // ['abc']
      }
      /*
      Object.values方法的参数是一个字符串，会返回各个字符组成的一个数组。
      字符串会先转成一个类似数组的对象。字符串的每个字符，就是该对象的一个属性。
      因此，Object.values返回每个属性的键值，就是各个字符组成的一个数组。
      */
      {
        console.log(Object.values('foo'));
        // ['f', 'o', 'o']
      }
      /*
      如果参数不是对象，Object.values会先将其转为对象
      由于数值和布尔值的包装对象，都不会为实例添加非继承的属性。
      所以，Object.values会返回空数组
        */
      {
        console.log(Object.values(42)); // []
        console.log(Object.values(true)); // []
      }
      /*
      Object.entries()方法返回一个数组，
      基本用途是遍历对象的属性;将对象转为真正的Map结构
      成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组。
    如果原对象的属性名是一个 Symbol 值，该属性会被忽略。
    */
      {
        let obj = {
          one: 1,
          two: 2
        };
        for (let [k, v] of Object.entries(obj)) {
          console.log(
            `${JSON.stringify(k)}: ${JSON.stringify(v)}`
          );
        }
      } {
        const obj = {
          foo: 'bar',
          baz: 42
        };
        const map = new Map(Object.entries(obj));
        console.log(map); // Map { foo: "bar", baz: 42 }
      }
      /*
      自己实现Object.entries方法
      */
      {
        // Generator函数的版本
        function* entries(obj) {
          for (let key of Object.keys(obj)) {
            yield [key, obj[key]];
          }
        }

        // 非Generator函数的版本
        function entries(obj) {
          let arr = [];
          for (let key of Object.keys(obj)) {
            arr.push([key, obj[key]]);
          }
          return arr;
        }
      }
      /*???为什么object.fromentries is not a function*/
      /*
      Object.fromEntries()：Object.entries()的逆操作
      用于将一个键值对数组转为对象；将 Map 结构转为对象。
      配合URLSearchParams对象，将查询字符串转为对象
      */
      /*  {
          let obj = Object.fromEntries([
            ['foo', 'bar'],
            ['baz', 42]
          ])
          console.log(obj) // { foo: "bar", baz: 42 }
        } {
          // 例一
          const entries = new Map([
            ['foo', 'bar'],
            ['baz', 42]
          ]);

          console.log(Object.fromEntries(entries)); // { foo: "bar", baz: 42 }

          // 例二
          const map = new Map().set('foo', true).set('bar', false);
          console.log(Object.fromEntries(map)); // { foo: true, bar: false }
        } {
          console.log(Object.fromEntries(new URLSearchParams('foo=bar&baz=qux')));
          // { foo: "bar", baz: "qux" }
        }*/
      /*
      目前，有四个操作会忽略enumerable为false的属性。
      for...in循环：只遍历对象自身的和继承的可枚举的属性。
      Object.keys()：返回对象自身的所有可枚举的属性的键名。
      JSON.stringify()：只串行化对象自身的可枚举的属性。
      Object.assign()： 忽略enumerable为false的属性，只拷贝对象自身的可枚举的属性。
      */

      /*-----------------------对象扩展 end----------------------------*/
      /*-----------------------Symbol start----------------------------*/
      {
        let a1 = Symbol();
        let a2 = Symbol();
        console.log(a1 === a2); //false
        let a3 = Symbol.for('a3');
        let a4 = Symbol.for('a3');
        console.log(a3 === a4); //true
        console.log(a4); //Symbol(a3)
        console.log(a3); //Symbol(a3)
      } {
        let a1 = Symbol.for('abc');
        let obj = {
          [a1]: '124',
          'abc': 232,
        }
        console.log('obj', obj);

        for (let [key, value] of Object.entries(obj)) {
          console.log('let of', key, value);
        }
        // let of abc 232
        for (let key of Reflect.ownKeys(obj)) {
          console.log('let of  Reflect.ownKeys(obj)', key);
        }
        // let of  Reflect.ownKeys(obj) abc
        // let of  Reflect.ownKeys(obj) Symbol(abc)
        Object.getOwnPropertySymbols(obj).forEach((item) => {
          console.log(' Object.getOwnPropertySymbols(obj)', obj[item]);
        })
        // 124
        Reflect.ownKeys(obj).forEach((item) => {
          console.log('Reflect.ownKeys(obj)', item, obj[item]);
        })
        //  abc 232
        //  Symbol(abc) 124
      }
      /*-----------------------Symbol end----------------------------*/

      /*-----------------------Set结构 start----------------------------*/
      {
        let list = new Set();
        list.add(5);
        list.add(7);
        console.log('size', list.size); //2
      } {
        let arr = [1, 2, 4, 4, 2];
        let list = new Set(arr);
        console.log('size', list.size); //3
      } {
        let list = new Set();
        list.add(1);
        list.add(2);
        list.add(1);
        console.log('list', list); //Set(2) {1, 2}
        let arr = [1, 2, 3, 1, '2'];
        let list2 = new Set(arr);
        console.log('unique', list2); //Set(4) {1, 2, 3, "2"}

      } {
        let arr = ['add', 'delete', 'clear', 'has'];
        let list = new Set(arr);
        console.log('has', list.has('add')); //true
        console.log('delete', list.delete('add'), list); //Set(3) {"delete", "clear", "has"}
        list.clear();
        console.log('list', list); //Set(0) {}
      } {
        let arr = ['add', 'delete', 'clear', 'has'];
        let list = new Set(arr);
        for (let key of list.keys()) {
          console.log('key', key); //  add delete clear has

        }
        for (let value of list.values()) {
          console.log('value', value); //  add delete clear has
        }
        for (let [key, value] of list.entries()) {
          console.log('entries', key, value); //add add delete delete  clear clear has has
        }
        list.forEach((item) => console.log(item)); //  add delete clear has
      }

      {
        let weakList = new WeakSet();
        let arg = {};
        weakList.add(arg);
        // weakList.add(2);
        console.log('weakList', weakList);
      }
      /*-----------------------Set结构 end----------------------------*/
      /*-----------------------Map结构 start----------------------------*/
      {
        let map = new Map();
        let arr = ['1', 2, 3];
        map.set(arr, 456);
        console.log('map', map, map.get(arr)); //Map(1) {Array(3) => 456} 456
      } {
        let map = new Map([
          ['a', 121],
          ['b', 232]
        ]);
        console.log('map args', map); //Map {_c: Map(2)}
        console.log('map.get(a) ', map.get('a')); //121

        console.log('size', map.size); //2
        console.log('delete', map.delete('a'), map); //Map {_c: Map(1)}
        console.log('clear', map.clear(), map); //clear undefined Map {_c: Map(0)}
      }
      /*-----------------------Map结构 end----------------------------*/
      /*----------------------- set map array数据结构对比  ----------------------------*/
      let map = new Map();
      let set = new Set();
      let array = [];
      // 增
      set.add({
        t: 1
      });
      map.set('t', 1);
      array.push({
        t: 1
      });
      console.info('map-array', map, array); //Map(1) {"t" => 2}
      console.info('set-array', set); //

      // 查
      let set_has = set.has({
        t: 1
      });
      let map_has = map.has('t');
      let arr_has = array.find(item => item.t); //若存在会返回该元素，不存在则返回undefined
      console.info('map-array-has', map_has, arr_has != undefined); // true true
      console.info('set_has', set_has); //false

      console.info(arr_has); //{t: 1}
      console.info(map.get('t')); //1
      console.log(array.d) //undefined
      // // 注意
      // array.d = 'ss';
      // console.log(array.d) //ss

      //改
      set.forEach(item => item.t ? item.t = 2 : '');
      map.set('t', 2);
      array.forEach(item => item.t ? item.t = 2 : '');
      console.info('map-array-modify', map, array); //Map(1) {"t" => 2}  [ {t: 2}]
      console.info('set-modify', set); //[{t: 2}]

      // 删
      set.forEach(item => item.t ? set.delete(item) : '');
      map.delete('t');
      let index = array.findIndex(item => item.t);
      array.splice(index, 1);
      console.info('map-array-empty', map, array); //Map {_c: Map(0)}  []
      console.info('set-empty', set); //Set {_c: Set(0)}




      /*-----------------------set map obj数据结构对比 ----------------------------*/
      {
        // map,set,object对比
        let item = {
          t: 1
        };
        let map = new Map();
        let set = new Set();
        let obj = {};

        // 增
        map.set('t', 1);
        set.add(item);
        obj['t'] = 1;
        // 或者
        obj.c = 99990;
        console.log(obj)
        console.info('map-set-obj', obj, map, set);

        // 查
        console.info({
          map_exist: map.has('t'),
          set_exist: set.has(item),
          obj_exist: 't' in obj
        })

        // 改
        map.set('t', 2);
        item.t = 2;
        obj['t'] = 2;
        console.info('map-set-obj-modify', obj, map, set);

        // 删除
        map.delete('t');
        set.delete(item);
        delete obj['t'];
        // 或者
        delete obj.c;

        console.info('map-set-obj-empty', obj, map, set);
      }
      /*-----------------------set map obj数据结构对比end----------------------------*/

      // Reflect.ownEntries()方法，返回对象自身的所有属性
      /*
      扩展运算符
      */
      {
        //
        let {
          a,
          b,
          ...c
        } = {
          a: 'test',
          b: 'kill',
          c: 'ddd',
          d: 'ccc'
        };
        console.log(c)
        // c={
        //   c:'ddd',
        //   d:'ccc'
        // }
      }
    }
  },
  methods: {

  },
}
</script>

<style lang="css">
</style>
