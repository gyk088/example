import Vue from 'vue';
import Vuex from 'vuex';
import api from 'API';
import to from 'await-to-js';
import Module from 'PageAddPartner/module';
import utils from 'Utils';

Vue.use(Vuex);

const defaultState = () => ({
  partner: {
    company_name: null,
    city: null,
    legal_address: null,
    actual_address: null,
    ITN: null,
    RRC: null,
    site_url: null,
    work_time: null,
    have_EDM: null,
    full_name: null,
    phone: null,
    email: null,
  },
  valid: {
    company_name: false,
    city: false,
    legal_address: false,
    actual_address: false,
    ITN: false,
    RRC: false,
    full_name: false,
    phone: false,
    have_EDM: false,
    email: false,
  },
});

export default new Vuex.Store({
  state: defaultState(),
  getters: {
    isValid(state) {
      return Object.keys(state.valid).every((k) => !state.valid[k]);
    },
  },
  actions: {
    async invite({ state, commit, getters }) {
      const module = new Module();
      commit('validate');

      if (getters.isValid) {
        const [err, res] = await to(api.partner.postInvite(state.partner));
        if (err) {
          module.$$gemit('notify', {
            type: 'negative',
            text: err.response.data.error,
            time: 1000,
          });
        } else {
          console.log(res);
        }
      } else {
        module.$$gemit('notify', {
          type: 'negative',
          text: 'Заполните все обязательные поля *',
          time: 1000,
        });
      }
    },

  },
  mutations: {
    updatePartner(state, patch) {
      Vue.set(state, 'partner', { ...state.partner, ...patch });
      console.log(state.partner);
    },
    updateValidate(state, patch) {
      Vue.set(state, 'valid', { ...state.valid, ...patch });
    },
    validate(state) {
      Object.keys(state.partner).forEach((k) => {
        if (k in state.valid) {
          switch (k) {
            case 'company_name':
            case 'city':
            case 'legal_address':
            case 'actual_address':
            case 'full_name': {
              state.valid[k] = !state.partner[k];
              break;
            }
            case 'email': {
              console.log(utils.validate.email(state.partner[k]));
              state.valid[k] = !utils.validate.email(state.partner[k]);
              break;
            }
            case 'phone': {
              state.valid[k] = !utils.validate.phone(state.partner[k]);
              break;
            }
            default: {
              state.valid[k] = true;
            }
          }
        }
      });
    },
  },
});
