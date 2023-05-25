<template>
  <div class="menu-demo">
    <el-menu
        default-active="2"
        class="el-menu">
        <el-menu-item index="1" key="TheStudentView" @click="useRouterSkip('TheStudentView')">
            学生信息图表
        </el-menu-item>
        <el-menu-item  index="2" key="TheStudentManagment" @click="useRouterSkip('TheStudentManagment')">
            学生信息管理
        </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
// 创建实例
const router = useRouter();
const useRouterSkip = (address: string) => {
  router.push({
    name: address,
  });
};
</script>

<style scoped>
.menu-demo{
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    color: aliceblue;
    background-color: #989fad;
}
.el-menu{
    height: 100vh !important;
    /* height: 100%; */
    overflow-y: auto;
    padding: 15px;
    background-color: rgb(153, 196, 188);
}
</style>