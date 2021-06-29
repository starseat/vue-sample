import Vue from "vue";
import VueStore from "vuex";
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
};

export default new VueStore.Store({
  state,
  getters,
  mutations,
  actions
});
