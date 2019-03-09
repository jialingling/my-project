<template lang="html">
  <div class="">
    <p>计数: <output id="result"></output></p>
    <button @click="startWorker">开始 Worker</button>
    <button @click="stopWorker">停止 Worker</button>
    <br /><br />

  </div>
</template>

<script>
export default {
  data() {
    return {
      workerObj: undefined,
      num: 1000000,
    }
  },
  created() {
    // var MyWorker = require("./workers.js");
    // this.workerObj = new MyWorker();
    // this.workerObj.onmessage = (e) => {
    //   console.log(e.data + 'main.js')
    // }
    // this.computed();

  },
  methods: {
    computed() {
      console.log(`Message posted to worker=${this.num}`);
      this.workerObj.postMessage(this.num)
      // 在主线程中终止Worker
      // myWorker.terminate();
    },
    startWorker() {
      var MyWorker = require("./workers.js");
      if (typeof(Worker) !== "undefined") {
        if (typeof(this.workerObj) == "undefined") {
          this.workerObj = new MyWorker();
        }
        this.workerObj.onmessage = function(event) {
          document.getElementById("result").innerHTML = event.data;
        };
      } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
      }
    },
    stopWorker() {
      this.workerObj.terminate();
    }
  }
}
</script>

<style lang="css">
</style>
