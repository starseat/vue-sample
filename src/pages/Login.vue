<template>
  <div id="layoutAuthentication">
      <div id="layoutAuthentication_content">
          <main>
              <div class="container">
                  <div class="row justify-content-center" style="margin-top: 6rem;">
                      <div class="col-lg-5">
                          <h3 class="text-center font-weight-light my-4">관리자 로그인</h3>
                          <div class="card shadow-lg border-0 rounded-lg mt-5">
                              <div class="card-body">
                                  <form name="loginForm" id="loginForm" @submit.prevent="onSubmit">
                                      <div class="form-group">
                                          <label class="small mb-1">ID</label>
                                          <input class="form-control py-4" type="text" placeholder="Enter ID" v-model="userid" />
                                      </div>
                                      <div class="form-group">
                                          <label class="small mb-1">Password</label>
                                          <input class="form-control py-4" type="password" placeholder="Enter password" v-model="password" />
                                      </div>
                                      <div class="form-group" v-if="loginErrorMessage">
                                        <small style="color: red;">{{ loginErrorMessage }}</small>
                                      </div>
                                      <div class="form-group align-items-center mt-4 mb-0" >
                                          <button type="submit" class="btn btn-primary" style="width: 100%;">로그인</button>
                                      </div>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </main>
      </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    userid: "",
    password: "",
    loginErrorMessage: ""
  }),
  methods: {
    ...mapActions(["loginAction"]),
    async onSubmit() {
      const { userid, password, loginAction } = this;
      const errMsg = await loginAction({ userid, password });
      if(errMsg) this.loginErrorMessage = errMsg;
      else this.loginErrorMessage = "";
    }
  }
}
</script>
