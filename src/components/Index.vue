<template>
  <div class="index_all">
    <transition name="fade">
      <v-left v-if="showLeft"></v-left>
      <div class="index" v-else>
        <v-header></v-header>
        <section>
          <v-banner></v-banner>
          <v-content></v-content>
        </section>
        <v-footer></v-footer>
      </div>
    </transition>
    <v-dialog v-if='showDialog'></v-dialog>
  </div>
</template>

<script>
import vHeader from "@/components/index/Header.vue"
import vFooter from "@/components/index/Footer.vue"
import vBanner from "@/components/index/Banner.vue"
import vContent from "@/components/index/Content.vue"
import vLeft from "@/components/index/Left.vue"
import vDialog from "@/components/index/Dialog.vue"
export default {
  components: {
    vHeader,
    vFooter,
    vBanner,
    vContent,
    vLeft,
    vDialog
  },
  computed:{
    showLeft(){
      return this.$store.state.leftShow
    },
    showDialog(){
      return this.$store.state.showDialog
    }
  }
}
</script>

<style>
.index_all{
  width:100%;
  height: 100%;
}
.fade-enter,.fade-leave-active{
  transform: scale(0);
  transition: .5s;
}
.fade-enter-active,.fade-leave{
  transform: scale(100% 100%);
  transition: .5s;
}
</style>
