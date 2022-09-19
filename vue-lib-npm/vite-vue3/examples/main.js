import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import MukUI from "./components/muk-ui"; //导入

const app = createApp(App);
app.use(MukUI); //注册
app.mount("#app");


