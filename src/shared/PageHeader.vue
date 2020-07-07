<template>
  <div class="page-header">
    <div class="page-header-start">
      <div
        v-if="back"
        class="page-header-start-icon"
        @click="$emit('onBack')"
        v-html="iconBack"
      />
      <div class="page-header-start-title">
        {{ title }}
      </div>
    </div>
    <div class="page-header-end">
      <slot name="end" />
    </div>
  </div>
</template>

<script>
import iback from 'Images/icon/ic-back.svg';

export default {
  name: 'VuePageHeaderBack',
  props: {
    title: String,
    back: Boolean,
  },
  data: () => ({
    iconBack: iback,
  }),
};
</script>

<style lang="scss" scoped>
.page-header {
    display: flex;
    align-items: center;
    margin-bottom: 25px;
    height: 35px;
    justify-content: space-between;
    width: 100%;

    &-start {
        display: flex;
        align-items: center;
        &-title {
            font-family: Roboto-Regular;
            font-size: 30px;
        }

        &-icon {
            padding-right: 20px;
            width: 50px;
            height: 30px;
            cursor: pointer;
        }

        &-icon:hover {
            opacity: 0.6;
        }
    }

    &-end {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

}
</style>
