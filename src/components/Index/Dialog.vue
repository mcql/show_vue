<template>
  <section class="startzz" @click="hiddenDiaolg()">
    <div class="startzz_content" @click.stop>
      <div class="yqkq">
        <div class="blackline"></div>
        <p>邀请开启</p>
      </div>
      <p>推荐人ID：65846863</p>
      <p>推荐团队：微商团队</p>
      <p class="choose">
        选择你要组建的团队
        <img src="@/assets/images/wenhao.png" alt>
      </p>
      <div class="choose_btn">
        <ul>
          <li class="choosein">微商团队</li>
          <li>精英团队</li>
          <li>银牌团队</li>
          <li>金牌团队</li>
          <li>砖石团队</li>
        </ul>
      </div>
      <p>
        代理产品：
        <span class="dailiprice">39.8</span>
      </p>

      <div class="xieyi">
        <input class="surebtn" type="checkbox" name value>
        <a>阅读并同意《团队拓展用户协议》</a>
      </div>

      <div class="open_btn">立即开启</div>
    </div>
  </section>
</template>

<script>
export default {
    methods:{
        hiddenDiaolg(){
            this.$store.commit('changeDialog', false)
        }
    }
}
</script>

<style>
</style>
