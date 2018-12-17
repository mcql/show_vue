<template>
    <div class="index_content">
        <h5>我的任务</h5>
        <p>显示目前阶段6个字符</p>
        <ul>
          <li>
            <div class="licontent">
              <div class="index_ioc">
                <img src="@/assets/images/resource_ioc.png" alt>
              </div>
              <div class="res_txt">
                <p>整合资源</p>
                <p>组建三个核心微商代理</p>
              </div>
            </div>
            <div class="ioc_btn" @click="showDialog()">
              未开启
            </div>
          </li>
          <li>
            <div class="licontent">
              <div class="index_ioc">
                <img src="@/assets/images/share_ioc.png" alt>
              </div>
              <div class="res_txt">
                <p>分享给朋友</p>
                <p>将小程序
                  <span>分享到微信群</span>，分享个人无效
                </p>
              </div>
            </div>
            <div class="ioc_btn">去分享</div>
          </li>
        </ul>
      </div>
</template>

<script>
export default {
  methods:{
    showDialog(){
      this.$store.state.showDialog = true
    }
  }
}
</script>

<style>

</style>
