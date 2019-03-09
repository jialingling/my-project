<template lang="html">
  <div class="main" id="main">
  <div class="main-top">
    <!-- <img style="margin: 0 20px;" height="40" src="../assets/login_logo.png"> -->
    <el-menu style="border: none;flex: 1;" mode="horizontal" :default-active="activeTop" @select="handleSelectTop" background-color="#223950" text-color="#fff" active-text-color="#409eff">
      <div class="el-menu-top" v-for="item in pageList" :key="item.id" :id="item.id">
        <el-menu-item :index="item.id" class="el-menu-top-item" @click="clickTopMenu(item)">{{item.title}}
        </el-menu-item>
      </div>

    </el-menu>
    <div style="color: white;margin-right: 20px;font-size: 14px;cursor: pointer;"  >下载<i class="el-icon-download"></i></div>
    <!-- <userinfo :user="userInfo" @userLoginOut="userLoginOut"></userinfo> -->
  </div>

  <div class="center" ref="center">
    <div class="center-left" :style="{width:leftMenuWidth+'px'}">
      <div class="center-left-menu1">
        <div style="text-align: center;height: 30px;line-height:30px;background-color: #4a5064">
          <i class="el-icon-menu"></i>
        </div>
        <el-menu class="el-menu-left" mode="vertical" :default-active="activeLeft" @select="handleSelectLeft" background-color="#223950" text-color="#fff" active-text-color="#409eff">
          <div v-for="(item, index) in leftList" :key="item.id">
            <el-menu-item style="text-align: left" :index="item.id" @click="clickLeftMenu(item)">
              <i :class="item.img" style="width: 25px;height: 16px;text-align: center"></i>
              <span slot="title">{{item.title}} </span>
            </el-menu-item>
          </div>
        </el-menu>
      </div>
      <div class="center-left-menu2" v-if="isShowSubMenu">
        <div style="text-align: center;height: 50px;line-height:50px;background-color: #d9dee4;color: #000000">
          <span>{{activeLeftSubTop}}</span>
        </div>
        <el-menu class="el-menu-left-sub" ref="menuLeftSub" mode="vertical" :default-active="activeLeftSub" @select="handleSelectLeftSub" background-color="#eaedf2" active-text-color="#409eff" text-color="#000" unique-opened>
          <div v-for="item in leftSubList" :key="item.id">
            <el-menu-item class="el-menu-row" v-if="item.leaf == '1'" :index="item.id" @click="clickLeftSubMenu(item)">
              <span slot="title">{{item.title}} </span>
            </el-menu-item>
            <el-submenu class="el-menu-row" :index="item.id" v-else>
              <template slot="title">
                  <span slot="title">{{item.title}}</span>
                </template>
              <div v-for="sub_item in item.children">
                <el-menu-item style="text-align: left" :index="sub_item.id" :key="sub_item.id" @click="clickLeftSubMenu(sub_item)">
                  <span slot="title">{{sub_item.title}}</span>
                </el-menu-item>
              </div>
            </el-submenu>
          </div>
        </el-menu>
      </div>
    </div>
    <div class="center-right" :style="{  bottom:msgBottom+16+'px'}">
      <!-- <location :path="pathNavigation"></location> -->
      <router-view></router-view>
    </div>
  </div>
  </div>
</template>

<script>
import {
  getpagelist
} from '@/api/getData'
import * as pathType from '../router/path'

export default {
  name: 'home',
  data() {
    return {
      reconnectCount: 0, //websocket连接次数
      MAXRECONNECTCOUNT: 5, //最大重连次数
      websock: null, //websocket
      activeTop: '', //顶部菜单选中项
      beforeActiveTop: '', //上一次顶部菜单选中项
      activeLeft: '', //左边菜单选中项
      activeLeftSub: '', //左边菜单子菜单选中项
      activeLeftSubTop: '', //左边菜单菜单选中项的title
      pageList: [], //菜单数据集
      leftList: {}, //左边菜单数据集
      leftSubList: {}, //左边子菜单数据集
      isShowSubMenu: false, //显示左侧二级菜单
      leftMenuWidth: 250, //左侧菜单宽度
      fullHeight: document.documentElement.clientHeight,
      fullWidth: document.documentElement.clientWidth,
      pathNavigation: '', //路由内容页上方的菜单显示
      isMsgMenuActive: false, //点击了消息导航
      totalMsgNum: 1, //未读商户消息总数
      unreadMsgNumVisible: true, //显示未读商户消息总数
      showAlertMsg: false, //商户消息弹窗
      company_id: '', //商户id
      new_msg_company_id: '', //收到的新消息的商户id
      newSystemNotice: {}, //系统公告提醒内容
      showSystemAlertMsg: false, //系统公告提醒弹窗
      latesSystemMsgVisible: false, //弹出当前消息推送的系统公告窗口
      msgBottom: 0,
      isLoginOut: false, //标记登录状态
      menuData: {},
      menuTopIds: [],
      reloadInt: 0,
      isReloadVisible: false,
      downloadVisible: false,
    }
  },
  created() {
    this.getpagelist()
  },

  methods: {
    handleSelectLeftSub(key, keyPath) {
      this.activeLeftSub = key;
    },
    getpagelist() {
      const response = this.globalObj.getpagelist;
      this.pageList = response.data.data;
      this.initMenuData(this.pageList);
      this.initMenuTopId(this.pageList);
      this.setFirstLocation()
      //设置初次位置
      // this.setFirstLocation();
    },
    //设置进入初次位置
    setFirstLocation() {
      let self = this;
      //设置顶部菜单默认选中，以及对应的左侧菜单数据
      if (self.pageList && self.pageList.length > 0) {
        //设置顶部菜单默认选中的id
        self.activeTop = self.pageList[0].id;
        //设置顶部对应的左侧菜单数据
        self.leftList = self.pageList[0].children;
        //路由为main显示第一个
        let hash = window.location.hash.substring(1);
        if (hash.indexOf("main") != -1) {
          //设置左侧菜单默认选中，以及对应的左侧子菜单数据
          if (self.leftList && self.leftList.length > 0) {
            self.activeLeft = self.leftList[0].id;
            //判断是否存在左侧子菜单，有则设置左侧子菜单数据，显示，无则不显示
            if (self.leftList[0].children) {
              //设置左侧子菜单顶部的左侧菜单title
              this.activeLeftSubTop = self.leftList[0].title;
              //设置左侧子菜单数据
              self.leftSubList = self.leftList[0].children
              //显示左侧子菜单
              self.isShowSubMenu = true;
              self.leftMenuWidth = 250;
              this.activeLeftSub = self.leftSubList[0].id;
              this.clickLeftSubMenu(self.leftSubList[0])
            } else {
              self.isShowSubMenu = false;
              self.leftMenuWidth = 120;
              this.clickLeftMenu(self.leftList[0])
            }
          }
        } else {
          //包含参数，去掉参数
          let index = hash.indexOf("?");
          if (index != -1) {
            this.setMenu(hash.substring(0, index));
          } else {
            this.setMenu(hash);
          }
        }
      }

    },
    initMenuData(list) {
      if (list && list.length > 0) {
        for (let i = 0; i < list.length; i++) {
          let item = list[i];
          this.menuData[item.id] = item;
          if (item.route_path) {
            this.menuData[item.route_path] = item.id;
          }
          if (item.children) {
            this.initMenuData(item.children);
          }
        }
      }
    },
    initMenuTopId(list) {
      if (list && list.length > 0) {
        for (let i = 0; i < list.length; i++) {
          let item = list[i];
          this.menuTopIds.push(item.id);
        }
      }
    },
    setMenu(path) {
      //        console.log('path=', path)
      let id = this.menuData[path];
      if (!this.menuTopIds.includes(id)) {
        let id1 = this.menuData[id].pid;
        if (!this.menuTopIds.includes(id1)) {
          let id2 = this.menuData[id1].pid;
          if (this.menuTopIds.includes(id2)) {
            //第三层
            //            this.activeTop = id2;
            //            this.activeLeft = id1;
            //            this.activeLeftSub = id;
            //            this.activeLeftSubTop = this.menuData[this.activeLeft].title;
            //            this.leftSubList = this.menuData[this.activeLeft].children;
            //            console.log('id2='+this.menuData[id2].title+"id2="+id2+",top="+this.activeTop)
            //            console.log('id1='+this.menuData[id1].title+"id1="+id1+",top="+this.activeLeft)
            //            console.log('id='+this.menuData[id].title+"id="+id+",top="+this.activeLeftSub)

            if (this.activeTop != id2 || this.activeLeft != id1 || this.activeLeftSub != id) {
              this.activeTop = id2;
              this.activeLeft = id1;
              this.activeLeftSub = id;
              this.pathNavigation = this.menuData[id].path_navigation;
              this.activeLeftSubTop = this.menuData[this.activeLeft].title;
              this.leftList = this.menuData[this.activeTop].children;
              this.leftSubList = this.menuData[this.activeLeft].children;
              this.isShowSubMenu = true;
              this.leftMenuWidth = 250;
            }
            //            console.log('id2='+this.menuData[id2].title+"id2="+id2+",top="+this.activeTop)
            //            console.log('id1='+this.menuData[id1].title+"id1="+id1+",top="+this.activeLeft)
            //            console.log('id='+this.menuData[id].title+"id="+id+",top="+this.activeLeftSub)
          } else {
            let id3 = this.menuData[id2].pid;
            if (this.menuTopIds.includes(id3)) {
              //第四层
              //              this.activeTop = id3;
              //              this.activeLeft = id2;
              //              this.activeLeftSub = id;
              //              this.activeLeftSubTop = this.menuData[this.activeLeft].title;
              //              this.leftSubList = this.menuData[this.activeLeft].children;
              //              console.log('id3='+this.menuData[id3].title+"id3="+id3+",top="+this.activeTop)
              //              console.log('id2='+this.menuData[id2].title+"id2="+id2+",top="+this.activeLeft)
              //              console.log('id1='+this.menuData[id1].title+"id1="+id1)
              //              console.log('id='+this.menuData[id].title+"id="+id+",top="+this.activeLeftSub)
              if (this.activeTop != id3 || this.activeLeft != id2 || this.activeLeftSub != id) {
                this.activeTop = id3;
                this.activeLeft = id2;
                this.activeLeftSub = id;
                this.pathNavigation = this.menuData[id].path_navigation;
                this.activeLeftSubTop = this.menuData[this.activeLeft].title;
                this.leftList = this.menuData[this.activeTop].children;
                this.leftSubList = this.menuData[this.activeLeft].children;
                this.isShowSubMenu = true;
                this.leftMenuWidth = 250;
              }
              //              console.log('id3='+this.menuData[id3].title+"id3="+id3+",top="+this.activeTop)
              //              console.log('id2='+this.menuData[id2].title+"id2="+id2+",top="+this.activeLeft)
              //              console.log('id1='+this.menuData[id1].title+"id1="+id1)
              //              console.log('id='+this.menuData[id].title+"id="+id+",top="+this.activeLeftSub)
            }
          }
        } else {
          //第二层
          //          console.log('id1='+this.menuData[id1].title+"id1="+id1+",top="+this.activeTop)
          //          console.log('id='+this.menuData[id].title+"id="+id+",top="+this.activeLeft)
          if (this.activeTop != id1 || this.activeLeft != id) {
            this.activeTop = id1;
            this.activeLeft = id;
            this.pathNavigation = this.menuData[id].path_navigation;
            this.leftList = this.menuData[this.activeTop].children;
            this.leftSubList = [];
            this.isShowSubMenu = false;
            this.leftMenuWidth = 120;
          }
        }
      }
    },
    clickLeftSubMenu(item) {
      if (item.leaf == '1') {


        this.$router.push({
          path: pathType.PATH_WAIT,
          query: {
            url: item.route_path
          }
        })
        // if (item.route_path) {
        //   this.$router.push(item.route_path);
        // } else {
        //   this.$router.push(pathType.PATH_WAIT)
        // }
        this.pathNavigation = item.path_navigation;
      }
    },
    //点击左侧菜单
    clickLeftMenu(item) {
      //        console.log('clickLeftMenu='+JSON.stringify(item))
      //点击的左侧项为叶子
      if (item.leaf == '1') {
        this.isShowSubMenu = false;
        this.leftMenuWidth = 120;
        //路由不为空跳转，为空跳转到等待
        if (item.route_path) {
          this.$router.push(item.route_path);
        } else {
          this.$router.push(pathType.PATH_WAIT)
        }
        this.pathNavigation = item.path_navigation;
      } else {
        //点击的左侧项为容器，显示左侧项子菜单
        this.isShowSubMenu = true;
        this.leftMenuWidth = 250;
        //设置左侧子菜单顶部的左侧菜单title
        this.activeLeftSubTop = item.title;
        //设置左侧子菜单数据
        this.leftSubList = item.children;
        if (this.leftSubList && this.leftSubList.length > 0) {

          //            console.log('item=='+JSON.stringify(this.leftSubList[0]))
          //左边子菜单有二级目录
          if (this.leftSubList[0].leaf == '0' && this.leftSubList[0].children) {
            this.activeLeftSub = this.leftSubList[0].children[0].id;
            this.clickLeftSubMenu(this.leftSubList[0].children[0])
          } else {
            this.activeLeftSub = this.leftSubList[0].id;
            this.clickLeftSubMenu(this.leftSubList[0])
          }
        }
      }
    },
    handleSelectTop() {

    },
    clickTopMenu() {

    },

    handleSelectLeft() {

    },
  }
}
</script>

<style lang="css" scoped>
.main-top {
  display: flex;
  flex-direction: row;
  background-color: #223950;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  height: 60px;
}
.el-menu-top {
  display: inline-block;
  text-align: center;
}
.el-menu-top-item {
  width: 100px;

}
.center {
  /* flex: 1; */
  display: flex;
}
.center-left {
  display: flex;
}
</style>
