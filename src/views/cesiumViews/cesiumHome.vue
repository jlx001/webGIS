<template>
  <div class="viewer-container" id="viewerContainer"></div>
  <div class="search-container">
    <form>
      <input type="text" v-model="searchTerm" @input="search" placeholder="请输入您要搜索的内容...">
      <button v-if="searchTerm" @click="clearSearch" class="clear-button">✖</button>
      <button type="submit"></button>
    </form>
    <div class="result-container">


      <ul v-if="results.length" class="results-list">
        <div class="result-span">
          <div class="result-span-left"></div>
          <div class="result-span-right"></div>
        </div>
        <li v-for="result in results" :key="result.id" class="result-item">
          <span @click="handleClick(result)">{{ result.name }}</span>
          <button @click.stop="locate(result)" class="locate-button">📍</button>
        </li>
      </ul>
    </div>
  </div>
  <div class="tools-container"></div>
</template>

<script setup lang="ts">
// import * as Cesium from "cesium";
import { ref, computed } from 'vue';
import * as Cesium from 'cesium'
import "cesium/Build/Cesium/Widgets/widgets.css";
import { onMounted } from "vue";

interface Result {
  id: number;
  name: string;
}

const searchTerm = ref<string>('');
const results = ref<Result[]>([]);

const mockData: Result[] = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Cherry' },
  { id: 4, name: 'Date' },
  { id: 5, name: 'Elderberry' }
];

const search = () => {
  if (searchTerm.value) {
    results.value = mockData.filter(item =>
      item.name.toLowerCase().includes(searchTerm.value.toLowerCase())
    );
  } else {
    results.value = [];
  }
};

const clearSearch = () => {
  searchTerm.value = '';
  results.value = [];
};

const handleClick = (result: Result) => {
  alert(`You clicked on ${result.name}`);
};
const locate = (result: Result) => {
  alert(`Locating ${result.name}`);
};

onMounted(() => {
  initMap()
});

function initMap() {
  Cesium.Ion.defaultAccessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5Njc1OTQyOS02YWFhLTQzY2YtODMwYi01M2NlZWE1MDJlYWUiLCJpZCI6MjE3MDQ4LCJpYXQiOjE3MTYzODM3NTZ9.T4juEUroRRXDeIOzjjFAiIqQEdu9C1zokyDG8-eB8-o'
  const viewer = new Cesium.Viewer('viewerContainer', {
    animation: false,//动画小部件
    baseLayerPicker: true,//地图图层组件
    fullscreenButton: true,//全屏组件
    geocoder: false,//地理编码搜索组件
    homeButton: true,//首页组件
    infoBox: true,//信息框
    sceneModePicker: true,//场景模式
    selectionIndicator: false,//选取指示器组件
    timeline: false,//时间轴
    navigationHelpButton: false,//帮助按钮
    navigationInstructionsInitiallyVisible: false,
  })
  // 隐藏logo信息
  viewer._cesiumWidget._creditContainer.style.display = "none"; //去除版权样式
  //相机
  const Cartesian = Cesium.Cartesian3.fromDegrees(108, 35.5, 1500000)
  viewer.camera.setView({
    destination: Cartesian,//初始位置
    // orientation: {//初始方向
    // heading: Cesium.Math.toRadians(-50), //初始方向
    // pitch: Cesium.Math.toRadians(-50), //初始方向
    // roll: Cesium.Math.toRadians(0),
    // }
  })

}



</script>

<style scoped>
@import './style.css';
</style>
