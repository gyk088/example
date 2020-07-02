import Onedeck from 'onedeck';
import App from 'MainPagePartner/App.vue';
import Vue from 'vue';

/**
 * @moduel MainPagePartner
 */
export default class MainPagePartner extends Onedeck.Module {
  init() {
    this.VueApp = new Vue(App);
  }

  destroy() {
    this.$$offAll();
    this.VueApp.$destroy();
    document.getElementById('content').innerHTML = '';
  }
}
