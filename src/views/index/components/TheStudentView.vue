<template>
    <div ref="barChart" :style="{ width: '400px', height: '300px',margin:auto }"></div>
        <!-- <div ref="pieChart" :style="{width:'500px',height:'300px'}"></div> -->
</template>

<script setup lang="ts">
import { auto } from "@popperjs/core";
import axios from "axios";
import * as echarts from 'echarts';
import { it } from "node:test";
import { onMounted, ref, reactive, onBeforeMount } from 'vue';

interface Score {
  id:number,
  name:string,
  fscore:number
}
// 存学生的数据
const stuData = ref<Score[]>([]);
// const stuData = ref([])
var item = ref([])
// 获取学生期末信息
const getScore = () =>{
    axios.get('/getScore').then((res:any) =>{
      stuData.value = JSON.parse(JSON.stringify(res.data.data))
        // console.log(stuData.value)
        // 转为对象数组
        // item = JSON.parse(JSON.stringify(stuData.value))
        // console.log(item)
    })
}
item = JSON.parse(JSON.stringify(stuData.value))
const barChart = ref<HTMLElement>();
const myChart1 = ref<any>();
// 绘制柱形图
// function initBarEcharts() {
//     myChart1.value = echarts.init(barChart.value!);
//     myChart1.value.setOption({
//         title: {
//             text: '学生期末成绩',
//             x: 'center'
//         },
//         tooltip: {
//             trigger: 'item'
//         },
//         legend: {
//             data: ['输出量'],
//             orient: 'vertical',
//             right: 60,
//             top: 20
//         },
//         xAxis: {
//           type:'category',
//           data: item.value
//         },
//         yAxis: {
//           type:'value'
//         },
//         color: ['#c38bef'],
//         series: [
//             {
//                 name: '输出量',
//                 type: 'line',
//                 data: item.value
//             },
//         ]
//     });
//     console.log(stuData.value)
// }
const initBarEcharts = () => {
  axios.get('/getScore').then((res:any) =>{
      stuData.value = JSON.parse(JSON.stringify(res.data.data))
      myChart1.value = echarts.init(barChart.value!);
    myChart1.value.setOption({
        title: {
            text: '学生期末成绩',
            x: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            data: ['学生期末成绩'],
            orient: 'vertical',
            right: 60,
            top: 20
        },
        xAxis: {
          type:'category',
          data: stuData.value.map(d => d.name)
        },
        yAxis: {
          type:'value'
        },
        color: ['#c38bef'],
        series: [
            {
                name: '学生期末成绩',
                type: 'line',
                data: stuData.value.map(d => d.fscore)
            },
        ]
    });
    console.log(stuData.value)
        // console.log(stuData.value)
        // 转为对象数组
        // item = JSON.parse(JSON.stringify(stuData.value))
        // console.log(item)
    })

}

onBeforeMount(() =>{
  getScore();
})
onMounted(() => {
    initBarEcharts();
});

</script>

<style scoped>
.view-demo{
    height: 100%;
    padding: 10px;
}
#chart {
  width: auto;
  height: 400px;
}
/* 所有卡片的配置 */
.card-border-radius {
  border-radius: var(--border-radius-large) !important;
}
.card-border-radius:hover{
  box-shadow: 0px 0px 10px #ddd;
}
</style>