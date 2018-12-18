<template>
  <div class="login regist">
    <v-header></v-header>
    <regist-Content v-if="login_to_regist"></regist-Content>
    <login-Content v-else></login-Content>
  </div>
</template>

<script>
import vHeader from "@/components/login/Header.vue"
import LoginContent from "@/components/login/LoginContent.vue"
import RegistContent from "@/components/login/RegistContent.vue"
export default {
  components: {
    vHeader,
    LoginContent,
    RegistContent
  },
  data() {
    return {}
  },
  computed: {
    login_to_regist() {
      return this.$store.state.login_to_regist
    }
  }
}
</script>

<style>
</style>
