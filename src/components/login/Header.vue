<template>
  <header class="header lineflex">
    <p @click="back()">
      <img src="images/back.png" alt>返回
    </p>
    <p>
      <img src="images/more.png" alt>
    </p>
  </header>
</template>

<script>
export default {
  methods:{
    back(){
      this.$store.commit("changeLoginRegist", false)
    }
  }
}
</script>

<style>
</style>
