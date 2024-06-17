<!-- sign_in -->
<template>
    <div class="container b-container" id="b-container" ref="sign_in">
        <form class="form" id="b-form" method="" action="">
            <h2 class="form_title title">登录</h2>
            <div class="form__icons">
                <img class="form__icon" src=" ">
                <img class="form__icon" src=" ">
                <img class="form__icon" src=" ">
            </div>
            <span class="form__span">输入用户名和密码</span>
            <input class="form__input" type="text" placeholder="用户名" >
            <input class="form__input" type="password" placeholder="密码" >
            <a class="form__link">忘记密码?</a>
            <button class="form__button button submit">登录</button>
        </form>
    </div>
</template>

<script setup lang="js">
import { ref, onMounted } from 'vue';
import useEmitter from '../../hooks/useEmitter';

// const isOpen = ref(true);
const emitter = useEmitter();
onMounted(() => {
    emitter.on('change', isOpen => {
        // Watcher should be defined outside of the event listener
        // and should be a separate option in the component
        let aContainer = document.querySelector("#a-container");
        aContainer.classList.toggle("is-txl");
        // aContainer.classList.toggle("is-z200");

        // For bContainer styles, uncomment and adjust as needed
        // let bContainer = document.querySelector("#b-container");
        // bContainer.classList.toggle("is-txl");
        // bContainer.classList.toggle("is-z200");
    });
});
</script>

<style scoped >
    @import './login.css';
/* 将源码中的css样式单独存放,在各组件中导入就可以。*/
</style>