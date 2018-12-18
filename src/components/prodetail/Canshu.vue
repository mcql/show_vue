<template>
  <div class="canshu">
    <div class="canshuline"></div>基本参数
    <div class="canshunum">
      <ul>
        <li v-for='item in parameter'>
          <p>{{item.title}}：</p>
          <p>{{item.parameter}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props:['parameter']
}
</script>

<style>
</style>
