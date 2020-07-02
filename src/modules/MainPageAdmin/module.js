import Onedeck from 'onedeck';
import App from 'MainPageAdmin/App.vue';
import Vue from 'vue';

/**
 * @moduel MainPageAdmin
 */
export default class MainPageAdmin extends Onedeck.Module {
  init() {
    this.VueApp = new Vue(App);
  }

  destroy() {
    this.$$offAll();
    this.VueApp.$destroy();
    document.getElementById('content').innerHTML = '';
  }
}
