<template>
    <section class="leftmenu">
      <div class="info">
        <div class="infoimg"></div>
        <div class="infotxt">
          <p>亚特@118</p>
          <p>ID：HG564984</p>
        </div>
      </div>
      <div class="leftline"></div>
      <ul class="menucontent">
        <li>
          <img src="images/home.png" alt>首页
        </li>
        <li>
          <img src="images/my.png" alt>个人中心
        </li>
        <li>
          <img src="images/info.png" alt>消息通知
        </li>
        <li>
          <img src="images/setting.png" alt>设置
        </li>
      </ul>
      <div class="lxkf">
        <p style="text-align:center;">***********</p>
        <div class="kfline">
          <div class="lxkfline"></div>
          <p>联系客服</p>
          <div class="lxkfline"></div>
        </div>
      </div>
      <div class="kfline2"></div>
      <div class="leftclose" @click="cloesLeft()">关闭按钮
        <img src="images/close.png" alt>
      </div>
    </section>
</template>

<script>
export default {
    methods:{
        cloesLeft(){
            this.$store.commit('changeLeftShow', false)
        }
    }
}
</script>

<style>
</style>
