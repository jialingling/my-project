<template>
<div class=" ">
  <div class="">
    <a href="https://juejin.im/post/5a8e9f925188257a5e575755">日历参考博客(单月历，年月历)</a>
  </div>
  <div class="">
    年月历， 快捷价格日历 (支持滑动，日历多视图？)
  </div>
  <div class="" style="  text-align: center;">
    <span @click="showIndex=0" class="tab">日历   </span>
    <span @click="showIndex=1" class="tab">价格日历   </span>
    <span @click="showIndex=2" class="tab">快捷价格日历 (交互待优化)  </span>
  </div>


  <calendar v-if="showIndex==0" @closeCalendar="closeCalendar"></calendar>
  <price-calendar v-if="showIndex==1" :dataObj='dataObj' @closeCalendar="closePriceCalendar"></price-calendar>
  <quickSelectCalendar v-if="showIndex==2" date_name="日期" @selectedDate='selectedDate'></quickSelectCalendar>
</div>
</template>

<script>
import calendar from '@/components/calendar'
import priceCalendar from '@/components/price-calendar'
import quickSelectCalendar from '@/components/quick-select-calendar'

export default {
  components: {
    calendar,
    priceCalendar,
    quickSelectCalendar,
  },

  data() {
    return {
      showIndex: 0,
      dataObj: {
        "2018-12-27": {
          "sales_price": "0.02",
          "stock_total_count": 127,
          "status": 1
        },

        "2018-12-28": {
          "sales_price": "0.02",
          "stock_total_count": 128,
          "status": 2
        },
        "2018-12-29": {
          "sales_price": "0.02",
          "stock_total_count": 129,
          "status": 1
        },
        "2018-12-30": {
          "sales_price": "0.02",
          "stock_total_count": 130,
          "status": 1
        }
      }
    }
  },
  methods: {
    closeCalendar(item) {
      if (item) {
        this.$vux.toast.show({
          text: '选择了' + item.content
        })
      }

    },
    closePriceCalendar(item) {

      if (item) {
        this.$vux.toast.show({
          text: '选择了' + item.date
        })
      }

    },
    to(path) {
      this.$router.push(path)
    },
    // date-select组件选择了日期，更新选择的日期、价格
    // 有指定使用日期（use_effective_type != 1）的产品，需要提示用户主动选择日期才能创建订单，没有指定使用日期的，可使用默认最近可购买日期创建订单
    selectedDate(sale_date, sale_price) {
      this.user_selected_date = sale_date;
      this.reserve_date = sale_date; //修改用户预订的日期
      this.sale_price = sale_price;
      this.$vux.toast.show({
        text: '选择了' + this.sale_date
      })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab {
  color: #42b983;
  display: inline-block;
  width: 100px;

}

.tab:hover {
  text-decoration: underline;

}
</style>
