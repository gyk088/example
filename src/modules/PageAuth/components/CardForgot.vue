<template>
  <q-card class="auth-forgot-card">
    <div class="auth-forgot-title">
      Забыли пароль?
    </div>
    <form class="auth-forgot-form">
      <q-input
        v-model="email"
        outlined
        type="email"
        label="Email"
        class="auth-forgot-input"
        autocomplete="on"
        :error="errorEmail"
        @focus="onFocus"
      />

      <q-btn
        unelevated
        color="primary"
        label="Восстановить пароль"
        class="auth-forgot-btn"
        :disable="disableBtn"
        @click="sendEmail"
      />
    </form>

    <div
      class="auth-forgot-back"
      @click="$emit('onForgot')"
    >
      Вернуться обратно
    </div>
  </q-card>
</template>

<script>
import Module from 'PageAuth/module';
import api from 'API';
import { USER_NOT_FOUND } from 'PageAuth/const';
import to from 'await-to-js';
import utils from 'Utils';

export default {
  name: 'VueCardForgot',
  data: () => ({
    email: null,
    disableBtn: false,
    errorEmail: false,
  }),
  methods: {
    async sendEmail() {
      this.disableBtn = true;

      if (!utils.validate.email(this.email)) {
        this.errorEmail = true;
        return;
      }
      // eslint-disable-next-line
      const [err, res] = await to(api.auth.postForgotPass(this.email));
      if (err) {
        this.errorHendler(err
          && err.response
          && err.response.data
          ? err.response.data.error
          : null);
      } else {
        const module = new Module();
        module.$$gemit('notify', {
          type: 'positive',
          text: 'На вашу почту было отправлено письмо',
          time: 1500,
        });
      }
    },

    /**
    * Обработка ошибки аторизации
    * @param {String} err - текст с ошибкой (полчаем из бэка)
    */
    errorHendler(err) {
      let errText;

      switch (err) {
        case USER_NOT_FOUND: {
          this.errorEmail = true;
          errText = 'Пользователь с таким email не найден';
          break;
        }
        default: {
          this.errorEmail = true;
          errText = 'Пользователь с таким email не найден';
        }
      }

      const module = new Module();
      module.$$gemit('notify', {
        type: 'negative',
        text: errText,
        time: 1500,
      });
    },

    /**
    * Фокус на инпут, при фокусе сбрасываем влидацию
    */
    onFocus() {
      this.disableBtn = false;
      this.errorEmail = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.auth {
    &-forgot {
        &-card {
            width: 480px;
            height: 320px;
            border-radius: 10px;
            background-color: #FFF;
            margin: 0 auto;
            position: relative;
            top: 25%;
        }

        &-title {
            font-family: Roboto;
            font-size: 30px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            letter-spacing: normal;
            color: #424b5f;
            margin-left: 36px;
            padding-top: 30px;
        }

        &-input {
            margin-top: 20px;
            margin-left: 30px;
            width: 420px;
        }

        &-input:first-child {
            margin-top: 0px;
        }

        &-btn {
            margin-top: 20px;
            margin-left: 30px;
            width: 420px;
            height: 56px;
            font-family: Roboto;
            font-size: 16px;
            font-weight: 500;
            border-radius: 6px;
        }

        &-back {
            font-family: Roboto;
            font-size: 14px;
            font-weight: 500;
            text-align: center;
            color: #8894b4;
            margin-top: 20px;
            margin-left: 185px;
            width: 130px;
            cursor: pointer;
        }

        &-back:hover {
            opacity: 0.7;
        }

        &-form {
          margin-top: 40px;
        }
    }
}
</style>
