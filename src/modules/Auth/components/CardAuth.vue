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
        :class="{error: errorEmail}"
        @focus="onFocus"
      />
      <q-input
        v-model="password"
        outlined
        :type="isPwd ? 'password' : 'text'"
        label="Пароль"
        class="auth-input"
        autocomplete="on"
        :class="{error: errorPass}"
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
import Module from 'Auth/module';
import * as api from 'Auth/api';
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
    async auth() {
      const module = new Module();

      const [err, res] = await to(api.auth(this.email, this.password));

      if (err) {
        this.errorPass = true;
        this.errorEmail = true;

        module.$$gemit('notify', {
          type: 'negative',
          text: 'Неправильно введен пароль или enail',
          time: 1500,
        });
      } else {
        console.log(res);
        this.module.$$rout({
          path: '/main',
        });
      }
    },

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
      margin-top: 40px;
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
