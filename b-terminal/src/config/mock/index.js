import {
  getpagelist,

} from './getpagelist'
export const globalObj = {
  getpagelist,

}
// const install = function(Vue) {
//   if (install.installed) return;
//   install.installed = true;
//   Object.defineProperties(Vue.prototype, {
//     $global: {
//       get() {
//         return globalObj;
//       }
//     }
//   })
// }