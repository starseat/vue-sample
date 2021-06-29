/*!

 =========================================================
 * Vue Paper Dashboard - v2.0.0
 =========================================================

 * Product Page: http://www.creative-tim.com/product/paper-dashboard
 * Copyright 2019 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import Vue from "vue";
import App from "./App";
import router from "./router/index";
import store from "./store";

import PaperDashboard from "./plugins/paperDashboard";
import "vue-notifyjs/themes/default.css";

Vue.use(PaperDashboard);

/* eslint-disable no-new */
new Vue({
  // async created() {
  //   await store.dispatch("checkUserInfoAction");
  // },
  store,
  router,
  render: h => h(App)
}).$mount("#app");

// 임시 로그인 계정 정보
const LOGIN_USER_LIST = [
  {
    "userid": "admin",
    "role": "admin",
    "level": 9,
    "password": "admin123"
  },
  {
    "userid": "manager",
    "role": "manager",
    "level": 5,
    "password": "manager123"
  },
  {
    "userid": "user",
    "role": "basic",
    "level": 0,
    "password": "user123"
  }
]

localStorage.setItem('TEMP_LOGIN_USER_LIST', JSON.stringify(LOGIN_USER_LIST));
