import Config from './config';
import './css/main.css';

document.addEventListener('DOMContentLoaded', () => {
  console.info('version: ', Config.version);
  // eslint-disable-next-line
    new Config.rootModule(Config);
});
