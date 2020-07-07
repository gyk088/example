import Onedeck from 'onedeck';
import App from 'PageInsurance/App.vue';
import Vue from 'vue';

/**
 * @moduel PageInsurance
 */
export default class PageInsurance extends Onedeck.Module {
  init() {
    this.VueApp = new Vue(App);
  }

  destroy() {
    this.$$offAll();
    this.VueApp.$destroy();
    document.getElementById('content').innerHTML = '';
  }
}
