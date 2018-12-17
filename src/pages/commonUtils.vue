<template lang="html">
  <div class="">
    封装js
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
  },
  methods: {
    // 回调函数
    getDataCallback(data, callback) {
      console.log('接收到参数是' + data)
      if (callback) {
        callback(1);
      }
    }
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
</script>

<style lang="css">
</style>
