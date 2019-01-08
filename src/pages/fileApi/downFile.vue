<template lang="html">
  <div class="">
    <button type="button" name="button" @click="downLoad"> downLoad</button>
    <div class="">
      其他方法
      <br>
      下载图片(待测试，可能会有被浏览器拦截问题)：  window.open(url)
    </div>
    <div style="margin: auto;text-align: center;">
      <div class="">
        使用 jquery.min.js+ jquery.qrcode.min.js 显示二维码canvas
      </div>
    <div id="qrcode" style="margin-top: 30px;"></div>

    <div @click="downImg" class="font-blue" style="margin-top: 20px;text-decoration: underline;">下载canvas图片</div>
    <div style="margin-top: 20px;">
      <input   v-model="url" style="display: inline-block;width: 100px;" disabled></input>
      <button @click="copyText">复制二维码链接</button>
    </div>
  </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      url: '测试url.....',
    }
  },
  mounted() {
    this.$nextTick(() => {
      jQuery('#qrcode').qrcode({
        width: 150,
        height: 150,
        text: this.url
      });
    })
  },
  methods: {

    downLoad() {
      try {
        var url = "https://dev.piaoziyou.com//file/software/2018/201812/20181228/7f3adb1b2263ce70d9b80d1305dac1e9.apk"; //测试url
        var elemIF = document.createElement("iframe");
        elemIF.src = url;
        elemIF.style.display = "none";
        document.body.appendChild(elemIF);
      } catch (e) {
        this.$message("下载错误")
      }
    },
    //下载二维码图片
    downImg() {
      var canvas = $('#qrcode').find("canvas").get(0);
      var url = canvas.toDataURL('image/jpeg');
      $("#download").attr('href', url).get(0).click();
    },
    // 复制文本
    copyText() {
      var oInput = document.createElement('input');
      oInput.value = this.url;
      document.body.appendChild(oInput);
      oInput.select(); // 选择对象
      document.execCommand("Copy"); // 执行浏览器复制命令
      oInput.className = 'oInput';
      oInput.style.display = 'none';

    }
  }
}
</script>

<style lang="css">
</style>
