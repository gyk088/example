import Onedeck from 'onedeck';
import { Notify } from 'quasar';

/**
 * @constant NOTIFY_TIME - время уведомленяи по умолчнию в миллисекундах
 */
const NOTIFY_TIME = 500;

/**
 * @module Notification
 */
export default class Notification extends Onedeck.Module {
  /**
       * Вызвать уведомление
       * @param {Object} data
       * @param {String} data.text - текст уведомления
       * @param {String} [data.time = 500] - время уведомления
       */
  notify(data) {
    Notify.create({
      position: 'top',
      type: 'positive',
      timeout: data.time || NOTIFY_TIME,
      textColor: 'white',
      actions: [{ icon: 'close', color: 'white' }],
      message: data.text,
    });
  }
}
