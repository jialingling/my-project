import * as types from './types'
export default {
  [types.Add_PRICE](state) {
    state.price = state.price + 2;
  },
  testMutation(state, num) {
    state.price = state.price + num;
    console.log('mutations state.price ============', state.price)
  },
  [types.SET_NUM](state, num) {
    state.num = num;
  }
}