import Onedeck from 'onedeck';
import App from 'Layout/App.vue';
import Vue from 'vue';

/**
 * @moduel Layout
 */
export default class Layout extends Onedeck.Module {
  init() {
    this.VueApp = new Vue(App);
    this.eventHandler();
  }

  eventHandler() {
    // Заглушка для события onShowMenu
    // для того чтобы другие модули могли слушать это событие
    this.$$on('onShowMenu', () => { });
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
