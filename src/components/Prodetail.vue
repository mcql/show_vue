<template>
  <div class="shop">
    <v-header></v-header>
    <section>
      <v-bigimg :titleall='titleall'></v-bigimg>
      <v-type></v-type>
      <div class="productdetail">
        <v-price :price='price'></v-price>
        <v-canshu :parameter='parameter'></v-canshu>
        <div>
          <div class="canshuline"></div>产品详情
        </div>
      </div>
      <v-detail :pic='pic'></v-detail>
      <div class="buybtn" @click='buyprod()'>立即下单</div>
    </section>
  </div>
</template>

<script>
import vHeader from "@/components/prodetail/Header.vue"
import vBigimg from "@/components/prodetail/Bigimg.vue"
import vType from "@/components/prodetail/Type.vue"
import vPrice from "@/components/prodetail/Price.vue"
import vCanshu from "@/components/prodetail/Canshu.vue"
import vDetail from "@/components/prodetail/Detail.vue"
export default {
  data() {
    return {
      titleall: {
        title: "风花雪月",
        type: "你猜"
      },
      price: {
        realprice: "123.00",
        oldprice: "1234.00",
        prodnum: "99"
      },
      parameter: [
        { parameter: "50g", title: "重量" },
        { parameter: "VS/微瑕", title: "净度" },
        { parameter: "F-G/优白", title: "色泽" },
        { parameter: "叠爱", title: "款式" }
      ],
      pic: [require("@/assets/images/prodimgdetail.png")]
    }
  },
  components: {
    vHeader,
    vBigimg,
    vType,
    vPrice,
    vCanshu,
    vDetail
  },
  methods:{
    buyprod(){
      this.$router.push('/buy')
    }
  }
}
</script>

<style>
</style>
