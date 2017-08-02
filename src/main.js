// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import jQuery from 'jquery';
import axios from 'axios'
import Vue from 'vue';
import Vuex from 'vuex'
import App from './App';
import router from './router';
import * as config from './config'

Vue.use(Vuex);

window.jQuery = jQuery;
window.$ = jQuery;

axios.defaults.baseURL = config.getServerUrl();
Vue.prototype.$http = axios;

require('jquery');
require('what-input');
require('../node_modules/foundation-sites/dist/js/foundation');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
