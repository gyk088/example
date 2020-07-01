import Onedeck from 'onedeck';
import App from '404/App.vue';
import Vue from 'vue';

/**
 * Class ExampleError404
 * module use Vue
 */
export default class NotFound404 extends Onedeck.Module {
  init() {
    this.VueApp = new Vue(App);
  }

  destroy() {
    this.VueApp.$destroy();
    document.getElementById('root').innerHTML = '';
    this.$$offAll();
  }
}
