<template>
  <div
    class="shared-block-card"
    :class="{bold: item.bold}"
    @click="$emit('click', item)"
  >
    <div
      class="shared-block-card-icon"
      v-html="item.icon"
    />
    <div class="shared-block-card-title">
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'SharedBlockCard',

  props: {
    item: Object,
  },
};
</script>

<style lang="scss" scoped>
.shared-block-card {
    width: 100%;
    height: 110px;
    margin: 0 auto;
    margin-bottom: 30px;
    border: solid 1px #e9eff4;
    border-radius: 15px;
    display: flex;
    align-items: center;
    cursor: pointer;

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
.shared-block-card:hover {
  opacity: 0.8;
}

.bold {
  border: solid 1px #4694dd;

  .shared-block-card-title {
    color: #4694dd;
  }
}
</style>
