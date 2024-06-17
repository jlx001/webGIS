<template>
  <div class="switch" id="switch-cnt" ref="switch">
    <div class="switch__circle"></div>
    <div class="switch__circle switch__circle--t"></div>
    <div class="switch__container" id="switch-c1">
      <h2 class="switch__title title">Welcome Back !</h2>
      <p class="switch__description description">To keep connected with us please login with your personal info</p>
      <button class="switch__button button switch-btn" @click="change">登录</button>
    </div>
    <div class="switch__container is-hidden" id="switch-c2">
      <h2 class="switch__title title">Hello Friend !</h2>
      <p class="switch__description description">Enter your personal details and start journey with us</p>
      <button class="switch__button button switch-btn" @click="change">注册</button>
    </div>
  </div>
</template>

<script setup lang="js">
  import { ref } from 'vue'
  import useEmitter from '../../hooks/useEmitter';
 
    const sidebarOpen = ref(true)
    const emitter = useEmitter()

  const change = () => {
    const switchC1 = document.querySelector("#switch-c1");
    const switchC2 = document.querySelector("#switch-c2");
    const switchCircle = document.querySelectorAll(".switch__circle");
    const switchCtn = document.querySelector("#switch-cnt");
    switchCtn.classList.add("is-gx");
    setTimeout(function () {
      switchCtn.classList.remove("is-gx");
    }, 1500)
    switchCtn.classList.toggle("is-txr");
    switchCircle[0].classList.toggle("is-txr");
    switchCircle[1].classList.toggle("is-txr");
    switchC1.classList.toggle("is-hidden");
    switchC2.classList.toggle("is-hidden");

    sidebarOpen.value = !sidebarOpen.value
    emitter.emit('change', sidebarOpen.value)
  }

</script>

<style scoped>
@import './login.css';
/* 
    将源码中的css样式单独存放,在各组件中导入就可以。
    后续整理代码时建议，将全局样式和局部样式分开。 
    */
</style>