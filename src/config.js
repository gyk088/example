import Root from 'Root/root';
import menu1 from 'Layout/images/menu1.svg';
import menu2 from 'Layout/images/menu2.svg';
import menu3 from 'Layout/images/menu3.svg';
import menu4 from 'Layout/images/menu4.svg';
import menu5 from 'Layout/images/menu5.svg';
import menu6 from 'Layout/images/menu6.svg';
import QuasarConfig from './quasar.config';

QuasarConfig();

export default {
  historyApi: false,
  apiUrl: API_PREFIX,
  version: VERSION,
  rootPath: ROOT_PATH,
  rootModule: Root,
  mainModule: 'test',
  module404: '404',
  import: async (module) => await import(`./modules/${module}/module`),
  modules: {
    auth: {
      module: 'Auth',
    },
    main: {
      module: 'MainPage',
      layout: 'Layout',
      icon: menu1,
      title: 'Главная',
      inMenu: true,
    },
    404: {
      module: '404',
    },
    sales: {
      module: 'MainPage',
      layout: 'Layout',
      icon: menu2,
      title: 'Продажа СП',
      inMenu: true,
    },
    events: {
      module: 'MainPage',
      layout: 'Layout',
      icon: menu3,
      title: 'Страховое событие',
      inMenu: true,
    },
    partners: {
      module: 'MainPage',
      layout: 'Layout',
      icon: menu4,
      title: 'Партнеры',
      inMenu: true,
    },
    faq: {
      module: 'MainPage',
      layout: 'Layout',
      icon: menu5,
      title: 'FAQ',
      inMenu: true,
    },
    settings: {
      module: 'MainPage',
      layout: 'Layout',
      icon: menu6,
      title: 'Настройки',
      inMenu: true,
    },
    globalnotification: {
      global: true,
      module: 'Notification',
    },
    loader: {
      global: true,
      module: 'Loader',
    },
  },
};
