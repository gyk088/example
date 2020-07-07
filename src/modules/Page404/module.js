import Onedeck from 'onedeck';
import App from 'Page404/App.vue';
import Vue from 'vue';

/**
 * Class Page404
 * module use Vue
 */
export default class Page404 extends Onedeck.Module {
  init() {
    this.VueApp = new Vue(App);
  }

  destroy() {
    this.VueApp.$destroy();
    document.getElementById('root').innerHTML = '';
    this.$$offAll();
  }
}
