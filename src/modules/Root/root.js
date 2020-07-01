import Onedeck from 'onedeck';
import Notification from 'Notification/module';
import Loader from 'Loader/module';

/**
 * @module Root
 */
export default class Root extends Onedeck.RootModule {
  init () {
    this.Notification = new Notification();
    this.Loader = new Loader();

    this.eventHandler();
  }

  eventHandler () {
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

  dispatcher () {
    this.Loader.show();
  }

  mounted () {
    setTimeout(() => this.Loader.hide(), 600);
  }
}
