<template lang="html">
<div class="">
  快捷日历
      <div style="background-color:white;border-bottom: 1px solid #d9d9d9;display: flex;align-items: center;padding: 10px;">
        <div style="display: inline-block;width:4px;height:15px;" class="primary-bg-color"></div>
        <span style="margin-left:5px;width: 100px;">{{date_name}}： </span>
        <div class="">
          <div class="" style="flex:1;flex-direction：row;display:flex;justify-content:flex-end;align-items:center"  >
            <div class="" v-for="(item, index) in lates_calendar_list"  >
              <div :class="['select-box',{sale_available:item.status==1 },{sale_disabled:item.status==2},{selected_box:index==selectedIndex}, 'parentNode']" @click="quickSeleted(index,item)">
                <span>{{index==0?'今天':index==1?'明天':index==2?'后天':''}}  </span>
                <span>{{item.status==2?'不可订':''}} </span>
              </div>
            </div>
            <div   :class="['other-select-btn',{selected_box:selectedIndex==-1 &&user_selected_date!=''}]" @click="showCalendar"   >
              其他日期
            </div>
          </div>
          <div   :class="['date-text-default',{dateTextSelected: user_selected_date!=''}]" >{{default_reserve_date}}</div>
        </div>
      </div>
      <div v-transfer-dom>
      <popup v-model="show" height="100%">
        <div class="popup1">
          <!--  价格日历-->
          <priceCalendar   :dataObj="dataObj" @closeCalendar='closeCalendar'></priceCalendar>
        </div>
      </popup>
    </div>

</div>
</template>

<script>
import {
  TransferDom,
  Popup
} from 'vux'

import priceCalendar from './price-calendar'
export default {
  directives: {
    TransferDom
  },
  components: {
    Popup,
    priceCalendar,
  },
  props: {
    date_name: '',

  },
  data: function() {
    return {
      show: false,

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
      },
      selectedIndex: -1,
      default_reserve_date: '', //默认预订日期
      sale_price: '',
      user_selected_date: '', //用户选择的预订日期
      lates_calendar_list: [],
      calendarVisible: false, //是否显示价格日历
    }
  },
  watch: {
    dataInfo(newVal, oldVal) {
      this.default_reserve_date = newVal.sale_date;
    }
  },
  created() {
    this.getLatesCalendar();
  },
  methods: {
    selectedDate() {
      this.$emit("selectedDate", this.user_selected_date, this.sale_price)
    },
    //选中了最近三天日期的快捷选项
    quickSeleted(index, item) {
      if (item.status == 1) {
        this.selectedIndex = index;
        this.user_selected_date = item.sale_date;
        this.default_reserve_date = item.sale_date;
        this.sale_price = item.sale_price;
        this.selectedDate();
      }
    },

    getLatesCalendar() {
      var self = this;
      var start_date = this.getDateStr(0);
      var end_date = this.getDateStr(2);
      for (var i = 0; i < 3; i++) {
        var obj = {};
        obj.sale_date = this.getDateStr(i);
        obj.sale_price = i;
        obj.status = 1;
        this.lates_calendar_list.push(obj)
      }

    },

    getDateStr(AddDayCount) {
      var dd = new Date();
      dd.setDate(dd.getDate() + AddDayCount); //获取AddDayCount天后的日期
      var y = dd.getFullYear();
      var m = dd.getMonth() + 1; //获取当前月份的日期
      var d = dd.getDate();
      return y + "-" + m + "-" + d;
    },

    showCalendar() {
      this.show = true;
    },

    //通过价格日历选择日期
    closeCalendar(item) {
      if (item) {
        this.user_selected_date = item.date;
        this.default_reserve_date = item.date;
        this.sale_price = item.sale_price;
        this.selectedDate();
        for (var i = 0; i < this.lates_calendar_list.length; i++) {
          //选择了最近三天的日期
          if (this.lates_calendar_list[i].sale_date == item.date) {
            this.quickSeleted(i, this.lates_calendar_list[i]);
            break;
          }
          //选择了其他日期
          else {
            this.selectedIndex = -1;
          }
        }
      }
      this.calendarVisible = false;
    },
  }
}
</script>


<style lang="less">
.select-box {
    height: 45px;
    width: 49px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 12px;
    margin: 3px;
    border: 1px solid #aaa6a6;
    color: #444;
    // 3563a3;
}
.other-select-btn {
    width: 40px;
    height: 45px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: 3px;
    padding: 4px;
    border: 1px solid #aaa6a6;
    color: #444;
    font-size: 12px;
}
.sale_available {
    // border: 1px solid gray;
    // color::  blue!important;
    //
}
.sale_disabled {
    border: 1px solid #d9d9d9;
    color: #d9d9d9;
}
.selected_box {
    border: 1px solid #1784a1 !important;
    color: #1784a1 !important;
}
.date-text-default {
    font-size: 12px;
    line-height: 30px;
}
.dateTextSelected {
    color: #1784a1;
}
</style>
