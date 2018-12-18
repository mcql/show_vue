<template>
  <div class="productimg">
    <img v-for="item in pic" :src=pic alt>
  </div>
</template>

<script>
export default {
  props:['pic']
}
</script>

<style>
</style>
