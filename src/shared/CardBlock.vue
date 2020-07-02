<template>
  <div class="shared-block">
    <h2 class="shared-block-title">
      {{ title }}
    </h2>
    <Card
      v-for="item in items"
      :key="item.id"
      :item="item"
      @click="cardClick"
    />
  </div>
</template>

<script>
import Card from 'Shared/CardBlock/Card.vue';

export default {
  name: 'ShardCardBlock',
  components: {
    Card,
  },
  props: {
    title: String,
    items: Array,
  },
  methods: {
    cardClick(item) {
      this.$emit('cardClick', item);
    },
  },
};
</script>

<style lang="scss" scoped>
.shared-block {
    background-color: #FFF;
    width: 100%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    margin-left: 40px;
    margin-top: 40px;
    padding: 0 40px;

    &-title {
        font-family: Roboto-Regular;
        font-size: 30px;
        color: #424b5f;
        margin-top: 20px;
    }
}
.shared-block:last-child {
    margin-right: 20px;
    margin-left: 20px;
}
</style>
