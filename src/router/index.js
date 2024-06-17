import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router';
import login from '../login/login.vue';
import home from '../views/home.vue'

const routes = [
    { path: '/login', name:'login',component: login },
    { path: '/', name:'home',component: home },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
