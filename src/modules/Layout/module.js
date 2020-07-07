import Onedeck from 'onedeck';
import App from 'Layout/App.vue';
import Vue from 'vue';

/**
 * @moduel Layout
 */
export default class Layout extends Onedeck.Module {
  init() {
    this.VueApp = new Vue(App);
  }

  dispatcher(path) {
    console.log(path);
  }

  mounted(currentModule) {
    this.VueApp.currentPage = currentModule.name;
  }

  destroy() {
    this.$$offAll();
    this.VueApp.$destroy();
    document.getElementById('root').innerHTML = '';
  }
}
