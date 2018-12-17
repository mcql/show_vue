<template>
	<header @click="showLeft">
		<img src="@/assets/images/left_nav.png" alt="">
	</header>
</template>

<script>
export default {
	methods:{
		showLeft(){
			this.$store.commit('changeLeftShow', true)
		}
	}
}
</script>

<style>

</style>
