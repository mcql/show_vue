<template>
    <div class="buygoods">
        <div class="buyproductpic">
          <img :src='prodetail.img' alt>
        </div>
        <div class="buydetail">
          <h5 class="buytitle">{{prodetail.title}}</h5>
          <p class="buytype">类型：{{prodetail.type}}</p>
          <p class="buyprice">
            <span>￥{{prodetail.realprice}}</span>
            <span>￥{{prodetail.oldprice}}</span>
            <span>×{{prodetail.num}}</span>
          </p>
        </div>
      </div>
</template>

<script>
export default {
    props:['prodetail']
}
</script>

<style>

</style>
