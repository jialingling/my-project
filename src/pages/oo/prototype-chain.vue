<template lang="html">
  <div class="">
  ptotype-chain
  </div>
</template>

<script>
export default {
  created() {
    /*原型模式---------------------------------------------------------------------------------*/
    {
      function Person() {}
      Person.prototype = {
        name: 'pname',
        age: 100,
        note: {
          interest: 'reading',
        },
        friends: ['Jhon', 'Kim'],
        sayName: function() {
          console.log(this.name);
        }
      }

      let person1 = new Person();
      let person2 = new Person();
      person1.sayName(); //pname
      console.log('person1', person1.name, person1.friends, person1.note.interest); //person1 pname (2) ["Jhon", "Kim"] reading
      console.log('person2', person2.name, person2.friends, person1.note.interest); //person2 pname (2) ["Jhon", "Kim"] reading
      /*
      实例无法修改原型对象的属性值，如果在实例中添加同名属性，则会屏蔽原型中的属性（引用类型除外）。
      可通过delete person1.name 去删除实例属性，就可以重新访问到原型的name属性。
       */
      person1.name = 'person1name';
      person1.note.interest = 'running';
      /*
      原型对象的问题：包含引用类型的原型属性，如数组，对象，会被示意实例共享。
      ？？引用类型：function为什么不会?
      ？？在通过原型来实现继承时，原型实实际上会变成另一个类型的实例，所以，原先的实例属性也就变成了现在的原型属性。
      */
      person1.friends.push('Tom');
      person1.friends[0] = 'Jhon1';
      person1.sayName = function() {
        console.log('重写===' + this.name);
      }
      person1.sayName(); //重写===person1name
      person2.sayName(); //pname
      console.log('person1', person1.name, person1.friends, person1.note.interest); //person1 person1name (3) ["Jhon1", "Kim", "Tom"] running
      console.log('person2', person2.name, person2.friends, person2.note.interest); //person2 pname (3) ["Jhon1", "Kim", "Tom"] running
    }
  }
}
</script>

<style lang="css">
</style>
