// vuex 의 상태를 변경하게 될때의 비지니스 모듈
import router from "@/router";

export default {
  async loginAction({commit}, { userid, password} ) {
    console.log(userid, password);
    const loginUserList = JSON.parse(localStorage.getItem("TEMP_LOGIN_USER_LIST"));
    const user = loginUserList.find(user => {
      return user.userid === userid;
    });
    if(!user) return "유저 정보 없음";
    if(user.password !== password) return "비밀번호가 일치하지 않습니다.";

    // Mutations 호출
    await commit("setIsLogin", true);  // "setIsLogin" : Mutation 의 method 명, true 는 parameter / parameter 가 2개이상일떄는 object로 묶어서 한개만 보냄.
    await commit("setUserInfo", user);

    localStorage.setItem('USER_INFO', JSON.stringify(user));

    router.push("/");
    // return '';
  },
  // 새로고침 등 로그인 계정 정보 확인
  checkUserInfoAction({commit, state}) {
    if(state.userInfo.userid) {
      // console.log("[vuex router] current path :", router);
      console.log("[vuex router] current path arguments:", arguments);
      commit("setIsLogin", true);
      router.push("/"); // 새로고침 시 이전 URL 알아보는거 필요!!!
    }
  },
  logoutAction({commit}) {
    commit("setIsLogin", false);
    commit("setUserInfo", {});

    localStorage.removeItem('USER_INFO');

    router.push("/login");
  }
}
