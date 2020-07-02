<template>
  <div class="insurance-page-header">
    <div
      class="insurance-page-header-icon"
      @click="$emit('iconClick')"
      v-html="iconBack"
    />
    <div class="insurance-page-header-title">
      {{ title }}
    </div>
  </div>
</template>

<script>
import iback from 'Images/icon/ic-back.svg';

export default {
  el: '#content',
  name: 'VueInsurancePageHeader',
  props: {
    title: String,
  },
  data: () => ({
    iconBack: iback,
  }),
};
</script>

<style lang="scss" scoped>
.insurance-page-header {
    display: flex;
    align-items: center;

    &-title {
        font-family: Roboto-Regular;
        font-size: 30px;
        padding-left: 20px;
    }

    &-icon {
        width: 30px;
        height: 30px;
        cursor: pointer;
    }

    &-icon:hover {
        opacity: 0.6;
    }
}
</style>
