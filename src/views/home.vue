<template>
    <div id="homePage" class="home-div">
        <!-- <div> -->
            <ul>
                <li><a href="#home">主页</a></li>
                <li><a href="#news">新闻</a></li>
                <li><a href="#contact">联系</a></li>
                <li><a href="#about">关于</a></li>
            </ul>
            <p><b>注意:</b>如果您只为 a 元素设置内边距（而不设置 ul 元素），那么链接会出现在 ul 元素之外。所以，我们为 ul 元素添加了 top 和 bottom 内边距。 </p>

        <!-- </div> -->
        <!-- <form class="form" id="b-form" method="" action=""> -->
            <!-- <h2 class="form_title title">登录</h2>
            <div class="form__icons">
                <img class="form__icon" src=" ">
                <img class="form__icon" src=" ">
                <img class="form__icon" src=" ">
            </div>
            <span class="form__span">输入用户名和密码</span>
            <input class="form__input" type="text" placeholder="用户名" >
            <input class="form__input" type="password" placeholder="密码" >
            <a class="form__link">忘记密码?</a> -->
            <button class="home-button"><router-link to="/login">登录</router-link> </button>
        <!-- </form> -->
    </div>
</template>

<script setup lang="js">
// import Sign_in from './components/sign_in.vue';
// import Sign_up from './components/sign_up.vue';
// import Switch from './components/switch.vue';

</script>

<style>
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

ul
{
	list-style-type:none;
	margin:0;
	padding:0;
	overflow:hidden;
}
li
{
	float:left;
}

</style>