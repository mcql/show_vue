<template>
  <div>
    <div class="cardinput">
      <h5>账户信息</h5>
      <ul class="cardcontent">
        <li>
          <p>持卡人</p>
          <input type="text" name dir="rtl" id value="小包子">
        </li>
        <li>
          <p>卡号</p>
          <input type="text" name dir="rtl" id value="9876765454324321">
        </li>
        <li>
          <p>使用日期</p>
          <input type="text" name dir="rtl" id value="03/22">
        </li>
      </ul>
    </div>
    <div class="bankline"></div>
    <div class="addcard" @click="add">
      <img src="@/assets/images/add_card.png" alt>添加银行卡
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    add() {
      this.$store.commit("changeAdd", true)
    }
  }
}
</script>

<style>
</style>
