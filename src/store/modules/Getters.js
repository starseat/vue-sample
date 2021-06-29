// vuex 의 store 에서의 상태를 가져오는 모듈
export default {
  getIsLogin(state) {
    return state.isLogin;
  },
  getUserInfo(state) {
    return state.userInfo;
  }
}
