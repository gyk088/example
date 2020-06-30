<template>
  <div id="ROOT">
    <div class="auth-background">
      <card-forgot
        v-if="forgot"
        @onForgot="isForgot"
      />
      <card-auth
        v-else
        @onForgot="isForgot"
      />

      <div
        class="auth-logo"
        v-html="logo"
      />
    </div>
  </div>
</template>

<script>
import logo from 'Auth/images/logo-white.svg';

import CardAuth from 'Auth/components/CardAuth.vue';
import CardForgot from 'Auth/components/CardForgot.vue';

export default {
  el: '#ROOT',
  name: 'VueAuth',
  components: {
    CardAuth, CardForgot,
  },
  data: () => ({
    logo,
    forgot: false,
  }),
  methods: {
    isForgot() {
      this.forgot = !this.forgot;
    },
  },
};
</script>

<style lang="scss" scoped>
.auth {
    &-background {
      background-image: url("./images/background.jpg");
      height: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    &-logo {
      position: absolute;
      top: 65px;
      left: 65px;
      width: 299px;
      height: 65px;
    }
}
</style>
