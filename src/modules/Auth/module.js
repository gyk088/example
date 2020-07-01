import Onedeck from 'onedeck';
import App from 'Auth/App.vue';
import Vue from 'vue';

/**
 * @moduel Auth
 */
export default class Auth extends Onedeck.Module {
  init() {
    this.VueApp = new Vue(App);
  }

  destroy() {
    this.$$offAll();
    this.VueApp.$destroy();
    document.getElementById('root').innerHTML = '';
  }
}
