// import { createApp } from './vendor/vue.esm-browser.js';
import { createApp } from './vendor/vue.esm-browser.js';
// Создайте Vue приложение
const VCounter = {
    data() {
      return {
        counter: 0
      }
    }
  }
const CounterApp = createApp(VCounter);
const vm = CounterApp.mount('#app');