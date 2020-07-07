import Onedeck from 'onedeck';
import Tbl from 'EmbedPartnersTbl/controllers/tbl';
import 'webix/webix.css';
import 'webix/skins/mini.min.css';

/**
 * @moduel EmbedPartnersTbl
 */
export default class EmbedPartnersTbl extends Onedeck.Module {
  init() {
    this.Tbl = new Tbl();
  }

  destroy() {
    this.$$offAll();
    this.Tbl.destroy();
  }
}
