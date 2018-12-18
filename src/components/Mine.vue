<template>
  <div class="mine">
    <v-header></v-header>
    <section>
        <v-first></v-first>
        <v-menu></v-menu>
    </section>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vFooter from "@/components/mine/Footer.vue"
import vHeader from "@/components/mine/Header.vue"
import vFirst from "@/components/mine/First.vue"
import vMenu from "@/components/mine/Menu.vue"
export default {
  components: { vFooter, vHeader, vFirst, vMenu }
}
</script>

<style scoped>
.buygoods {
  margin-top: 0.266667rem;
}
</style>
