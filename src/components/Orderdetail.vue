<template>
  <div class="shop">
    <v-header></v-header>
    <section>
      <div class="informationbuy">
        <p>购买成功（备货中）</p>
      </div>
      <v-product></v-product>
      <v-address></v-address>
      <div style="height:.08rem">
        <img src="@/assets/images/goodsdetailline.png" alt class="proddetailline">
      </div>
      <v-price></v-price>
      <v-state></v-state>
      <v-wuliu></v-wuliu>
    </section>
  </div>
</template>

<script>
import vHeader from "@/components/orderdetail/Header.vue"
import vProduct from "@/components/orderdetail/Product.vue"
import vAddress from "@/components/orderdetail/Address.vue"
import vPrice from "@/components/orderdetail/Price.vue"
import vState from "@/components/orderdetail/State.vue"
import vWuliu from "@/components/orderdetail/Wuliu.vue"
export default {
  components: { vHeader, vProduct, vAddress, vPrice, vState, vWuliu }
}
</script>

<style>
</style>
