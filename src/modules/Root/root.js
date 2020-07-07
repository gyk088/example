import Onedeck from 'onedeck';
import Notification from 'Notification/module';
import Loader from 'Loader/module';
import { LocalStorage } from 'quasar';

/**
 * @module Root
 */
export default class Root extends Onedeck.RootModule {
  init() {
    this.Notification = new Notification();
    this.Loader = new Loader();

    this.eventHandler();
  }

  eventHandler() {
    this.$$on('notify', (data) => {
      this.Notification.notify(data);
    });

    this.$$on('loadingShow', () => {
      this.Loader.show();
    });

    this.$$on('loadingHide', () => {
      this.Loader.hide();
    });
  }

  dispatcher(path) {
    this.Loader.show();
    this.checkAuth(path);
  }

  mounted() {
    setTimeout(() => this.Loader.hide(), 600);
  }

  /**
   * Проверка авторизации
  */
  checkAuth(path) {
    if (
      !LocalStorage.getItem('authentication_token')
      && path[0] !== 'changepass'
    ) {
      this.$$rout({
        path: '/auth',
      });
    }
  }
}
