
<template lang="html">
  <div class="my-calendar">
    价格日历：
    <div class="calendar">
      <div class="header">
        <div class="header-pre" @click="handlePreMonth">
        </div>
        <div class="header-title">
          {{selectedYear}}年{{selectedMonth + 1}}月{{selectedDate}}日
        </div>
        <div class="header-next" @click="handleNextMonth">
        </div>
      </div>

      <div class="main">
        <div class="main-head" v-for="(item, index) in calendarHeader" :key="index">
          {{item}}
        </div>

        <div :class="`main-item-head ${item.content === selectedDate && 'main-item-head-today'}`" @click="handleDayClick(item)" v-for="(item, index) in calendarList" :key="item.type + item.content + `${index}`" style="display:flex;flex-direction:column">
        <div>
          {{item.content}}
        </div>
        <div class="price">
            {{item.sales_price}}
        </div>
        <div class="price">
            {{item.stock_total_count}}
        </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    dataObj: Object,
  },
  data() {
    return {
      test: [],
      calendarHeader: ["日", "一", "二", "三", "四", "五", "六"],
      selectedYear: new Date().getFullYear(),
      selectedMonth: new Date().getMonth(),
      selectedDate: new Date().getDate(),
      startDate: new Date().getDate(),
      startDateWhole: '',
      calendarList: [],
      calendarPriceObj: [],
      calendarPriceObjFormate: [],
    }
  },
  created() {

  },
  mounted() {
    this.getPriceCalendar();
  },
  methods: {
    displayDaysPerMonth() {
      //定义每个月的天数，如果是闰年第二月改为29天
      // startDateWhole:`${year}/${month}/${this.startDate}`
      var year = this.selectedYear;
      var month = this.selectedMonth;
      let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        daysInMonth[1] = 29;
      }
      let targetDay = new Date(year, month, 1).getDay();
      let total_calendar_list = [];
      let preNum = targetDay;
      let nextNum = 0;
      if (targetDay > 0) {
        for (let i = 0; i < preNum; i++) {
          let obj = {
            type: "pre",
            content: ""
          };
          total_calendar_list.push(obj);
        }
      }

      var renderPerdate; //当前天
      for (let i = 0; i < daysInMonth[month]; i++) {
        renderPerdate = i < 9 ? `${this.selectedYear}-${this.selectedMonth+1}-0${i+1}` : `${this.selectedYear}-${this.selectedMonth+1}-${i+1}`
        if (this.calendarPriceObjFormate[renderPerdate] != undefined) {
          var obj = {
            type: "on_sale",
            content: i + 1,
            date: this.calendarPriceObjFormate[renderPerdate].date,
            sales_price: this.calendarPriceObjFormate[renderPerdate].sales_price,
            stock_total_count: this.calendarPriceObjFormate[renderPerdate].stock_total_count,
          };
        } else {
          var obj = {
            type: "on_sale_false",
            content: i + 1,
          };
        }
        total_calendar_list.push(obj);
      }

      nextNum = 6 - new Date(year, month + 1, 0).getDay()
      for (let i = 0; i < nextNum; i++) {
        let obj = {
          type: "next",
          content: ""
        };
        total_calendar_list.push(obj);
      }
      this.calendarList = total_calendar_list;
      return total_calendar_list;
    },
    getPriceCalendar() {
      var self = this;
      this.startDateWhole = `${this.selectedYear}/${this.selectedMonth+1}/${this.startDate}`;
      this.LastDateCurrentMonth = this.$global.dateUtils.dateFormat(new Date(this.selectedYear, this.selectedMonth + 1, 0), 'Y/m/d')
      // 可在此处请求接口更新价格日历数据，此处省略
      var dataObj = this.dataObj;
      var dattaObjTransform = JSON.parse(JSON.stringify(dataObj));
      for (let key in dataObj) {
        dattaObjTransform[key].date = key;
        dattaObjTransform[key].sales_price = dataObj[key].sales_price;
        dattaObjTransform[key].stock_total_count = dataObj[key].stock_total_count;
      }
      this.calendarPriceObjFormate = dattaObjTransform;
      this.calendarPriceObj = dataObj;
      this.displayDaysPerMonth(this.selectedYear, this.selectedMonth)

    },
    handleDayClick(item) {
      if (item.type === 'on_sale') {
        this.selectedDate = Number(item.content)
        this.$emit("closeCalendar", item)
      }
    },
    handlePreMonth() {
      if (this.selectedMonth === 0) {
        this.selectedYear = this.selectedYear - 1
        this.selectedMonth = 11
        this.startDate = 1
      } else {
        this.selectedMonth = this.selectedMonth - 1
        this.startDate = 1
      }
      if (this.selectedMonth == new Date().getMonth() && this.selectedYear == new Date().getFullYear()) {
        this.startDate = new Date().getDate();
        this.selectedDate = new Date().getDate();
      } else {
        this.selectedDate = 1;
      }
      this.getPriceCalendar();
    },
    handleNextMonth() {
      if (this.selectedMonth === 11) {
        this.selectedYear = this.selectedYear + 1
        this.selectedMonth = 0
        this.startDate = 1
      } else {
        this.selectedMonth = this.selectedMonth + 1
        this.startDate = 1
      }
      if (this.selectedMonth == new Date().getMonth() && this.selectedYear == new Date().getFullYear()) {
        this.startDate = new Date().getDate()
        this.selectedDate = new Date().getDate();
      } else {
        this.selectedDate = 1;
      }
      this.getPriceCalendar();
    },

  },

}
</script>

  <style lang="less">
.my-calendar {
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.tips {
  margin: 15px 0 0;
  text-align: center;
}

.calendar {
  flex-shrink: 0;
  width: 90%;
  max-width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0 20px;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0 0 10px rgba(208, 208, 208, 0.5);

  .header {
    color: #2c3135;
    font-size: 16px;
    width: 90%;
    max-width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 22px;
    margin-top: 17px;

    .header-title {
      font-size: 16px;
      letter-spacing: 1px;
    }

    .header-pre {
      height: 12px;
      width: 12px;
      position: relative;
      &:after {
        content: " ";
        display: inline-block;
        height: 9px;
        width: 9px;
        border-width: 2px 2px 0 0;
        border-color: #c8c8cd;
        border-style: solid;
        transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0) rotate(180deg);
        position: absolute;
        top: 50%;
        margin-top: -4px;
        right: 2px;
      }
    }

    .header-next {
      height: 12px;
      width: 12px;
      position: relative;
      &:after {
        content: " ";
        display: inline-block;
        height: 9px;
        width: 9px;
        border-width: 2px 2px 0 0;
        border-color: #c8c8cd;
        border-style: solid;
        transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
        position: absolute;
        top: 50%;
        margin-top: -4px;
        right: 2px;
      }
    }
  }

  .main {
    width: 90%;
    max-width: 95%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-top: 19px;

    .main-item-head {
      width: 13%;
      height:45px;
      max-width: 15%;
      max-height: 50px;
      margin-bottom: 15px;
      padding-top: 4px;
      // display: flex;
      color: gray;
      background-color: #fff;
      flex-shrink: 0;
      box-shadow: 0;
      position: relative;
      text-align: center;
      border-radius: 2px;
      font-size: 16px;

      .main-item-head-piont {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: #f93d3a;
        position: absolute;
        left: calc(50% - 2.5px);
        bottom: 0;
      }
    }
    .main-item-head-not {
      background-color: #edf2f5;
      color: #7f8fa4;
    }
    .main-item-head-today {
      transition: 0.5s all;
      background-color: #409eff;
      color: white;
      box-shadow: 0 2px 6px rgba(171, 171, 171, 0.5);
    }
    .main-head {
      width: 13%;
      height: 13%;
      max-width: 15%;
      max-height: 15%;
      margin-bottom: 15px;
      border-radius: 2px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      color: #7f8fa4;
      background-color: #fff;
      flex-shrink: 0;
    }
  }
}

.active{
  color: #444;
}
.price{
  color: #ff6021;
  font-size: 12px;
}
</style>
