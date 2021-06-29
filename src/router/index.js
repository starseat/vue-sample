import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import store from "../store";
Vue.use(VueRouter);

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: "active"
});

// 라우팅 권한 설정시 개별 라우팅 처리하면 소스가 길어지니
// 전역으로 한번에 처리
router.beforeEach((to, from, next) => {
  if(to.meta.minUserLevel && to.meta.minUserLevel > store.getters.getUserInfo.level) {
    alert('접근 권한이 없습니다.');
    next(from.path);
  }
  next();
})

export default router;
