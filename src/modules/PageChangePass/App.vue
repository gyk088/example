<template>
  <div id="root">
    <div class="change-pass-background">
      <card />
      <div
        class="change-pass-logo"
        v-html="logo"
      />
    </div>
  </div>
</template>

<script>
import logo from 'Images/icon/logo-white.svg';
import Card from 'PageChangePass/components/Card.vue';

export default {
  el: '#root',
  name: 'VuePageChangePass',
  components: {
    Card,
  },
  data: () => ({
    logo,
  }),
};
</script>

<style lang="scss" scoped>
.change-pass {
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
