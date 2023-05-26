// main.js
import './style.css'
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";


const app = createApp(App);

app.mount("#app");
app.use(router);
