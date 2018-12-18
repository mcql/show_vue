<template>
  <div class="bigpic">
    <div style="overflow:hidden">
      <h5>{{titleall.title}}</h5>
      <p class="zl">{{titleall.type}}</p>
    </div>
    <div class="prodtn">
      <div class="goodsbtn">宝贝</div>
      <div class="detailbtn">详情</div>
    </div>
  </div>
</template>

<script>
export default {
  props:['titleall']
}
</script>

<style>
</style>
