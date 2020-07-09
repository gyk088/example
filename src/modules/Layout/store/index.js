import Vue from 'vue';
import Vuex from 'vuex';
import Module from 'Layout/module';

Vue.use(Vuex);

const defaultState = () => ({
  isShowMenu: true,
  menu: [],
});

export default new Vuex.Store({
  state: defaultState(),
  mutations: {
    setState(state, patch = { name: '', value: null }) {
      Vue.set(state, patch.name, patch.value);
    },

    setMenu(state) {
      const module = new Module();
      const menu = [];
      Object.keys(module.$$config.modules).forEach((k) => {
        const page = module.$$config.modules[k];
        if (page.inMenu) {
          menu.push({
            id: k,
            title: page.title,
            icon: page.icon,
            url: `/${k}`,
          });
        }
      });

      Vue.set(state, 'menu', menu);
    },
  },
});
