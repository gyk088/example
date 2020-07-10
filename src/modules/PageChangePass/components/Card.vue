<template>
  <q-card class="auth-card">
    <div class="auth-title">
      Изменить  пароль
    </div>
    <form class="auth-form">
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

      <q-input
        v-model="checkPassword"
        outlined
        :type="isPwdCheck ? 'password' : 'text'"
        label="Повторите Пароль"
        class="auth-input"
        autocomplete="on"
        :error="errorPass"
        @focus="onFocus"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwdCheck ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            autocomplete="on"
            @click="isPwdCheck = !isPwdCheck"
          />
        </template>
      </q-input>

      <q-btn
        unelevated
        color="primary"
        label="Изменить"
        class="auth-btn"
        @click="change"
      />
    </form>
  </q-card>
</template>

<script>
import Module from 'PageChangePass/module';
import api from 'API';
import to from 'await-to-js';

export default {
  name: 'VueCardAuth',
  props: {
    hash: String,
  },
  data: () => ({
    checkPassword: null,
    password: null,
    isPwd: true,
    isPwdCheck: true,
    errorPass: false,
  }),
  methods: {
    /**
    * Метод аторизации
    */
    async change() {
      const module = new Module();
      if (!this.password || this.password !== this.checkPassword) {
        this.errorPass = true;
        module.$$gemit('notify', {
          type: 'negative',
          text: 'Пароли не совподают',
          time: 1500,
        });
        return;
      }

      // eslint-disable-next-line
      const [err, res] = await to(api.auth.postChagePass(this.hash, this.password));
      if (err) {
        module.$$gemit('notify', {
          type: 'error',
          text: 'Что-то пошло не так',
          time: 1500,
        });
      } else {
        module.$$gemit('notify', {
          type: 'positive',
          text: 'Пароль Успешно изменен',
          time: 1500,
        });

        module.$$rout({
          path: '/auth',
        });
      }
    },

    /**
    * Фокус на инпут, при фокусе сбрасываем влидацию
    */
    onFocus() {
      this.errorPass = false;
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
