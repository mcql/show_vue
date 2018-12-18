<template>
  <div class="mine_menu">
    <ul>
      <li>
        <img src="@/assets/images/mine_dingdan.png" alt>
        <router-link to='/order'>
          <p>订单信息</p>
        </router-link>
      </li>
      <li>
        <img src="@/assets/images/mine_yinhangka.png" alt>
        <router-link to='/card'>
          <p>银行卡</p>
        </router-link>
      </li>
      <li>
        <img src="@/assets/images/mine_zhangdan.png" alt>
        <router-link to='/zhangdan'>
          <p>账单记录</p>
        </router-link>
      </li>
      <li>
        <img src="@/assets/images/mine_info.png" alt>
        <router-link to='/message'>
          <p>消息通知</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
