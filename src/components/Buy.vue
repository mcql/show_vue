<template>
  <div class="shop">
   <v-header></v-header>
    <section>
      <div class="informationbuy">
        <p>购买成功（备货中）</p>
      </div>
      <v-content :prodetail='prodetail'></v-content>
      <v-address :address='address'></v-address>
      <div class="buybtn backtohome" @click='toindex()'>回到首页</div>
    </section>
  </div>
</template>

<script>
import vHeader from '@/components/buy/Header.vue'
import vContent from '@/components/buy/Content.vue'
import vAddress from '@/components/buy/Address.vue'
export default {
    data(){
        return{
            prodetail:{
                img:require('@/assets/images/prodpictest.png'),
                title:'风萧萧兮易水寒 壮士一去兮不复还',
                type:'饰品',
                realprice:'9.99',
                oldprice:'9999999.99',
                num:'1'
            },
            address:{
                name:'荆轲',
                mobile:'88888888888',
                address:'战国末期卫国朝歌（今河南鹤壁）人'
            }
        }
    },
    components:{vHeader,vContent,vAddress},
    methods:{
        toindex(){
            this.$router.push('/index')
        }
    }
}
</script>

<style>
</style>
