import Vue from 'nativescript-vue';
import App from './components/App';
import VueDevtools from 'nativescript-vue-devtools';
// import RadChart from 'nativescript-ui-chart/vue';
// Vue.use(RadChart);
Vue.use(VueDevtools);
// Prints Vue logs when --env.production is *NOT* set while building
Vue.registerElement('Carousel', () => require('nativescript-carousel').Carousel);
Vue.registerElement('CarouselItem', () => require('nativescript-carousel').CarouselItem);
// Vue.registerElement('RadPieChart', () => require("nativescript-ui-chart").RadPieChart);
// Vue.registerElement('PieSeries', () => require("nativescript-ui-chart").PieSeries);
// Vue.registerElement('RadLegendView', () => require("nativescript-ui-chart").RadLegendView);
// Vue.directive('tkPieSeries', () => require("nativescript-ui-chart"));
Vue.config.silent = (TNS_ENV === 'production')
new Vue({
  render: h => h('frame', [h(App)])
}).$start();
