<template>
  <div class="main-page-block">
    <h2 class="main-page-block-title">
      {{ title }}
    </h2>
    <Card
      v-for="item in items"
      :key="item.id"
      :title="item.title"
      :icon="item.icon"
    />
  </div>
</template>

<script>
import Card from 'MainPage/components/Block/Card.vue';

export default {
  name: 'VueMainPageBlock',
  components: {
    Card,
  },
  props: {
    title: String,
    items: Array,
  },
};
</script>

<style lang="scss" scoped>
.main-page-block {
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
.main-page-block:last-child {
    margin-right: 20px;
    margin-left: 20px;
}
</style>
