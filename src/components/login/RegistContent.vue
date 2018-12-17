<template>
  <section class="regist">
    <div class="recommend_id">
      <input type="text" v-model="regist_username">
    </div>
    <div class="user_id">
      <input type="text" v-model="regist_password">
    </div>
    <div class="regist_pwd">
      <input type="password" v-model="regist_reppwd">
    </div>
    <div class="verfiy">
      <input type="text" v-model="regist_verfiy">
    </div>
    <div class="verfiy_img">
      <img src="@/assets/images/verify_test.png" alt>
      <p>看不清楚，换一个</p>
    </div>
    <div class="regist_btn" @click="regist()">注册</div>
    <div class="back_login" @click="registtologin">已经有账号了，返回登录</div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      regist_username: "",
      regist_password: "",
      regist_reppwd: "",
      regist_verfiy: ""
    }
  },
  methods: {
    registtologin() {
      this.$store.commit("changeLoginRegist", false)
    },
    regist(){
      
    }
  }
}
</script>

<style>
</style>
