 import { createApp } from './vendor/vue.esm-browser.js';

// From https://jsonplaceholder.typicode.com/comments
const VList = createApp({
  data(){
      return{
        emailsList : [
          { email : 'Eliseo@gardner.biz', isActive : false},
          { email : 'Jayne_Kuhic@sydney.com', isActive : false},
          { email : 'Nikita@garfield.biz', isActive: false},
          { email : 'Lew@alysha.tv', isActive : false},
          { email : 'Hayden@althea.biz', isActive : false},
          { email : 'Presley.Mueller@myrl.com', isActive : false},
          { email : 'Dallas@ole.me', isActive : false},
          { email : 'Mallory_Kunze@marie.org', isActive : false},
          { email : 'Meghan_Littel@rene.us', isActive : false},
          { email : 'Carmen_Keeling@caroline.name', isActive : false},
          { email : 'Veronica_Goodwin@timmothy.net', isActive : false},
          { email : 'Oswald.Vandervort@leanne.org', isActive : false},
          { email : 'Kariane@jadyn.tv', isActive : false},
          { email : 'Nathan@solon.io', isActive : false},
          { email : 'Maynard.Hodkiewicz@roberta.com', isActive : false},
          { email : 'Christine@ayana.info', isActive : false},
          { email : 'Preston_Hudson@blaise.tv', isActive : false},
          { email : 'Vincenza_Klocko@albertha.name', isActive : false},
          { email : 'Madelynn.Gorczany@darion.biz', isActive : false},
          { email : 'Mariana_Orn@preston.org', isActive : false},
          { email : 'Noemie@marques.me', isActive : false},
          { email : 'Khalil@emile.co.uk', isActive : false},
          { email : 'Sophia@arianna.co.uk', isActive : false},
          { email : 'Jeffery@juwan.us', iaActive : false},
          { email :'Isaias_Kuhic@jarrett.net', isActive : false},
        ],
        searchForm : "",
      }
  },
  computed: {
    VSearch(){
      return this.emailsList.map((item) => {
        item.isActive = item.email.toLowerCase().includes(this.searchForm.toLowerCase()) && this.searchForm !== "";
        return item
      })
    },
  },
}).mount('#app');
// Требуется создать Vue приложение
