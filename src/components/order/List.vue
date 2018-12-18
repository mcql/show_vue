<template>
  <section class="list">
    <div class="buygoods" v-for="item in lists">
      <div class="buyproductpic">
        <img :src="item.img" alt>
      </div>
      <div class="buydetail">
        <router-link to="/orderdetail">
          <h5 class="buytitle">{{item.title}}</h5>
        </router-link>
        <p class="buytype">类型：{{item.type}}</p>
        <p class="buyprice">
          <span>￥{{item.realprice}}</span>
          <span>￥{{item.oldprice}}</span>
          <span>×{{item.num}}</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        {
          img: "",
          title: "购买的产品名称详细，最多显示二十个字符…",
          type: "饰品",
          oldprice: "199",
          realprice: "39.8",
          num: "1"
        }
      ]
    };
  },
  created() {
    for (let i = 0; i < 10; i++) {
      this.lists.push(this.lists[0]);
    }
  }
};
</script>

<style scoped>
.list {
  height: 100%;
  overflow-y: scroll;
}
.buygoods {
  margin-top: 0.266667rem;
}
</style>
