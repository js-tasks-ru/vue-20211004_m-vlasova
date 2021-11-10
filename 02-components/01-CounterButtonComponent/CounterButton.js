import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',
  props: {
    count: {
      type : Number,
      default: 0,
    },
  },
  emits: ['update'],
  // Компонент должен иметь входной параметр
  methods: {
    incCount() {
      this.$emit('update:count', this.count + 1);
    },
  },
  // Шаблон лучше держать максимально простым, а логику выносить в методы

  // Шаблон потребуется отредактировать
  template: `
      <button 
      @click="incCount"
      type="button">
      {{ count }}
      </button>
    `,
});
 