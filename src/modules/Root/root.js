import Onedeck from 'onedeck';
import Notification from 'Notification/module';

/**
 * @module Root
 */
export default class Root extends Onedeck.RootModule {
  init() {
    this.Notification = new Notification();

    this.eventHandler();
  }

  eventHandler() {
    this.$$on('notify', (data) => {
      this.Notification.notify(data);
    });
  }
}
