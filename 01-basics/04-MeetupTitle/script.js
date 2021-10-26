 import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
      console.log(response.json());
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}
const VMeetupCaller = createApp({
  data(){
      return{
        meetups : "",
        picked : "",
      }
  },
 watch: {
picked(value){
  this.getTitle()
}
 },
 methods: {
   getTitle(){
     fetchMeetupById(this.picked).then((meetups) => 
     {
       this.meetups = meetups;
     });
     return this.meetups
   }
 },
}).mount('#app');
// Требуется создать Vue приложение
