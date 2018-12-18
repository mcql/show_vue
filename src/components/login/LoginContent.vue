<template>
  <section>
    <div class="login_logo centerflex">LOGO位置</div>
    <div class="loginform">
      <div class="username">
        <input type="text" v-model="username">
      </div>
      <div class="password">
        <input type="password" v-model="userpwd">
      </div>
    </div>
    <div class="login_link lineflex">
      <a>
        <p class="login_regist" @click="toRegist()">注册账号</p>
      </a>
      <a>
        <p class="login_forget">忘记密码</p>
      </a>
    </div>
    <div class="login_btn" @click="login()">登陆</div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      userpwd: ""
    }
  },
  methods: {
    toRegist() {
      this.$store.commit("changeLoginRegist", true)
    },
    login(){
      // 发送请求
      this.$router.push('/Index')
    }
  }
}
</script>

<style>
</style>
