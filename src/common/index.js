import * as dateUtils from './global/dateUtils'



export const globalObj = {
  dateUtils,

}

const install = function(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.defineProperties(Vue.prototype, {
    $global: {
      get() {
        return globalObj;
      }
    }
  })
}

export default {
  install
}