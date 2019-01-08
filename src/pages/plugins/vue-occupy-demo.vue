<template lang="html">
  <div class="" >
    <div   @click="toDetail(item)" v-for="(item,index) in  dataList"  :key="item.id" class="flex-row product-item" style="justify-column:flex-start; ">
      <img :src="item.img_url" alt="" class="list-img-l"  >
      <div class='flex-column pro-text' style='justify-content:space-between;align-items:flex-start;flex:1;height:80px;font-size:14px;padding-left: 5px;'>
        <span class="text-line-2" style="padding-top: 5px;" v-occupy="{ data: item.name }"  > </span>
        <span class="price-color">￥{{item.sale_price}}</span>
      </div>
    </div>
    <!-- <div v-occupy="{ data: title }"></div>
       <p v-occupy="{ data: content1 }"></p>
       <p v-occupy="{ data: content2, config }"></p> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataList: [{
        name: ''
      }, {
        name: ''
      }, {
        name: ''
      }],
      response: {
        "success": true,
        "msg": "查询产品列表成功",
        "data": [{
          "product_id": "1526628450124434",
          "name": "伦敦休闲自驾游",
          "img_url": "http://img.xingxio.com/u/content/res/11/201711/081145441509935432(1).jpg?imageView2/1/w/200/h/112/q/300",
          "on_sale_start": 218283,
          "on_sale_end": 957222,
          "allow_refund": 1,
          "reserve_time_type": 1,
          "reserve_days": 1,
          "reserve_hours": 1,
          "reserve_minutes": 0,
          "sale_date": "2018-08-20",
          "group_id": "15082918308102973438",
          "stock_available_count": 200,
          "stock_type": 2,
          "market_price": "0.01",
          "sale_price": "0.02",
          "sale_price": "0.02",
          "out_of_stock": 2,
          "on_sale_start_date": "2018-08-22 22:12:43",
          "on_sale_end_date": "2018-08-31 11:28:22"
        }, {
          "product_id": "1527075250587469",
          "name": "523测试",
          "img_url": "http://img.xingxio.com/u/content/res/11/201710/2719352test.png?imageView2/1/w/200/h/112/q/300",
          "on_sale_start": -428070,
          "on_sale_end": 954337,
          "allow_refund": 1,
          "reserve_time_type": 1,
          "reserve_days": 1,
          "reserve_hours": 1,
          "reserve_minutes": 0,
          "sale_date": "2018-08-20",
          "group_id": "15082918308102973438",
          "stock_available_count": 0,
          "stock_type": 1,
          "market_price": "0.01",
          "sale_price": "0.02",
          "sale_price": "0.02",
          "out_of_stock": 2,
          "on_sale_start_date": "2018-08-15 10:40:10",
          "on_sale_end_date": "2018-08-31 10:40:17"
        }],
        "total": 4
      },
      title: '',
      content1: '',
      content2: '',
      gitUrl: '',
      config: {
        width: '200px',
        height: '18px',
        background: '#ddd'
      }

    }
  },
  mounted() {
    setTimeout(() => {
      this.title = 'Vue-Occupy'
      this.content1 = 'A Vue directive for occupying content places before the data has been loaded.'
      this.content2 = 'It\'s good for user experiment improving'
      this.gitUrl = 'Fork me on Github!'
      this.dataList = this.response.data;
    }, 1500)
  }
}
</script>

<style lang="css">
p {
     width: 50%;
     min-width: 350px;
     height: 18px;
     font-size: 16px;
     text-align: center;
     margin-bottom: 20px;
   }
   a {
     color: #fff;
     margin-top: 20px;
     outline: none;
     width: 300px;
     height: 18px;
     text-align: center;
   }
.flex-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.flex-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.pro-text{
  width: 50%;
  min-width:  50px;
  height:48px;
}
.product-item {

  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #ebeef5;
  background-color: #fff;
  color: #303133;
  transition: 0.3s;
  border-radius: 4px;
  overflow: hidden;
  margin: 10px;
  position: relative;
}

.product-item img {
  width: 100px;
  height: 80px;
  border-radius: 4px;
  /* transform: scaleX(1) scaleY(1.3) perspective(0.5em) rotateX(2deg);
  transform-origin: bottom; */
}

.product-item img::before {
  content: '';
  position: absolute;
  width: 10px;
  height: 15px;
  /* background: white; */
  border-radius: 50%;
  top: -7.5px;
  left: -5px;
  box-shadow: 0px 40px 0 0 white, 100px 40px 0 0 white;
}

</style>
