import { createApp } from "vue";

import "bootstrap/scss/bootstrap.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import './assets/css/all.css';

import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");
