import Root from 'Root/root';
import QuasarConfig from './quasar.config';

QuasarConfig();

export default {
  historyApi: false,
  apiUrl: API_PREFIX,
  version: VERSION,
  rootPath: ROOT_PATH,
  rootModule: Root,
  mainModule: 'main',
  import: async (module) => await import(`./modules/${module}/module`),
  modules: {
    main: {
      module: 'Auth',
    },
    notfound: {
      module: 'Auth',
    },
    globalnotification: {
      global: true,
      module: 'Notification',
    },
  },
};
