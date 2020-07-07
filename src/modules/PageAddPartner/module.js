import Onedeck from 'onedeck';
import App from 'PageAddPartner/App.vue';
import Vue from 'vue';

/**
 * @module PageAddPartner
 */
export default class PageAddPartner extends Onedeck.Module {
  init() {
    this.VueApp = new Vue(App);
  }

  destroy() {
    this.VueApp.$destroy();
    document.getElementById('content').innerHTML = '';
    this.$$offAll();
  }
}
