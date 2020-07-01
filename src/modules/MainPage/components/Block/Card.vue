<template>
  <div class="main-page-block-card">
    <div
      class="main-page-block-card-icon"
      v-html="icon"
    />
    <div class="main-page-block-card-title">
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'VueMainPageBlockCard',

  props: {
    title: String,
    icon: String,
  },
};
</script>

<style lang="scss" scoped>
.main-page-block-card {
    width: 100%;
    height: 110px;
    margin: 0 auto;
    margin-bottom: 30px;
    border: solid 1px #e9eff4;
    border-radius: 15px;
    display: flex;
    align-items: center;

    &-icon {
        margin-left: 20px;
        width: 74px;
        height: 74px;
    }

    &-title {
        font-family: Roboto-Regular;
        font-size: 20px;
        color: #424b5f;
        margin-left: 15px;
    }
}
</style>
