<!-- sign_up -->
<template>
    <div class="container a-container" id="a-container" ref="sign_up">
        <form class="form" id="a-form" method="" action="">
            <h2 class="form_title title">注册</h2>
            <div class="form__icons">
                <img class="form__icon" src=" ">
                <img class="form__icon" src=" ">
                <img class="form__icon" src=" ">
            </div>
            <span class="form__span">or use email for registration</span>
            <input class="form__input" type="text" placeholder="Name">
            <input class="form__input" type="text" placeholder="Email">
            <input class="form__input" type="password" placeholder="Password">
            <button class="form__button button submit">注册</button>
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
        // let aContainer = document.querySelector("#a-container");
        // aContainer.classList.toggle("is-txl");

        // For bContainer styles, uncomment and adjust as needed
        let bContainer = document.querySelector("#b-container");
        bContainer.classList.toggle("is-txl");
        bContainer.classList.toggle("is-z200");
    });
});

</script>




<style scoped>
@import './login.css';
/* 将源码中的css样式单独存放,在各组件中导入就可以。*/
</style>