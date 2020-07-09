/**
 * Контроллер для работы с таблицей
 */
import onedeck from 'onedeck';
import * as webix from 'webix';
import TableUI from 'EmbedPartnersTbl/views/tbl.ui';
import LayoutModule from 'Layout/module';

export default class Table extends onedeck.Observable {
  constructor() {
    super();
    this.ui = new TableUI();
    this.id = this.ui.id;
    this.app = webix.ui(this.ui);

    // На основании этого div мы вычисляем первоночальную ширину таблицы
    // -2 для того чтобы не появлялся скрол
    // см views/tbl.ui.js метод ui
    this.tableWidth = document.getElementById('PagePartnersSwitch').offsetWidth - 2;
    // На основании этого div мы вычисляем изменения размера таблицы
    this.changeWidth = document.getElementById('MenuBlock').offsetWidth;

    webix.extend($$(this.id), webix.ProgressBar);

    this.loadData();
    this.eventHandler();
  }

  /**
     * Обработчик событий
     */
  eventHandler() {
    const layout = new LayoutModule();
    layout.$$on('onShowMenu', this.resize.bind(this));
  }

  /**
   * Изменить размер таблицы
   */
  resize(isShow) {
    setTimeout(() => {
      const width = isShow ? this.tableWidth : this.tableWidth + this.changeWidth;
      $$(this.id).define('width', width);
      $$(this.id).resize();
    }, isShow ? 1 : 500);
  }

  /**
   * Загрузка данных в таблицу
   */
  loadData = async () => {
    $$(this.id).clearAll();

    $$(this.id).showProgress({
      type: 'icon',
    });

    setTimeout(() => {
      $$(this.id).hideProgress();
    }, 1000);
  }

  /**
   * Деструктор
   */
  destroy() {
    const layout = new LayoutModule();
    layout.$$off('onShowMenu', this.resize);
    this.app.destructor();
    delete this;
  }
}
