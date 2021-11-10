 import { createApp } from './vendor/vue.esm-browser.js';
const VCalculator = createApp({
    data(){
        return{
            value_1: 0, 
            value_2: 0,
            picked: '',
        }
    },
    computed: {
        VResult() {
           switch(this.picked){
                case "sum" :
                 return this.value_1 + this.value_2
                case "subtract" :
                  return this.value_1 - this.value_2
                case "divide" :
                  return this.value_1 /  this.value_2
                case "multiply" :
                   return this.value_1 * this.value_2
                default :
                   return ""
           }
        },
    }
}).mount('#app');
// Создайте Vue приложение
