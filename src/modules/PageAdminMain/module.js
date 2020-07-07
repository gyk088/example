import Onedeck from 'onedeck';
import App from 'PageAdminMain/App.vue';
import Vue from 'vue';

/**
 * @moduel PageAdminMain
 */
export default class PageAdminMain extends Onedeck.Module {
  init() {
    this.VueApp = new Vue(App);
  }

  destroy() {
    this.$$offAll();
    this.VueApp.$destroy();
    document.getElementById('content').innerHTML = '';
  }
}
