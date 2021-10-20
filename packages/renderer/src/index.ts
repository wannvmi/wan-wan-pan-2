import 'modern-normalize/modern-normalize.css';
// 通用字体
import 'vfonts/Lato.css';
// 等宽字体
import 'vfonts/FiraCode.css';

import { createApp } from 'vue';
import App from '/@/App.vue';
import router from '/@/router';

createApp(App).use(router).mount('#app');
