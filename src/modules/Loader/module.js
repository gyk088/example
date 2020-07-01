import Onedeck from 'onedeck';
import { Loading } from 'quasar';

/**
 * @module Loader
 */
export default class Loader extends Onedeck.Module {
  show() {
    Loading.show();
  }

  hide() {
    Loading.hide();
  }
}
