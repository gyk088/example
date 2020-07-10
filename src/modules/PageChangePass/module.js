import Onedeck from 'onedeck';
import App from 'PageChangePass/App.vue';
import Vue from 'vue';
import api from 'API';
import to from 'await-to-js';

/**
 * @moduel PageChangePass
 */
export default class PageChangePass extends Onedeck.Module {
  async init(path) {
    const hash = path[1];
    // eslint-disable-next-line
    const [err, res] = await to(api.auth.postCheckHash(hash));
    if (err) {
      this.$$rout({
        path: '404',
      });
    } else {
      this.VueApp = new Vue(App);
      this.VueApp.hash = hash;
    }
  }

  destroy() {
    this.$$offAll();
    if (this.VueApp) {
      this.VueApp.$destroy();
    }
    document.getElementById('root').innerHTML = '';
  }
}
