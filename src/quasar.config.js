import Vue from 'vue';
import 'quasar/dist/quasar.min.css';
import Quasar, {
  QBtn,
  QInput,
  QCard,
  QIcon,
} from 'quasar';

export default () => Vue.use(Quasar, {
  config: {
    brand: {
      primary: '#85B8E9',
      secondary: '#ffa35f',
    },
  },
  components: {
    QCard,
    QBtn,
    QInput,
    QIcon,
  },
});
