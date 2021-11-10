import { defineComponent } from './vendor/vue.esm-browser.js';
import UiAlert from './UiAlert.js';
import UiContainer from './UiContainer.js';
import MeetupDescription from './MeetupDescription.js';
import MeetupCover from './MeetupCover.js';
import MeetupInfo from './MeetupInfo.js';
import MeetupAgenda from './MeetupAgenda.js';

export default defineComponent({
  name: 'MeetupView',

  components: {
    UiAlert,
    UiContainer,
    MeetupDescription,
    MeetupCover,
    MeetupInfo,
    MeetupAgenda,
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },

  computed: {
    AgendaText() {
      return !!(this.meetup.agenda && this.meetup.agenda.length);
    },
  },

  template: `
    <div>
      <meetup-cover :title='meetup.title' :image='meetup.image' />

      <ui-container>
        <div class="meetup">
          <div class="meetup__content">
            <h3>Описание</h3>
            <meetup-description :description='meetup.description' />

            <h3>Программа</h3>
            <ui-container>
             <meetup-agenda v-if='AgendaText' :agenda='meetup.agenda' />
            <ui-alert v-else>Программа пока пуста...</ui-alert>
            </ui-container>
          </div>
          <div class="meetup__aside">
            <meetup-info 
            :date='meetup.date' 
            :place='meetup.place' 
            :organizer='meetup.organizer' />
          </div>
        </div>
      </ui-container>
    </div>`,
});
