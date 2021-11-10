 import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`)
  .then((response) => {
    if (response.ok) {
      return response.json();
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
        altMeetups : "",
        altResponse : "",
      }
  },
  beforeMount(){
    this.fetchMeetup()
  },
  computed: {
    currentMeetup(){
      return this.altMeetups ? this.altMeetups.title : ""
    }
  },
  watch: {
    picked(value){
      this.getTitle()
      this.altMeetups = this.altResponse[value-1]
    }
  },
   methods: {
     getTitle(){
       fetchMeetupById(this.picked).then((meetups) => 
       {
         this.meetups = meetups;
        });
        return this.meetups
      },
    fetchMeetup(){
      fetch(`${API_URL}/meetups`)
      .then((response) => response.json())
      .then((response) => {
        this.altResponse = response})
      },
    },
}).mount('#app');
// Требуется создать Vue приложение
