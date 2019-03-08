import { storiesOf }  from '@storybook/vue';
import { action }     from '@storybook/addon-actions';
import { withInfo }   from 'storybook-addon-vue-info';
import { withKnobs, text, color } from '@storybook/addon-knobs';

import Vue from 'vue';
import Vuex from 'vuex';
import MyButton from './Button.vue';
Vue.use(Vuex);
Vue.component('my-button', MyButton);

storiesOf('MyButton', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('story as a template', () => '<my-button></my-button>')
  .add('story as a component', () => ({
    components: { MyButton },
    template: '<my-button @click.native="action">rounded</my-button>',
    methods: { action: action('button-clicked') },
  }),{
      info: {
        summary: 'Summary for MyComponent'
      }
    }
  );
