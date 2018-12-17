/** 2018-04-18格式*/
export function formatDate(year, month, day) {
  var y = year;
  var m = month;
  if (m < 10) m = "0" + m;
  var d = day;
  if (d < 10) d = "0" + d;
  return y + "-" + m + "-" + d
}
/*
 ** 时间戳转换成给定的日期之前的所有日期
 ** eg.
 ** allDateBefore(11111111111111, 'Y年m月d日 H时i分')
 ** → "-- 至 2322年02月06日 03时45分"
 */
export function allDateBefore(timestamp, formats) {
  var today = dateFormat(timestamp, formats);
  return "-- 至 " + today;
}
/** 给定的日期当前第一天*/
export function getMonthFirstDate(date) {
  // date.setDate(1);
  // return formatDate(date.getFullYear(), date.getMonth() + 1, date.getDate())
  date.setDate(1);
  return dateFormat(date.getTime(), 'Y-m-d').replace(/-/g, '/')
}
/** 给定的日期当前最后一天*/
export function getMonthLastDate(date) {
  // date.setMonth(date.getMonth() + 1);
  // date.setDate(0);
  // return formatDate(date.getFullYear(), date.getMonth() + 1, date.getDate())
  date.setMonth(date.getMonth() + 1)
  date.setDate(0);
  return dateFormat(date.getTime(), 'Y-m-d').replace(/-/g, '/')
}
/** 获取当前月份*/
export function getCurrentYearMonth() {
  var myDate = new Date();
  var month = Number(myDate.getMonth()) + 1
  var year_month = myDate.getFullYear() + '-' + month;
  return year_month;
};

/*
 ** 时间戳转换成指定格式日期
 ** eg.
 ** dateFormat(11111111111111, 'Y年m月d日 H时i分')
 ** → "2322年02月06日 03时45分"
 */
export function dateFormat(timestamp, formats) {
  // formats格式包括
  // 1. Y-m-d
  // 2. Y-m-d H:i:s
  // 3. Y年m月d日
  // 4. Y年m月d日 H时i分
  formats = formats || 'Y-m-d';

  var zero = function(value) {
    if (value < 10) {
      return '0' + value;
    }
    return value;
  };

  var myDate = timestamp ? new Date(timestamp) : new Date();

  var year = myDate.getFullYear();
  var month = zero(myDate.getMonth() + 1);
  var day = zero(myDate.getDate());

  var hour = zero(myDate.getHours());
  var minite = zero(myDate.getMinutes());
  var second = zero(myDate.getSeconds());

  return formats.replace(/Y|m|d|H|i|s/ig, function(matches) {
    return ({
      Y: year,
      m: month,
      d: day,
      H: hour,
      i: minite,
      s: second
    })[matches];
  });
};