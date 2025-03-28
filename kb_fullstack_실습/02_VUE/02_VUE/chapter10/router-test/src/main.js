import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router); //라우터를 앱에 연결

app.mount('#app');
