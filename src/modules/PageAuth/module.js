import Onedeck from 'onedeck';
import App from 'PageAuth/App.vue';
import Vue from 'vue';

/**
 * @moduel PageAuth
 */
export default class PageAuth extends Onedeck.Module {
  init() {
    this.VueApp = new Vue(App);
  }

  destroy() {
    this.$$offAll();
    this.VueApp.$destroy();
    document.getElementById('root').innerHTML = '';
  }
}
