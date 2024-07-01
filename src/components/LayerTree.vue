<template>
  <div class="treeDiv">
    <div data-v-6ca2f2a6="" class="mars-dialog manage-basemap-pannel fadein-left"
      style="width: 380px; z-index: 900; left: 50px; top: 50px;">
      <div data-v-6ca2f2a6="" class="mars-dialog__header" style="cursor: move;"><!----><span data-v-6ca2f2a6=""
          class="title">底图</span><span data-v-3d495c36="" data-v-6ca2f2a6=""
          class="mars-icon close-btn"><!--?xml version="1.0" encoding="UTF-8"?--><svg width="18" height="18"
            viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 8L40 40" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
            </path>
            <path d="M8 40L40 8" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
            </path>
          </svg></span></div>
      <div data-v-6ca2f2a6="" class="mars-dialog__content"
        style="height: calc(100% - 80px); border-radius: 0px !important; padding-bottom: 0px;">
        <ul data-v-09b4be11="" class="basemap">
          <li data-v-09b4be11="" class="basemap-card active-card">
            <div data-v-09b4be11=""><img data-v-09b4be11="" class="icon" :src="getAssetsFile('img/google_img.png')"></div>
            <div data-v-09b4be11="">谷歌影像</div>
          </li>
          <!-- <li data-v-09b4be11="" class="basemap-card">
            <div data-v-09b4be11=""><img data-v-09b4be11="" class="icon" src="/img/basemaps/tdt_img.png"></div>
            <div data-v-09b4be11="">天地图影像</div>
          </li>
          <li data-v-09b4be11="" class="basemap-card">
            <div data-v-09b4be11=""><img data-v-09b4be11="" class="icon" src="/img/basemaps/tdt_vec.png"></div>
            <div data-v-09b4be11="">天地图电子</div>
          </li>
          <li data-v-09b4be11="" class="basemap-card">
            <div data-v-09b4be11=""><img data-v-09b4be11="" class="icon" src="/img/basemaps/gaode_img.png"></div>
            <div data-v-09b4be11="">高德影像</div>
          </li>
          <li data-v-09b4be11="" class="basemap-card">
            <div data-v-09b4be11=""><img data-v-09b4be11="" class="icon" src="/img/basemaps/gaode_vec.png"></div>
            <div data-v-09b4be11="">高德电子</div>
          </li>
          <li data-v-09b4be11="" class="basemap-card">
            <div data-v-09b4be11=""><img data-v-09b4be11="" class="icon" src="/img/basemaps/bd-img.png"></div>
            <div data-v-09b4be11="">百度影像</div>
          </li>
          <li data-v-09b4be11="" class="basemap-card">
            <div data-v-09b4be11=""><img data-v-09b4be11="" class="icon" src="/img/basemaps/bd-vec.png"></div>
            <div data-v-09b4be11="">百度电子</div>
          </li>
          <li data-v-09b4be11="" class="basemap-card">
            <div data-v-09b4be11=""><img data-v-09b4be11="" class="icon" src="/img/basemaps/tencent_img.png"></div>
            <div data-v-09b4be11="">腾讯影像</div>
          </li>
          <li data-v-09b4be11="" class="basemap-card">
            <div data-v-09b4be11=""><img data-v-09b4be11="" class="icon" src="/img/basemaps/tencent_vec.png"></div>
            <div data-v-09b4be11="">腾讯电子</div>
          </li>
          <li data-v-09b4be11="" class="basemap-card">
            <div data-v-09b4be11=""><img data-v-09b4be11="" class="icon" src="/img/basemaps/esriWorldImagery.png"></div>
            <div data-v-09b4be11="">ArcGIS影像</div>
          </li>
          <li data-v-09b4be11="" class="basemap-card">
            <div data-v-09b4be11=""><img data-v-09b4be11="" class="icon" src="/img/basemaps/bingAerial.png"></div>
            <div data-v-09b4be11="">微软影像</div>
          </li>
          <li data-v-09b4be11="" class="basemap-card">
            <div data-v-09b4be11=""><img data-v-09b4be11="" class="icon" src="/img/basemaps/blackMarble.png"></div>
            <div data-v-09b4be11="">暗色底图</div>
          </li>
          <li data-v-09b4be11="" class="basemap-card">
            <div data-v-09b4be11=""><img data-v-09b4be11="" class="icon" src="/img/basemaps/bd-c-midnight.png"></div>
            <div data-v-09b4be11="">蓝色底图</div>
          </li>
          <li data-v-09b4be11="" class="basemap-card">
            <div data-v-09b4be11=""><img data-v-09b4be11="" class="icon" src="/img/basemaps/bd-c-dark.png"></div>
            <div data-v-09b4be11="">黑色底图</div>
          </li>
          <li data-v-09b4be11="" class="basemap-card">
            <div data-v-09b4be11=""><img data-v-09b4be11="" class="icon" src="/img/basemaps/google_img.png"></div>
            <div data-v-09b4be11="">离线影像地图 (供参考)</div>
          </li>
          <li data-v-09b4be11="" class="basemap-card">
            <div data-v-09b4be11=""><img data-v-09b4be11="" class="icon" src="/img/basemaps/offline.png"></div>
            <div data-v-09b4be11="">单张图片 (本地离线)</div>
          </li>
          <li data-v-09b4be11="" class="basemap-card">
            <div data-v-09b4be11=""><img data-v-09b4be11="" class="icon" src="/img/basemaps/null.png"></div>
            <div data-v-09b4be11="">无底图</div>
          </li> -->
        </ul>
      </div><!---->
      <div data-v-6ca2f2a6="" class="mars-dialog__footer"><button data-v-a3bdf791="" data-v-09b4be11=""
          class="mars-switch ant-switch-checked ant-switch css-19iuou" type="button" role="switch" aria-checked="true">
          <div class="ant-switch-handle"><!----></div><span class="ant-switch-inner"><span
              class="ant-switch-inner-checked"><!----></span><span
              class="ant-switch-inner-unchecked"><!----></span></span>
        </button><span data-v-09b4be11="" class="f-ml">显示地形</span></div>
      <div data-v-6ca2f2a6="" class="mars-dialog__handle handle-l"></div>
      <div data-v-6ca2f2a6="" class="mars-dialog__handle handle-r"></div>
      <div data-v-6ca2f2a6="" class="mars-dialog__handle handle-t"></div>
      <div data-v-6ca2f2a6="" class="mars-dialog__handle handle-b"></div>
      <div data-v-6ca2f2a6="" class="mars-dialog__handle handle-lb"></div>
      <div data-v-6ca2f2a6="" class="mars-dialog__handle handle-rb"></div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { getAssetsFile } from '@/utils/images';
</script>

<style scoped>
@import './style/layerStyle.css';
</style>
