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
          <p>银行</p>
          <input type="text" name dir="rtl" id value="浦发银行">
        </li>
        <li>
          <p>使用日期</p>
          <input type="text" name dir="rtl" id value="03/22">
        </li>
      </ul>
    </div>
    <div class="bankline"></div>
    <div class="add_bank_btn" @click="remove()">完 成</div>
  </div>
</template>

<script>
export default {
    methods:{
        remove(){
            this.$store.commit("changeAdd", false)
        }
    }
}
</script>

<style>
</style>
