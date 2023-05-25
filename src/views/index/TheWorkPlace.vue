<template>
  <div class="index">
    <LeftScroll class="left-navigation"></LeftScroll>
    <div class="right-navigation">
      <!-- <PageHeader></PageHeader> -->
      <div class="main-region pl-2 pt-2 pr-2">
        <div class="main-content">
          <!-- 界面中心区域 -->
          <router-view></router-view>
          <!-- <a-card class="mt-2 card-border-radius foot-container">
            20级前端人员Myy制作
          </a-card> -->
          <el-card class="foot-container">
            20级前端人员Myy制作
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LeftScroll from './components/Left-Scroll.vue';
// import PageHeader from './components/Page-Header.vue'

</script>

<style scoped>
.index {
  height: 100%;
  display: flex;
}
.left-navigation {
flex: 0 100px;
height: 100%;
}
.right-navigation {
flex: 1;
}

.main-region {
overflow-y: scroll;
height: 100%;
background-color: gainsboro;

}
.main-content {
height: 100%;
}
.foot-container {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>