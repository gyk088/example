import Onedeck from 'onedeck';
import App from 'MainPage/App.vue';
import Vue from 'vue';

/**
 * @moduel MainPage
 */
export default class MainPage extends Onedeck.Module {
  init() {
    this.VueApp = new Vue(App);
  }

  destroy() {
    this.$$offAll();
    this.VueApp.$destroy();
    document.getElementById('content').innerHTML = '';
  }
}
