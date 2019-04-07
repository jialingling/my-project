<template lang="html">
  <div class="">
  ptotype-chain
  </div>
</template>

<script>
export default {
  created() {
    /*组合式继承start-------------------------------------------------------------------------------*/
    /*
    结合借用构造函数实现对实例属性的继承；（私有的属性）
    结合原型链实现对原型属性和方法的继承；（共享）
    */
    {
      function SuperType(name) {
        this.name = name;
        this.color = ['red', 'yellow'];
      }
      SuperType.prototype.sayName = function() {
        console.log(this.name);
      }

      function ChildType(name, age) {
        SuperType.call(this, name);
        this.age = age;
      }
      ChildType.prototype = new SuperType();
      ChildType.prototype.constructor = ChildType;
      ChildType.prototype.sayAge = function() {
        console.log(this.age);
      }

      var instance1 = new ChildType('实例1', 11);
      instance1.sayName = function() {
        console.log('instance1.sayName ', this.name);
      }
      instance1.color.push('实例1color');

      var instance2 = new ChildType('实例2', 22);
      instance2.sayName = function() {
        console.log('instance2.sayName ', this.name);
      }
      instance2.color.push('实例2color');

      console.log('instance1.color', instance1.color); //instance1.color (3) ["red", "yellow", "实例1color"]
      instance1.sayName(); //实例1
      instance1.sayAge(); //11

      console.log('instance2.color', instance2.color); //instance2.color (3) ["red", "yellow", "实例2color"]
      instance2.sayName(); //实例2
      instance2.sayAge(); //22
    }
    /*组合式继承end-------------------------------------------------------------------------------*/
    /*寄生组合式继承start-------------------------------------------------------------------------------*/
    /*
     通过借用构造函数继承属性；
  通过寄生式继承 继承超类型的原型
    */
    console.log('寄生组合式继承start--------------'); {
      function SuperType(name) {
        this.name = name;
        this.color = ['red', 'yellow'];
      }
      SuperType.prototype.sayName = function() {
        console.log(this.name);
      }

      function ChildType(name, age) {
        SuperType.call(this, name);
        /*
       为了确保超类型构造函数不会重写子类型的属性，所以在调用超类型构造函数后再添加准备在子类型中定义的属性
        */
        this.age = age;
      }

      let obj = SuperType.prototype;
      obj.constructor = ChildType;
      ChildType.prototype = obj;

      ChildType.prototype.sayAge = function() {
        console.log(this.age);
      }
      var instance1 = new ChildType('实例1', 11);
      instance1.sayName = function() {
        console.log('instance1.sayName ', this.name);
      }
      instance1.color.push('实例1color');

      var instance2 = new ChildType('实例2', 22);
      instance2.sayName = function() {
        console.log('instance2.sayName ', this.name);
      }
      instance2.color.push('实例2color');

      console.log('instance1.color', instance1.color); //instance1.color (3) ["red", "yellow", "实例1color"]
      instance1.sayName(); //实例1
      instance1.sayAge(); //11

      console.log('instance2.color', instance2.color); //instance2.color (3) ["red", "yellow", "实例2color"]
      instance2.sayName(); //实例2
      instance2.sayAge(); //22

    }
    /*寄生组合式继承end-------------------------------------------------------------------------------*/

  }
}
</script>

<style lang="css">
</style>
