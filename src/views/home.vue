<template>
    <div id="homePage" class="home-div">
        <div id="ui" class="home-ui">
            <ul>
                <li><a href="#/views/cesiumView">Cesium</a></li>
                <li><a href="#/views/mapboxView">新闻</a></li>
                <li><a href="#contact">联系</a></li>
                <li><a href="#about">关于</a></li>
            </ul>
            <!-- <p><b>注意:</b>如果您只为 a 元素设置内边距（而不设置 ul 元素），那么链接会出现在 ul 元素之外。所以，我们为 ul 元素添加了 top 和 bottom 内边距。 </p> -->

        </div>
        <div id="mainView" class="home-view">
            <div id="img-box" class="img-box">
                <el-card class="img-card" style="max-width: 300px" :body-style="{ padding: 0 }">
                    <router-link to="/views/cesiumView">
                        <img :src="getAssetsFile('cesium.png')" style="width: 100%" /></router-link>
                    <div class="img-card-text">Cesium</div>
                </el-card>
                <el-card class="img-card" style="max-width: 480px" :body-style="{ padding: 0 }">
                    <!-- <template #header>Cesium</template> --><router-link to="/views/cesiumView">
                        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                            style="width: 100%" /></router-link>

                </el-card>
                <el-card class="img-card" style="max-width: 480px" :body-style="{ padding: 0 }">
                    <!-- <template #header>Cesium</template> --><router-link to="/views/cesiumView">
                        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                            style="width: 100%" /></router-link>

                </el-card>

            </div>
            <div id="img-box" class="img-box">
                <el-card class="img-card" style="max-width: 480px" :body-style="{ padding: 0 }">
                    <!-- <template #header>Cesium</template> --><router-link to="/views/cesiumView">
                        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                            style="width: 100%" /></router-link>

                </el-card>
                <el-card class="img-card" style="max-width: 480px" :body-style="{ padding: 0 }">
                    <!-- <template #header>Cesium</template> --><router-link to="/views/cesiumView">
                        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                            style="width: 100%" /></router-link>

                </el-card>
                <el-card class="img-card" style="max-width: 480px" :body-style="{ padding: 0 }">
                    <!-- <template #header>Cesium</template> --><router-link to="/views/cesiumView">
                        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                            style="width: 100%" /></router-link>
                </el-card>
            </div>
        </div>
    </div>
    <!-- </form> -->

</template>

<script setup lang="ts">
import { getAssetsFile } from '@/utils/images';

// import Sign_in from './components/sign_in.vue';
// import Sign_up from './components/sign_up.vue';
// import Switch from './components/switch.vue';

</script>

<style scoped>
/* @import './views.css'; */
.home-button {
    width: 180px;
    height: 50px;
    border-radius: 25px;
    margin-top: 50px;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1.15px;
    background-color: #4b70e2;
    color: #f9f9f9;
    box-shadow: 8px 8px 16px #d1d9e6, -8px -8px 16px #f9f9f9;
    border: none;
    outline: none;
}

.home-ui {
    height: 50px;
    font-weight: 700;
    font-size: 14px;
    background-color: #85929b;
    color: #0b6fa9;
}

.home-div {
    width: 100%;
    height: 100vh;
    /* display: flex; */
    justify-content: center;
    align-items: center;
    font-family: "Montserrat", sans-serif;
    font-size: 12px;
    background-color: #ecf0f3;
    color: #a0a5a8;
}

.router-link-active {
    text-decoration: none;
    /* 移除下划线 */
    color: yellow;
    /* 点击后的颜色 */
}

a {
    text-decoration: none;
    /* 移除下划线 */
    color: white;
    /* 默认的字体颜色 */
}

li {
    float: left;
    list-style-type: none
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;

    /* text-decoration: none; */
}

li a:hover {
    background-color: #111;
}

.home-view {
    display: grid;
    /* width: 100%; */
    justify-content: center;
    /* margin: 20px 10px; */
    align-items: center;
    margin-top: 60px;

}

.img-box {
    display: flex;
    justify-content: center;
    align-items: center;
    /* letter-spacing: 5px; 
    margin: 10px 10px;
     width: 100%; */
    height: 36vh;
}

.img-card {
    margin: 5px 10px;

}

.el-card__body {
    background-color: #cfdee3;
    padding: 0;
}

.img-card-text {
    height: 4vh;
    display: flex;
    justify-content:center;
    font-weight: 800;
    font-size: 20px;
    font-family: "Montserrat", sans-serif;
}
</style>