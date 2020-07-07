<template>
  <q-card class="auth-card">
    <div class="auth-title">
      Вход в личный кабинет
    </div>
    <form class="auth-form">
      <q-input
        v-model="email"
        outlined
        type="email"
        label="Email"
        class="auth-input"
        :error="errorEmail"
        @focus="onFocus"
      />
      <q-input
        v-model="password"
        outlined
        :type="isPwd ? 'password' : 'text'"
        label="Пароль"
        class="auth-input"
        autocomplete="on"
        :error="errorPass"
        @focus="onFocus"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            autocomplete="on"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>

      <q-btn
        unelevated
        color="primary"
        label="Войти"
        class="auth-btn"
        @click="auth"
      />
    </form>
    <div
      class="auth-forgot"
      @click="$emit('onForgot')"
    >
      Забыли пароль?
    </div>
  </q-card>
</template>

<script>
import Module from 'PageAuth/module';
import * as api from 'PageAuth/api';
import { ERR_PASS } from 'PageAuth/const';
import to from 'await-to-js';

export default {
  name: 'VueCardAuth',
  data: () => ({
    email: null,
    password: null,
    isPwd: true,
    errorPass: false,
    errorEmail: false,
  }),
  methods: {
    /**
    * Метод аторизации
    */
    async auth() {
      const module = new Module();

      const [err, res] = await to(api.auth(this.email, this.password));

      if (err) {
        this.errorHendler(err
          && err.response
          && err.response.data
          ? err.response.data.error
          : null);
      } else {
        localStorage.setItem('authentication_token', res.data.authentication_token);
        localStorage.setItem('refresh_token', res.data.refresh_token);
        module.$$rout({
          path: '/main',
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
        case ERR_PASS: {
          this.errorPass = true;
          errText = 'Неправильно введен пароль';
          break;
        }
        default: {
          this.errorPass = true;
          this.errorEmail = true;
          errText = 'Неправильно введен пароль или email';
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
      this.errorPass = false;
      this.errorEmail = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.auth {
    &-card {
      width: 480px;
      height: 436px;
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
      margin-top: 40px;
      margin-left: 30px;
      width: 420px;
      height: 56px;
      font-family: Roboto;
      font-size: 16px;
      font-weight: 500;
      border-radius: 6px;
    }

    &-forgot {
      font-family: Roboto;
      font-size: 14px;
      font-weight: 500;
      text-align: center;
      color: #8894b4;
      margin-top: 20px;
      margin-left: 185px;
      width: 110px;
      cursor: pointer;
    }

    &-forgot:hover {
      opacity: 0.7;
    }

    &-form {
      margin-top: 40px;
    }
}
</style>
