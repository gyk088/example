import Onedeck from 'onedeck';
import App from 'PagePartners/App.vue';
import Vue from 'vue';

/**
 * @module PagePartners
 */
export default class PagePartners extends Onedeck.Module {
  init() {
    this.VueApp = new Vue(App);
  }

  destroy() {
    this.VueApp.$destroy();
    document.getElementById('content').innerHTML = '';
    this.$$offAll();
  }
}
