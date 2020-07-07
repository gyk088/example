<template>
  <div id="root">
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
import logo from 'Images/icon/logo-white.svg';

import CardAuth from 'PageAuth/components/CardAuth.vue';
import CardForgot from 'PageAuth/components/CardForgot.vue';

export default {
  el: '#root',
  name: 'VuePageAuth',
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
      background-image: url("../../images/background.jpg");
      height: 100vh;
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
