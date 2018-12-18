<template>
<div class="shop" id="shop">
  <v-header></v-header>
  <section>
    <v-content :lists="lists"></v-content>
  </section>
</div>
</template>

<script>
import vHeader from "@/components/message/Header.vue"
import vContent from "@/components/message/Content.vue"
export default {
  components: {
    vHeader,
    vContent
  },
  data() {
    return {
      lists: [
        {
          title: "申请代理审核",
          content:
            "您已经成功成为***的代asssssssssssssssssssssssssssssssssssss理用户..."
        },
        {
          title: "申请代理审核a",
          content:
            "asdasda***的代asssssssssssssssssssssssssssssssssssss理用户..."
        }
      ]
    }
  },
  mounted() {
    if (this.lists.length == 0) {
      document.getElementById("shop").style.background = 'url(' + require("@/assets/images/nomessage.png") + ') no-repeat center center'
    }
  }
}
</script>

<style>
</style>
