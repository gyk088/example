export default class TableUI {
  constructor() {
    this.id = 'PartnersTable';
    return this.ui();
  }

  columns() {
    return [
      {
        id: 'test1', header: ['Юр. форма организации', { content: 'textFilter' }], sort: 'string', minWidth: 180, fillspace: true,
      },
      {
        id: 'test2', header: ['Название', { content: 'textFilter' }], sort: 'string', minWidth: 160, fillspace: true,
      },
      {
        id: 'test3', header: ['Юр. адрес', { content: 'textFilter' }], sort: 'string', minWidth: 160, fillspace: true,
      },
      {
        id: 'test4', header: ['Почтовый адрес', { content: 'textFilter' }], sort: 'string', minWidth: 160, fillspace: true,
      },
      {
        id: 'test5', header: ['ИНН', { content: 'textFilter' }], sort: 'string', minWidth: 160, fillspace: true,
      },
      {
        id: 'test6', header: ['КПП', { content: 'textFilter' }], sort: 'string', minWidth: 160, fillspace: true,
      },
      {
        id: 'test7', header: ['ФИО контктное лицо', { content: 'textFilter' }], sort: 'string', minWidth: 160, fillspace: true,
      },
      {
        id: 'test8', header: ['Номер телефона', { content: 'textFilter' }], sort: 'string', minWidth: 160, fillspace: true,
      },
      {
        id: 'test9', header: ['Email', { content: 'textFilter' }], sort: 'string', minWidth: 160, fillspace: true,
      },
    ];
  }

  ui() {
    return {
      id: this.id,
      container: 'EmbedPartnersTbl',
      view: 'datatable',
      select: 'row',
      css: 'embed-partners-tabel',
      height: 650,
      // для того чтобы не появлялся скролл отнимаем 2 px
      width: document.getElementById('PagePartnersSwitch').offsetWidth - 2,
      selected: true,
      columns: this.columns(),
    };
  }
}
