<script setup lang="ts">
</script>

<template>
    <div id="app">
      <router-view></router-view>
    </div>
</template>
<style>
/* 所有卡片的配置 */
.card-border-radius {
  border-radius: var(--border-radius-large) !important;
  padding: 10px;
  border-radius: 10px;
}
.card-border-radius:hover{
  box-shadow: 0px 0px 10px #ddd;
}
.body{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#app{
  width: 100%;
  height: 100%;
  padding: 0;
}
</style>