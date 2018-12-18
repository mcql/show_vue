<template>
    <div class="mine">
        <v-header></v-header>
        <section>
            <v-banner></v-banner>
            <v-second></v-second>
            <div class="renwuline"></div>
            <v-third></v-third>
        </section>
        <v-footer></v-footer>
    </div>
</template>

<script>
import vHeader from '@/components/doing/Header.vue'
import vBanner from '@/components/doing/Banner.vue'
import vSecond from '@/components/doing/Second.vue'
import vThird from '@/components/doing/Third.vue'
import vFooter from '@/components/doing/Footer.vue'
export default {
    components:{
        vHeader,vBanner,vSecond,vThird,vFooter
    }
}
</script>

<style>

</style>
