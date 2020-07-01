<template>
  <div id="root">
    <div class="layout">
      <Header />
      <div class="layout-wrapper">
        <Menu
          :current-page="currentPage"
        />

        <div
          id="content"
          class="layout-content"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Menu from 'Layout/components/Menu.vue';
import Header from 'Layout/components/Header.vue';
import store from 'Layout/store';
import { mapMutations } from 'vuex';

export default {
  el: '#root',
  name: 'VueLayout',
  store,
  components: {
    Menu,
    Header,
  },
  data: () => ({
    currentPage: 'main',
  }),
  created() {
    this.setMenu();
  },
  methods: {
    ...mapMutations(['setMenu']),
  },
};
</script>

<style lang="scss" scoped>

.layout {
    &-wrapper{
        display: flex;
    }
}
</style>
