<template>
<div style="margin-top:100px;margin-left:18px;margin-right:18px;">
  <div class="visa-pay-small-title bold">
    <span>欢迎登录</span>
  </div>

  <div class="my-form-inline" style="line-height: 50px;">
    <span class="my-form-attr" style="width: 25%;display:inline-block;">帐号</span>
    <el-input v-model="usr" size="small" class="my-form-val" style="width:70%"></el-input>
  </div>

  <div class="my-form-inline" style="line-height: 50px;">
    <span class="my-form-attr" style="width: 25%;display:inline-block;">密码</span>
    <el-input v-model="pwd" size="small" class="my-form-val" style="width:70%" type="password"></el-input>
  </div>

  <div class="my-form-inline" style="line-height: 50px;">
    <span class="my-form-attr" style="width: 25%;display:inline-block;">验证码</span>
    <span style="display:inline-flex;flex-direction:row;justify-content:space-between;align-items:center;width:70%">
        <el-input v-model="captcha" size="small" class="my-form-val" style="flex:1;margin-right:5px;" @keyup.13.native="toLogin"></el-input>
        <img :src="captchaSrc" id='captcha-image' @click="changeCaptcha" style="width:100px;"/>
     </span>
  </div>
  <div class="my-form-inline" style="line-height: 25px;display:flex;flex-direction:row; justify-content:flex-end;">
    <el-checkbox-group v-model="remenberPwdChecked" @change="remenberPwdCheckedChange">
      <el-checkbox label="1">记住密码</el-checkbox>
    </el-checkbox-group>

  </div>
  <div style=" text-align:center;margin-top:20px;">
    <el-button type="danger" size="samll" @click="toLogin" style="width:150px;">登录</el-button>
  </div>
  <div class="visa-footer" style="bottom: 0px;left:0;justify-content: center ">
    <!-- <el-button type="primary" size="samll" @click="toLogin">登录</el-button> -->
  </div>
</div>
</template>

<script>
export default {
  data: function() {
    return {
      remenberPwdChecked: [],
      name: '',
      phone: '',
      code: '',
      validCode: true,
      identify: '发送验证码',
      usr: '',
      pwd: '',
      captcha: '',
      captchaSrc: domain + '/admin/index.Index/captcha/admin/index.Index/captcha?_dc='
    }
  },
  created() {
    if (localStorage.getItem('user_password')) {
      this.usr = JSON.parse(localStorage.getItem('user_password')).user;
      this.pwd = JSON.parse(localStorage.getItem('user_password')).password;
      this.remenberPwdChecked.push('1')
    } else {
      this.remenberPwdChecked = [];
    }
  },
  methods: {
    //加密方法
    RSAencrypt(pas) {
      //实例化jsEncrypt对象
      //       let jse = new this.$jsEncrypt;
      //       //设置公钥
      //       jse.setPublicKey(
      //         `-----BEGIN PUBLIC KEY-----
      // MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDlOJu6TyygqxfWT7eLtGDwajtN
      // FOb9I5XRb6khyfD1Yt3YiCgQWMNW649887VGJiGr/L5i2osbl8C9+WJTeucF+S76
      // xFxdU6jE0NQ+Z+zEdhUTooNRaY5nZiu5PgDB0ED/ZKBUSLKL7eibMxZtMlUDHjm4
      // gwQco1KRMDSmXSMkDwIDAQAB
      // -----END PUBLIC KEY-----`
      //       );
      //  // ajax请求发送的数据对象
      // var sendData = new Object();
      // // 将data数组赋给ajax对象
      // console.log(data)
      // for (var key in data) {
      //   sendData[key] = encrypt.encrypt(data[key]);
      // }
      //       jse.setPrivateKey(
      //         `-----BEGIN RSA PRIVATE KEY-----
      // MIICXQIBAAKBgQDlOJu6TyygqxfWT7eLtGDwajtNFOb9I5XRb6khyfD1Yt3YiCgQ
      // WMNW649887VGJiGr/L5i2osbl8C9+WJTeucF+S76xFxdU6jE0NQ+Z+zEdhUTooNR
      // aY5nZiu5PgDB0ED/ZKBUSLKL7eibMxZtMlUDHjm4gwQco1KRMDSmXSMkDwIDAQAB
      // AoGAfY9LpnuWK5Bs50UVep5c93SJdUi82u7yMx4iHFMc/Z2hfenfYEzu+57fI4fv
      // xTQ//5DbzRR/XKb8ulNv6+CHyPF31xk7YOBfkGI8qjLoq06V+FyBfDSwL8KbLyeH
      // m7KUZnLNQbk8yGLzB3iYKkRHlmUanQGaNMIJziWOkN+N9dECQQD0ONYRNZeuM8zd
      // 8XJTSdcIX4a3gy3GGCJxOzv16XHxD03GW6UNLmfPwenKu+cdrQeaqEixrCejXdAF
      // z/7+BSMpAkEA8EaSOeP5Xr3ZrbiKzi6TGMwHMvC7HdJxaBJbVRfApFrE0/mPwmP5
      // rN7QwjrMY+0+AbXcm8mRQyQ1+IGEembsdwJBAN6az8Rv7QnD/YBvi52POIlRSSIM
      // V7SwWvSK4WSMnGb1ZBbhgdg57DXaspcwHsFV7hByQ5BvMtIduHcT14ECfcECQATe
      // aTgjFnqE/lQ22Rk0eGaYO80cc643BXVGafNfd9fcvwBMnk0iGX0XRsOozVt5Azil
      // psLBYuApa66NcVHJpCECQQDTjI2AQhFc1yRnCU/YgDnSpJVm1nASoRUnU8Jfm3Oz
      // uku7JUXcVpt08DFSceCEX9unCuMcT72rAQlLpdZir876
      // -----END RSA PRIVATE KEY-----`
      //       )
      console.log('解密' + this.$jsEncrypt.decrypt(this.$jsEncrypt.encrypt(pas)))

      return this.$jsEncrypt.encrypt(pas);
    },
    //解密方法
    RSAdecrypt(pas) {
      let jse = new this.$jsEncrypt;
      jse.setPrivateKey(
        `-----BEGIN PRIVATE KEY-----MIICXQIBAAKBgQDlOJu6TyygqxfWT7eLtGDwajtNFOb9I5XRb6khyfD1Yt3YiCgQ
WMNW649887VGJiGr/L5i2osbl8C9+WJTeucF+S76xFxdU6jE0NQ+Z+zEdhUTooNR
aY5nZiu5PgDB0ED/ZKBUSLKL7eibMxZtMlUDHjm4gwQco1KRMDSmXSMkDwIDAQAB
AoGAfY9LpnuWK5Bs50UVep5c93SJdUi82u7yMx4iHFMc/Z2hfenfYEzu+57fI4fv
xTQ//5DbzRR/XKb8ulNv6+CHyPF31xk7YOBfkGI8qjLoq06V+FyBfDSwL8KbLyeH
m7KUZnLNQbk8yGLzB3iYKkRHlmUanQGaNMIJziWOkN+N9dECQQD0ONYRNZeuM8zd
8XJTSdcIX4a3gy3GGCJxOzv16XHxD03GW6UNLmfPwenKu+cdrQeaqEixrCejXdAF
z/7+BSMpAkEA8EaSOeP5Xr3ZrbiKzi6TGMwHMvC7HdJxaBJbVRfApFrE0/mPwmP5
rN7QwjrMY+0+AbXcm8mRQyQ1+IGEembsdwJBAN6az8Rv7QnD/YBvi52POIlRSSIM
V7SwWvSK4WSMnGb1ZBbhgdg57DXaspcwHsFV7hByQ5BvMtIduHcT14ECfcECQATe
aTgjFnqE/lQ22Rk0eGaYO80cc643BXVGafNfd9fcvwBMnk0iGX0XRsOozVt5Azil
psLBYuApa66NcVHJpCECQQDTjI2AQhFc1yRnCU/YgDnSpJVm1nASoRUnU8Jfm3Oz
uku7JUXcVpt08DFSceCEX9unCuMcT72rAQlLpdZir876-----END PRIVATE KEY-----`
      )
      return jse.decrypt(pas);
    },

    remenberPwdCheckedChange() {
      this.remenberPwd();
    },
    remenberPwd() {
      console.log('加密~' + this.RSAencrypt(this.pwd))
      return;
      if (this.remenberPwdChecked.length > 0 && this.usr && this.pwd) {
        let params = {
          user: this.usr,
          password: this.pwd,
        }
        localStorage.setItem('user_password', JSON.stringify(params));
        // localStorage.setItem('user_password', JSON.stringify(params));

      } else {
        localStorage.removeItem('user_password');
      }
    },
    changeCaptcha() {
      console.log('解密==============' + this.RSAdecrypt(this.pwd))
      return;
      this.captcha = '';
      let date = new Date().getTime();
      this.captchaSrc = this.captchaSrc.substr(0, this.captchaSrc.indexOf('?')) + "?_dc=" + date;
    },
    getCode() {
      let date = new Date().getTime();
      this.captchaSrc = this.captchaSrc.substr(0, this.captchaSrc.indexOf('?')) + "?_dc=" + date;
    },

    toLogin() {
      var self = this;
      if (!this.usr) {
        this.$toast("请输入您的帐号")
        return false;
      }
      if (!this.pwd) {
        this.$toast("请输入您的密码")
        return false;
      }
      if (!this.captcha) {
        this.$toast("请输入验证码")
        return false;
      }
      let params = {
        usr: self.usr,
        pwd: self.pwd,
        captcha: self.captcha
      }
      let url = '/admin/index.Index/login';

      this.$axios('post', url, params).then((response) => {
        if (response.data.success == true) {
          var user_info = response.data;
          localStorage.setItem('user_info', JSON.stringify(user_info));
          self.$router.push({
            path: '/reserve',
          })
        } else {
          self.changeCaptcha();
          self.$toast({
            message: response.data.msg
          });
        }
      })
      // .catch(function(error) {
      //   self.$toast({
      //     message: error
      //   })
      // })

    },


    goBack() {
      this.$router.push({
        // path: '/index',
        path: '/recruit/detail',
      })
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
