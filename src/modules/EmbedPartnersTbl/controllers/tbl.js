/**
 * Контроллер для работы с таблицей
 */
import onedeck from 'onedeck';
import * as webix from 'webix';
import TableUI from 'EmbedPartnersTbl/views/tbl.ui';

export default class Table extends onedeck.Observable {
  constructor() {
    super();
    this.ui = new TableUI();
    this.id = this.ui.id;
    this.app = webix.ui(this.ui);

    webix.extend($$(this.id), webix.ProgressBar);

    this.loadData();
    this.eventHandler();
  }

  /**
     * Обработчик событий
     */
  eventHandler() {
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
      this.app.destructor();
      delete this;
    }
}
