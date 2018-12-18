<template>
  <ul class="messagelists">
    <li v-for='item in lists'>
      <div>
        <div class="messagetit">
          <img src="@/assets/images/notread.png" class="readstate" alt>
          <p>
              <router-link to='/messgedetail'>
            <span>[未读]</span> {{item.title}}
            </router-link>
          </p>
        </div>
        <p class="messageconetet">{{item.content}}</p>
      </div>
      <img src="@/assets/images/todetail.png" class="todetail" alt>
    </li>
  </ul>
</template>

<script>
export default {
    props:['lists']
}
</script>

<style>
</style>
