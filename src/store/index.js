import Vue from "vue";
import VueStore from "vuex";
import createPersistedState from "vuex-persistedstate";  // 화면 새로고침시 이전 데이터 저장 // https://uxgjs.tistory.com/207

import mutations from "./modules/Mutations";
import getters from "./modules/Getters";
import actions from "./modules/Actions";

Vue.use(VueStore);

const userInfo = {
  userid: "",
  role: "",
  level: 0,
};

const state = {
  isLogin: false,
  userInfo: (localStorage.getItem("USER_INFO")) ? JSON.parse(localStorage.getItem("USER_INFO")) : userInfo,
  currentPath: "",
};

export default new VueStore.Store({
  state,
  getters,
  mutations,
  actions,
  plugins: [createPersistedState({
    paths: ["currentPath"]
  })],
});
