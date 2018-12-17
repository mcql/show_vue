<template>
<div class="shop">
    <v-header></v-header>
    <section>
        <v-banner></v-banner>
        <v-content></v-content>
    </section>
    <v-footer></v-footer>

</div>
</template>

<script>
import vHeader from '@/components/shop/Header.vue'
import vFooter from '@/components/shop/Footer.vue'
import vBanner from '@/components/shop/Banner.vue'
import vContent from '@/components/shop/Content.vue'
export default {
    components:{
        vHeader,vFooter,vBanner,vContent
    }
}
</script>

<style>

</style>
