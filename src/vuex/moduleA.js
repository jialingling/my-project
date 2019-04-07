export default {
  state: {
    info: {
      name: 'xuMinqun',
      age: 1
    },
    dInfo: {}
  },
  getters: {
    getUserInfo(state) {
      return state.info;
    },
    getDarenInfo(state) {
      return state.dInfo;
    }
  },
  mutations: {
    setUserInfo(state, userInfo) {
      state.info = userInfo;
    },
    setDarenInfo(state, dInfo) {
      state.dInfo = dInfo;
    }
  },
  actions: {
    setUserInfo({
      commit
    }, user) {
      commit('setUserInfo', user);
    },
    setDarenInfo({
      commit
    }, dUser) {
      commit('setUserInfo', dUser);
    }
  }
}