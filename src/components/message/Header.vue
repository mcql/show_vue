<template>
    <header class="header lineflex">
        <p @click="back()"><img src="@/assets/images/back.png" alt="">返回</p>
        <p><img src="@/assets/images/more.png" alt=""></p>
    </header>
</template>

<script>
export default {
    methods:{
        back(){
            this.$router.go(-1)
        }
    }
}
</script>

<style>

</style>
