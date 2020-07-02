import Onedeck from 'onedeck';
import App from 'InsurancePage/App.vue';
import Vue from 'vue';

/**
 * @moduel InsurancePage
 */
export default class InsurancePage extends Onedeck.Module {
  init() {
    this.VueApp = new Vue(App);
  }

  destroy() {
    this.$$offAll();
    this.VueApp.$destroy();
    document.getElementById('content').innerHTML = '';
  }
}
