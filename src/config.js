import Root from 'Root/root';
import menu1 from 'Images/icon/menu1.svg';
import menu2 from 'Images/icon/menu2.svg';
import menu3 from 'Images/icon/menu3.svg';
import menu4 from 'Images/icon/menu4.svg';
import menu5 from 'Images/icon/menu5.svg';
import menu6 from 'Images/icon/menu6.svg';
import QuasarConfig from './quasar.config';

QuasarConfig();

export default {
  historyApi: false,
  version: VERSION,
  rootPath: ROOT_PATH,
  rootModule: Root,
  mainModule: 'main',
  module404: '404',
  import: async (module) => await import(`./modules/${module}/module`),
  modules: {
    auth: {
      module: 'Auth',
    },
    404: {
      module: '404',
    },
    globalnotification: {
      global: true,
      module: 'Notification',
    },
    loader: {
      global: true,
      module: 'Loader',
    },
    main: {
      module: 'MainPageAdmin',
      layout: 'Layout',
      icon: menu1,
      title: 'Главная Адимина',
      inMenu: true,
    },
    mainPartner: {
      module: 'MainPagePartner',
      layout: 'Layout',
      icon: menu1,
      title: 'Главная Партнёра',
      inMenu: true,
    },
    insurance: {
      module: 'InsurancePage',
      layout: 'Layout',
      inMenu: false,
    },
    sales: {
      module: 'MainPageAdmin',
      layout: 'Layout',
      icon: menu2,
      title: 'Продажа СП',
      inMenu: true,
    },
    events: {
      module: 'MainPageAdmin',
      layout: 'Layout',
      icon: menu3,
      title: 'Страховое событие',
      inMenu: true,
    },
    partners: {
      module: 'MainPageAdmin',
      layout: 'Layout',
      icon: menu4,
      title: 'Партнеры',
      inMenu: true,
    },
    faq: {
      module: 'MainPageAdmin',
      layout: 'Layout',
      icon: menu5,
      title: 'FAQ',
      inMenu: true,
    },
    settings: {
      module: 'MainPageAdmin',
      layout: 'Layout',
      icon: menu6,
      title: 'Настройки',
      inMenu: true,
    },
  },
};
