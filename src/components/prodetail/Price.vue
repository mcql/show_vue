<template>
  <div class="pdetail">
    <div class="productprice">
      <h5 class="productprice1">¥{{price.realprice}}</h5>
      <p class="productprice2">价格 ￥{{price.oldprice}}</p>
      <p class="productprice3">库存：{{price.prodnum}}</p>
    </div>
    <div class="goodshare">
      <img src="@/assets/images/share_goods.png" alt>
      <p>分享</p>
    </div>
  </div>
</template>

<script>
export default {
  props:['price']
}
</script>

<style>
</style>
