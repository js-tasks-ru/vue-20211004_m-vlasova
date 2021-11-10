import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupCover',

  props: {
    title: {
      type: String,
      required: true,
    },
    
    image: {
      type: String,
      default: null,
    },
  },
  computed: {
    imgStyle() {
      return this.image ? `--bg-url: url('${this.image}')` : null;
    },
  },
  template: `
    <div class="meetup-cover" :style="imgStyle">
        <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>`,
});
