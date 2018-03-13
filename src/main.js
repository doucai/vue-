// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import axios from 'axios'
import './assets/swiper/swiper-3.3.1.min.css'
import './assets/swiper/swiper-3.3.1.min'
import './assets/remcommon.js'
import './assets/iscroll.js'
import Impression from "vue-impression";
Vue.use(Impression);
Vue.config.productionTip = false;

Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
