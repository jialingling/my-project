<template lang="html">
<div class="" style="margin:60px  0px" id="radio-tree-page">
<div class="" style="color:gray;margin-left:15px;">
 选中了  {{selectedValue}}/ 一级:{{selectedParentValue}}/二级:{{selectedChildValue}}
</div>

    <ul class=" " style="margin-right:20px">
     <li class=" " v-for="(item, index) in treeDataList"  :key="index" >
        <div  class="node" @click="parentSelect(index)" >
          <div :class="[{ active:index===isShow }, 'parentNode']"  >{{item.name}} </div>
          <div>
            <img class="select-icon" src="~@/assets/selected-green.png" v-if="index===isShow&&selectedChildValue==''"/>
           <img class="select-icon" src="~@/assets/selected-gray.png"  v-if="index!=isShow "/></div>
          </div>

      <ul  v-if="index===isShow">
       <li v-for = "childItem in item.children">
        <div class="node" @click="childTypeSelect(childItem,index)">
          <div :class="[{ active:childItem.nodeValue == selectedChildValue }, 'childNode']"  >{{childItem.name}} </div>
          <div>
            <img class="select-icon" src="~@/assets/selected-green.png" v-if="childItem.nodeValue == selectedChildValue "/>
            <img class="select-icon" src="~@/assets/selected-gray.png" v-else/>
          </div>
        </div>
       </li>
      </ul>
     </li>
    </ul>

  <div class="" style="margin:20px;"  >
    <x-button    type="primary" @click.native="triggerGoSelect" >跳转</x-button>
  </div>
</div>
</template>

<script>
import {
  XButton,
} from 'vux'

export default {
  components: {
    XButton,
  },
  data() {
    return {
      order_id: this.$route.query.order_id,
      treeDataList: [],
      selectedValue: '', //选中的节点
      selectedParentValue: '', //选中的一级节点
      selectedChildValue: '', //选中的二级节点
      isShow: 0,
    }
  },

  created() {
    this.getTreeData()
  },
  methods: {
    // 选中一级节点
    parentSelect: function(index) {

      //   如果选中含有子节点的一级节点，则判断是否已经选中了该一级节点的子节点，如果是，则不需要处理
      if (this.treeDataList[index].haveChildren == 1 && this.selectedParentValue == this.treeDataList[index].nodeValue) {
        return;
      }
      //  一级节点、二级节点、实际节点的值重新赋值更新
      this.selectedChildValue = '';
      this.selectedParentValue = '';
      this.selectedValue = this.treeDataList[index].nodeValue;

      this.isShow = index;
      //如果含有二级节点，默认选中第一个二级节点
      if (this.treeDataList[index].haveChildren == 1 && this.selectedChildValue == '') {
        this.childTypeSelect(this.treeDataList[index].children[0], index);
      }
    },
    // 选中二级节点
    childTypeSelect: function(childItem, index) {

      this.selectedChildValue = childItem.nodeValue; //保存选中的二级节点
      this.selectedValue = this.selectedChildValue; //保存选中的节点
      this.selectedParentValue = this.treeDataList[index].nodeValue; //保存对应的一级节点
    },
    getTreeData() {
      this.treeDataList = [{
          "name": "支付宝",
          "nodeValue": "101",
          "haveChildren": "0"
        },
        {
          "name": "微信",
          "nodeValue": "102",
          "haveChildren": "0"
        },
        {
          "name": "农行卡",
          "nodeValue": "10301",
          "haveChildren": "1",
          "children": [{
              "name": "农业银行借记卡支付",
              "nodeValue": "1",
              "haveChildren": "0"
            },
            {
              "name": "农业银行贷记卡支付",
              "nodeValue": "3",
              "haveChildren": "0"
            }
          ]
        }
      ]

      //默认选中第一个节点
      this.selectedValue = this.treeDataList[0].nodeValue;
      //如果含有二级节点，默认选中第一个二级节点
      if (this.treeDataList[0].haveChildren == '1') {
        this.childTypeSelect(this.treeDataList[0].children[0], 0);
      }
      // //只有一种节点，直接跳转
      // if (this.treeDataList.length == 1 && this.treeDataList[0].haveChildren == 0) {
      //   this.triggerGoSelect();
      // }
    },
    triggerGoSelect() {
      this.$vux.toast.show({
        text: '选择了' + this.selectedValue
      })
    },

  }
}
</script>

<style scoped >
#radio-tree-page ul {
  padding-left: 20px;
  list-style: none;
}

.select-icon {
  width: 25px;
}

.node {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.parentNode {
  line-height: 55px;
  font-size: 18px;
  color: #444;
}

.childNode {
  line-height: 50px;
  font-size: 16px;
  color: gray;
}

.active {}
</style>
