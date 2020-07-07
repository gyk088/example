import Onedeck from 'onedeck';
import App from 'PageChangePass/App.vue';
import Vue from 'vue';

/**
 * @moduel PageChangePass
 */
export default class PageChangePass extends Onedeck.Module {
  init() {
    this.VueApp = new Vue(App);
  }

  destroy() {
    this.$$offAll();
    this.VueApp.$destroy();
    document.getElementById('root').innerHTML = '';
  }
}
