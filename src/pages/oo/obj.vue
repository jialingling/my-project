<template lang="html">
  <div class="">
    obj
  </div>
</template>

<script>
export default {
  created() {

    // Object.defineProperties(book, "_year", {
    //   writable: true,
    //   value: 2019,
    // })
    var book = {
      // edition: true,
    };
    Object.defineProperty(book, "_year", {
      writable: true,
      enumerable: true,
      value: 2019,
    })
    Object.defineProperties(book, {
      // edition没使用了defineProperty ， 则enumerable为true
      // edition使用了defineProperty ，如果 没有通过定义enumerable，则enumerable为false;for in 遍历不出
      edition: {
        writable: true,
        value: 1,
      },
      _year: {
        value: 1,
      },
      year: {
        get: function() {
          return this._year;
        },
        set: function(newVal) {
          if (newVal < 2019) {
            this._year = newVal;
            this.edition = this.edition + 1;
          } else {
            this._year = '即将更新';
          }
        }
      }
    })
    console.log('book._year', book._year);
    console.log('book.year', book.year);
    console.log('book.edition', book.edition);

    book.year = 2011;
    console.log('book._year', book._year);
    console.log('book.year', book.year);
    console.log('book.edition', book.edition);
    book.year = 2021;
    console.log('book._year', book._year);
    console.log('book.year', book.year);
    console.log('book.edition', book.edition);
    for (var i in book) {
      console.log('for in：：：：：：：：：：：', i, ":", book[i]);
    }
    console.log('book :', book);
    console.log('_year descriptor', Object.getOwnPropertyDescriptor(book, '_year'));
    console.log('edition descriptor', Object.getOwnPropertyDescriptor(book, 'edition'));

  }
}
</script>

<style lang="css">
</style>
