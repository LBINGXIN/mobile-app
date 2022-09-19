import Vue from 'vue';
import App from './App';
import uView from 'uview-ui';
import MobileCommon from '@euler/mobile-common';
import eulerConfig from './euler.config';
import store from './store';

Vue.config.productionTip = false;

App.mpType = 'app';

Vue.use(uView);
Vue.use(MobileCommon, { store, eulerConfig });

new Vue({
  ...App,
}).$mount();
