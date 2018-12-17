<template>
  <div class="banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">1</div>
        <div class="swiper-slide">2</div>
        <div class="swiper-slide">3</div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/swiper.css"
import "../../../static/jquery-1.11.3.min.js"
import Swiper from "../../../static/swiper.js"
export default {
  mounted () {
    this.initSwiper()
  },
  methods: {
    initSwiper () {
      var swiper = new Swiper(".swiper-container", {
        loop: true
      })
      swiper
    }
  }
};
</script>

<style>
</style>
