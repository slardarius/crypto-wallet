import Vue from 'nativescript-vue';
import App from './components/App';
import VueDevtools from 'nativescript-vue-devtools'

Vue.use(VueDevtools);
// Prints Vue logs when --env.production is *NOT* set while building
Vue.registerElement('Carousel', () => require('nativescript-carousel').Carousel);
Vue.registerElement('CarouselItem', () => require('nativescript-carousel').CarouselItem);

Vue.config.silent = (TNS_ENV === 'production')
new Vue({
  render: h => h('frame', [h(App)])
}).$start();
