<template>
  <div class="buyaddress">
    <div class="positionioc">
      <img src="@/assets/images/position.png" alt>
    </div>
    <div class="addresstxt">
      <p>
        <span class="buyname">{{address.name}}</span>
        <span>{{address.mobile}}</span>
      </p>
      <p>{{address.address}}</p>
    </div>
  </div>
</template>

<script>
export default {
    props:['address']
}
</script>

<style>
</style>
