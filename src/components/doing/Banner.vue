<template>
  <div class="allmine">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <p class="renwutxt1">
            <span style="float: left">任务1-总奖励</span>
            <span style="float: right">></span>
          </p>
          <p class="renwutxt2">10,000.00</p>
          <p class="renwutxt3">
            <span style="float:left">完成进度</span>
            <span style="float: right">
              剩余时间：240
              小时
            </span>
          </p>
          <div class="jindutiao">
            <img src="@/assets/images/jindutiao.png" alt>
          </div>
        </div>
        <div class="swiper-slide">
          <p class="renwutxt1">
            <span style="float: left">任务2-总奖励</span>
            <span style="float: right">></span>
          </p>
          <p class="renwutxt2">20,000.00</p>
          <p class="renwutxt3">
            <span style="float:left">完成进度</span>
            <span style="float: right">
              剩余时间：240
              小时
            </span>
          </p>
          <div class="jindutiao">
            <img src="@/assets/images/jindutiao.png" alt>
          </div>
        </div>
        <div class="swiper-slide">
          <p class="renwutxt1">
            <span style="float: left">任务3-总奖励</span>
            <span style="float: right">></span>
          </p>
          <p class="renwutxt2">30,000.00</p>
          <p class="renwutxt3">
            <span style="float:left">完成进度</span>
            <span style="float: right">
              剩余时间：240
              小时
            </span>
          </p>
          <div class="jindutiao">
            <img src="@/assets/images/jindutiao.png" alt>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/swiper.css"
import "../../../static/jquery-1.11.3.min.js"
import Swiper from "../../../static/swiper.js"
export default {
  mounted() {
    this.initSwiper()
  },
  methods: {
    initSwiper() {
      var swiper = new Swiper(".swiper-container", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 10,
        loop: true,
        on: {
          init() {
            // 回调函数，swiper从当前slide开始过渡到另一个slide时执行。
          }
        }
      })
      swiper
    }
  }
}
</script>

<style>

</style>
