<template>
  <div class="viewer-container" id="viewerContainer"></div>
  <div class="search-container">
    <form>
      <input type="text" placeholder="请输入您要搜索的内容...">
      <button type="submit"></button>
    </form>
  </div>
  <div class="tools-container"></div>
</template>

<script setup lang="ts">
// import * as Cesium from "cesium";

import * as Cesium from 'cesium'
import "cesium/Build/Cesium/Widgets/widgets.css";
import { onMounted } from "vue";

onMounted(() => {
  initMap()
});

function initMap() {
  Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5Njc1OTQyOS02YWFhLTQzY2YtODMwYi01M2NlZWE1MDJlYWUiLCJpZCI6MjE3MDQ4LCJpYXQiOjE3MTYzODM3NTZ9.T4juEUroRRXDeIOzjjFAiIqQEdu9C1zokyDG8-eB8-o'
  const viewer = new Cesium.Viewer('viewerContainer', {
    animation: false,//动画小部件
    baseLayerPicker: true,//地图图层组件
    fullscreenButton: true,//全屏组件
    geocoder: false,//地理编码搜索组件
    homeButton: false,//首页组件
    infoBox: false,//信息框
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
    //   heading: Cesium.Math.toRadians(-50), //初始方向
    //   pitch: Cesium.Math.toRadians(-50), //初始方向
    //   roll: Cesium.Math.toRadians(0),
    // }
  })

}



</script>

<style scoped>
@import './style.css';




</style>
