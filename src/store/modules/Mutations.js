// vuex 의 store 에서의 상태를 바꿔주는 모듈
// setter 역할

export default {
  setIsLogin(state, isLogin) {
    state.isLogin = isLogin;
  },
  setUserInfo(state, payload) {
    state.userInfo.userid = payload.userid;
    state.userInfo.role = payload.role;
    state.userInfo.level = payload.level;
  },
  setCurrentPath(state, path) {
    state.currentPath = path;
  }
}
