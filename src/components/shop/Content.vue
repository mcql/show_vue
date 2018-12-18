<template>
  <div>
    <div class="daili">
      <div class="shopline"></div>
      <p>代理产品</p>
    </div>
    <div class="shoplists">
      <ul>
        <li v-for="item in lists">
            <router-link to="/Prodetail">
              <img :src=item.img alt>
              <div class="shop_ioc">{{item.type}}</div>
              <p class="shoptit">{{item.title}}</p>
              <p class="shoprealprice">代理价：￥{{item.price}}</p>
              <p class="shopoldprice">原 价：￥{{item.oldprice}}</p>
            </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        {
          img: require("../../assets/images/shoptext.png"),
          type: "微商代理",
          title: "文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题",
          price: '39.8',
          oldprice: '600'
        },{
          img: require("../../assets/images/shoptext.png"),
          type: "微商代理",
          title: "文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题",
          price: '39.8',
          oldprice: '600'
        },{
          img: require("../../assets/images/shoptext.png"),
          type: "微商代理",
          title: "文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题",
          price: '39.8',
          oldprice: '600'
        },{
          img: require("../../assets/images/shoptext.png"),
          type: "微商代理",
          title: "文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题",
          price: '39.8',
          oldprice: '600'
        },{
          img: require("../../assets/images/shoptext.png"),
          type: "微商代理",
          title: "文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题",
          price: '39.8',
          oldprice: '600'
        },{
          img: require("../../assets/images/shoptext.png"),
          type: "微商代理",
          title: "文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题",
          price: '39.8',
          oldprice: '600'
        },{
          img: require("../../assets/images/shoptext.png"),
          type: "微商代理",
          title: "文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题",
          price: '39.8',
          oldprice: '600'
        },{
          img: require("../../assets/images/shoptext.png"),
          type: "微商代理",
          title: "文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题",
          price: '39.8',
          oldprice: '600'
        },{
          img: require("../../assets/images/shoptext.png"),
          type: "微商代理",
          title: "文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题",
          price: '39.8',
          oldprice: '600'
        },{
          img: require("../../assets/images/shoptext.png"),
          type: "微商代理",
          title: "文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题文案标题",
          price: '39.8',
          oldprice: '600'
        }
      ]
    }
  }
}
</script>

<style>
</style>
