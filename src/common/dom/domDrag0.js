import Vue from 'vue';
/*
 *  定义公共js里，在入口文件main.js中import；
 *  给elementUI的dialog上加上 v-dialogDrag 指令就可以实现弹窗的全屏和拉伸了。
 */
// v-dialogDrag: 弹窗拖拽+水平方向伸缩
Vue.directive('domDrag', {
  bind(el, binding, vnode, oldVnode) {
    //弹框可拉伸最小宽高
    let minWidth = 400;
    let minHeight = 300;
    //初始非全屏
    let isFullScreen = false;
    //当前宽高
    let nowWidth = 0;
    let nowHight = 0;
    //当前顶部高度
    let nowMarginTop = 0;
    const dialogHeaderEl = el.querySelector('.box-header');
    //弹窗
    const dragDom = el.querySelector('.box-drag');
    dragDom.style.position = "absolute"
    //给弹窗加上overflow auto；不然缩小时框内的标签可能超出dialog；
    dragDom.style.overflow = "auto";
    //清除选择头部文字效果
    dialogHeaderEl.onselectstart = new Function("return false");
    //头部加上可拖动cursor
    dialogHeaderEl.style.cursor = 'move';

    // 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);
    const sty = dragDom.currentStyle || window.getComputedStyle(dragDom, null);

    let moveDown = (e) => {

      // 鼠标按下，计算当前元素距离可视区的距离
      const disX = e.clientX - dialogHeaderEl.offsetLeft;
      const disY = e.clientY - dialogHeaderEl.offsetTop;

      // 获取到的值带px 正则匹配替换
      let styL, styT;

      // 注意在ie中 第一次获取到的值为组件自带50% 移动之后赋值为px
      if (sty.left.includes('%')) {
        styL = +document.body.clientWidth * (+sty.left.replace(/\%/g, '') / 100);
        styT = +document.body.clientHeight * (+sty.top.replace(/\%/g, '') / 100);
      } else {
        styL = +sty.left.replace(/\px/g, '');
        styT = +sty.top.replace(/\px/g, '');
      };


      document.onmousemove = function(e) {
        // 通过事件委托，计算移动的距离
        const l = e.clientX - disX;
        const t = e.clientY - disY;

        // 移动当前元素
        dragDom.style.left = `${l + styL}px`;
        dragDom.style.top = `${t + styT}px`;

        //将此时的位置传出去
        //binding.value({x:e.pageX,y:e.pageY})
      };

      document.onmouseup = function(e) {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    }
    dialogHeaderEl.onmousedown = moveDown;
    //给dialog添加拉伸区域，并设置相应的curspr
    function addResizeVision(dragDom, handleDOM, cursorType) {
      handleDOM = document.createElement("div")
      dragDom.appendChild(handleDOM);

      switch (cursorType) {
        case 'cursorLT':
          //在弹窗左上角加上一个控制块
          handleDOM.className = 'dom-cursor-left-top';
          break;
        case 'cursorRT':
          //在弹窗右上角加上一个控制块
          handleDOM.className = 'dom-cursor-right-top';
          break;
        case 'cursorRB':
          //在弹窗右下角加上一个控制块
          handleDOM.className = 'dom-cursor-right-bottom';
          break;

        case 'cursorLB':
          //在弹窗左下角加上一个控制块
          handleDOM.className = 'dom-cursor-left-bottom';
          break;
        case 'cursorRB':
          //在弹窗右下角加上一个控制块
          handleDOM.className = 'dom-cursor-right-bottom';
          break;
        case 'cursorT':
          //在弹窗顶部加上一个控制块
          handleDOM.className = 'dom-cursor-top';
          break;
        case 'cursorR':
          //在弹窗右测加上一个控制块
          handleDOM.className = 'dom-cursor-right';
          break;
        case 'cursorB':
          //在弹窗底部加上一个控制块
          handleDOM.className = 'dom-cursor-bottom';
          break;
        case 'cursorL':
          //在弹窗左测加上一个控制块
          handleDOM.className = 'dom-cursor-left';
          break;
        default:

      }
      resizeSize(dragDom, handleDOM, cursorType)
    };
    // 监听鼠标事件，改变弹窗宽度、长度
    function resizeSize(dragDom, handleDOM, resizeDirection) {
      handleDOM.onmousedown = (e) => {
        // 记录初始x位置
        const clientX = e.clientX;
        const clientY = e.clientY;
        const dragDomWidth = dragDom.offsetWidth;
        const dragDomHeigth = dragDom.offsetHeight;

        document.onmousemove = function(e) {
          e.preventDefault(); // 移动时禁用默认事件
          // 通过事件委托，计算移动的距离

          var x = dragDomWidth;
          var y = dragDomHeigth;
          var xMoveDis = e.clientX - clientX;
          var yMoveDis = e.clientY - clientY;
          switch (resizeDirection) {
            case 'cursorLT':
              x = dragDomWidth + (-xMoveDis);
              y = dragDomHeigth + (-yMoveDis);
              break;
            case 'cursorRT':
              x = dragDomWidth + xMoveDis;
              y = dragDomHeigth + (-yMoveDis);
              break;
            case 'cursorRB':
              x = dragDomWidth + xMoveDis;
              y = dragDomHeigth + yMoveDis;
              break;
            case 'cursorLB':
              x = dragDomWidth + (-xMoveDis);
              y = dragDomHeigth + yMoveDis;
              break;
            case 'cursorT':
              y = dragDomHeigth + (-yMoveDis);
              break;
            case 'cursorR':
              x = dragDomWidth + xMoveDis;
              break;
            case 'cursorB':
              y = dragDomHeigth + yMoveDis;
              break;
            case 'cursorL':
              x = dragDomWidth + (-xMoveDis);
              break;
            default:

          }

          //比较是否小于最小宽高,设置拉伸后的dialog长度、宽度。
          dragDom.style.width = x > minWidth ? `${x}px` : minWidth + 'px';
          dragDom.style.height = y > minHeight ? `${y}px` : minHeight + 'px';
        };
        //拉伸结束
        document.onmouseup = function(e) {
          document.onmousemove = null;
          document.onmouseup = null;
        };
      }
    };

    //拉伸
    var resizeLT, resizeRT, resizeRB, resizeLB, resizeT, resizeB, resizeL, resizeR;
    addResizeVision(dragDom, resizeLT, 'cursorLT')
    addResizeVision(dragDom, resizeRT, 'cursorRT')
    addResizeVision(dragDom, resizeRB, 'cursorRB')
    addResizeVision(dragDom, resizeLB, 'cursorLB')
    addResizeVision(dragDom, resizeT, 'cursorT')
    addResizeVision(dragDom, resizeR, 'cursorR')
    addResizeVision(dragDom, resizeB, 'cursorB')
    addResizeVision(dragDom, resizeL, 'cursorL')


    // resizeSize(dragDom, resizeL, 'resizeL')
    // resizeSize(dragDom, resizeRB, 'resizeRB')
    // resizeSize(dragDom, resizeLB, 'resizeLB')


  }
})
/**
 *  注意：如果是el-dialog弹出的表单el-form，最好不要把提交按钮当做el-form-item（elementUI文档是这么用的），放在el-dialog里。
 *  不然按钮会同el-dialog中标签一样被overflow；
 */