import { createApp } from 'vue'
import App from './app/index.vue'
import './styles';
import router from './router';

createApp(App).use(router).mount('#app')
