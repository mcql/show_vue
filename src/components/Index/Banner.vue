<template>
  <div class="banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="banner1">
            <img src="@/assets/images/banner1.png" alt>
            <div class="banner_text">
              <p>剩余时间</p>
              <p>36.25h</p>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div>
            <img src="@/assets/images/banner2.png" alt>
            <div class="banner_text">
              <p>剩余时间</p>
              <p>36.25h</p>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-button-prev"></div>
      <!--左箭头-->
      <div class="swiper-button-next"></div>
      <!--右箭头-->
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
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      })
      swiper
    }
  }
};
</script>

<style>
</style>
