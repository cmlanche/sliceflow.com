// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import jQuery from 'jquery';
import axios from 'axios'
import Vue from 'vue';
import App from './App';
import router from './router';

window.jQuery = jQuery;
window.$ = jQuery;

Vue.prototype.$http = axios;

require('motion-ui');
require('what-input');
require('foundation-sites');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
