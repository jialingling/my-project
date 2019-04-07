import * as types from './types'
export default {
  addPrice({
    commit
  }) {
    console.log('action addPrice')
    commit(types.Add_PRICE)
  },
  setNum({
    commit
  }, num) {
    commit(types.SET_NUM, num)
  },
  setNumPayload({
    commit,
    state
  }, payload) {
    console.log('setNumPayload执行前,num=', state.num)

    // var params = payload.num + 2000
    commit(types.SET_NUM, {
      num: 111
    })
    // commit(types.SET_NUM, {
    //   num: state.num + 4000
    // })
    console.log('setNumPayload执行前,num=', state.num) //??为什么是object

    console.log('setNumPayload执行后,num=', state.num.num)

  },

  promiseActionA({
    commit
  }, num) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('promiseActionA')
        commit(types.SET_NUM, num)
        resolve()
      }, 1000)
    })
  },
  async promiseActionB({
    dispatch,
    commit
  }) {
    await dispatch('promiseActionA') // 等待 promiseActionA 完成
    console.log('await promiseActionA')
    commit(types.SET_NUM, 10000)
  }
}