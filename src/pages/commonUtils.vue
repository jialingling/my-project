<template lang="html">
  <div class="">
    封装js
    <button type="button" name="button" @click="runTestPromise1">测试promsise</button><br/>
    <button type="button" name="button" @click="runPromiseAll">测试runPromiseAll</button><br/>
    <button type="button" name="button" @click="runPromiseAllReject">测试runPromiseAllReject</button><br/>
    <button type="button" name="button" @click="runPromiseRace">测试runPromiseRace</button><br/>



  </div>
</template>

<script>
export default {
  created() {
    // 使用回调函数
    this.getDataCallback('参数1', res => {
      if (res == 1) {
        console.log('回调带来的数据是' + res)
      } else {}
    })
    // setTimeout(fn, 0)在下一轮“事件循环”开始时执行，
    // Promise.resolve()在本轮“事件循环”结束时执行，
    // console.log('one')则是立即执行，因此最先输出。
    setTimeout(function() {
      console.log('three');
    }, 0);

    Promise.resolve().then(function() {
      console.log('two');
    });

    console.log('one');

    // one
    // two
    // three
  },
  methods: {
    // 回调函数
    getDataCallback(data, callback) {
      console.log('接收到参数是' + data)
      if (callback) {
        callback(1);
      }
    },

    runTestPromise1() {
      this.testPromise1().then((data) => {
            console.log('testPromise1-resole', data);
            console.log(testCatch); //通过catch捕获抛出异常testCatch is not defined
          },
          (data) => {
            console.log('testPromise1-reject', data)
          })
        .catch(function(reason) {
          console.log('rejected');
          console.log(reason);
        });
    },
    // Promise.all(promiseArray)方法是Promise对象上的静态方法，该方法的作用是将多个Promise对象实例包装，生成并返回一个新的Promise实例
    runPromiseAll() {
      var p1 = Promise.resolve([1, 2, 3, 4]),
        p2 = Promise.resolve(2),
        p3 = Promise.resolve(3);
      Promise.all([p1, p2, p3]).then(function(results) {
        console.log(results); // [[ 1, 2, 3, 4], 2, 3]
      });
    },
    // promise数组中任何一个promise为reject的话，则整个Promise.all调用会立即终止，并返回一个reject的新的promise对象。
    runPromiseAllReject() {
      var p1 = Promise.resolve(1),
        p2 = Promise.reject(2),
        p3 = Promise.resolve(3);
      Promise.all([p1, p2, p3]).then(function(results) {
        //then方法不会被执行
        console.log(results);
      }).catch(function(e) {
        //catch方法将会被执行，输出结果为：2
        console.log('runPromiseAllReject输出第一个reject的结果', e);
      });
    },
    // const p = Promise.race([p1, p2, p3]);
    // 只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。
    // 那个率先改变的 Promise 实例的返回值，就传递给p的回调函数
    // 如果指定时间内没有获得结果，就将 Promise 的状态变为reject，否则变为resolve
    runPromiseRace() {
      const p = Promise.race([
        new Promise(function(resolve, reject) {
          setTimeout(() => reject(new Error('第一个15000request timeout')), 15000)
        }),
        new Promise(function(resolve, reject) {
          setTimeout(() => reject(new Error('第二个request timeout')), 1000)
        }),
        Promise.resolve('Promise.race最先完成')
      ]);
      p.then(console.log) //相当于？？p.then((data) => console.log(data))
        .catch(console.error);
    },
    // Promise
    testPromise1() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          var num = Math.ceil(Math.random() * 10); //生成1-10的随机数
          if (num <= 5) {
            resolve(num);
          } else {
            reject(`数字太大了${num}`);
          }
        }, 1000)
      })
    },

    //async、await 的使用
    // ？？返回Promise对象才行
    getList() {
      return new Promise((resolve, reject) => {
        var url;
        var params;
        url = '/weshop/index.Product/getWxProductList';
        params = {
          pmall_key,
          type: 1,
          page: 1,
          limit: 25,
          product_name: '',
        };

        this.$axios('post', url, params).then((response) => {
          if (response.data.success == true) {
            var dataList = response.data.data;
            console.log('接口返回===============')
            console.log(dataList)
            resolve(dataList);
          } else {
            reject(response.data.msg)
          }
        }).catch(err => {
          reject('请求失败' + err)
        })

      });
    },

    async fetchAsync() {
      try {
        var list = await this.getList();
        console.log('等待结束===============')
        console.log(list)
        var id = list[0].product_id;
        let url = '/weshop/index.Product/getProductDetail';
        let params = {
          pmall_key: pmall_key,
          type: '1',
          product_id: id,
        };
        this.$axios('post', url, params).then((response) => {
          if (response.data.success == true) {
            var data = response.data.data;
            console.log('await拿到参数之后请求接口返回===============')
            console.log(data)
          }
        })
      } catch (err) {
        console.log(err);
      }
    },

  }

}
</script>

<style lang="css">
</style>
