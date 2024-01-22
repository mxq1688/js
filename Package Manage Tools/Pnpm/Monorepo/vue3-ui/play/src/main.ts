import { createApp } from 'vue';
import App from './app.vue';
import vue3Ui from '@vue3-ui/components';
const app = createApp(App);
app.use(vue3Ui);

app.mount('#app');
