<template>
  <div class="mine">
    <v-header></v-header>
    <section>
      <v-top></v-top>
      <v-content2 v-if="add"></v-content2>
      <v-content1 v-else></v-content1>
    </section>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vHeader from "@/components/card/Header.vue"
import vTop from "@/components/card/Top.vue"
import vContent1 from "@/components/card/Content1.vue"
import vContent2 from "@/components/card/Content2.vue"
import vFooter from "@/components/card/Footer.vue"
export default {
  components: { vHeader, vTop, vContent1, vContent2, vFooter },
  computed: {
    add() {
      return this.$store.state.add
    }
  }

}
</script>

<style scoped>
.buygoods {
  margin-top: 0.266667rem
}
.allmine {
  height: 5.333333rem
}
</style>
