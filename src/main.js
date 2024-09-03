import { createApp, ref } from 'vue'
import router from './Router.js'
import App from './App.vue'
import './assets/styles.css'

const app = createApp(App);

app.use(router);
app.config.globalProperties.$contadorGlobal = ref("a");
app.mount('#app');