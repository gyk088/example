import Onedeck from 'onedeck';
import App from 'PagePartnerMain/App.vue';
import Vue from 'vue';

/**
 * @moduel PagePartnerMain
 */
export default class PagePartnerMain extends Onedeck.Module {
  init() {
    this.VueApp = new Vue(App);
  }

  destroy() {
    this.$$offAll();
    this.VueApp.$destroy();
    document.getElementById('content').innerHTML = '';
  }
}
