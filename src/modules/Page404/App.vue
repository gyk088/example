<template>
  <div id="root">
    <div class="not-found">
      <div>
        <q-btn
          size="22px"
          class="q-px-xl q-py-xs"
          color="primary"
          label="404 страница не найдена, нажмите чтобы перейти на главную"
          icon-right="sentiment_very_dissatisfied"
          @click="home"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Module from 'Page404/module';

export default {
  el: '#root',
  name: 'VueApp',
  data: () => ({
    module: new Module(),
  }),
  methods: {
    home() {
      this.module.$$rout({
        path: '/main',
      });
    },
  },
};
</script>

<style scoped>
  .not-found {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    flex-direction: column;
  }
</style>
